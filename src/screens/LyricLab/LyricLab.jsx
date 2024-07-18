import React, { useState, useEffect } from "react";
import * as S from "./Styled-LyricLab";
import TopicList from "../LyricLab/components/TopicList";
import Speech from "../LyricLab/components/Speech";
import CircularMenu from "./components/CircularMenu";

const removeUnwantedText = (lyrics, songName, artistName) => {
  if (!lyrics || !songName || !artistName) return lyrics;
  const regex = new RegExp(`Paroles de la chanson ${songName} par ${artistName}`, 'i');
  return lyrics.replace(regex, '').trim();
};

const LyricLab = ({ lyrics = "", songName = "", artistName = "", backgroundColor, sidebarExpanded }) => {
  const [cleanedLyrics, setCleanedLyrics] = useState("");
  const [highlightedLyrics, setHighlightedLyrics] = useState("");
  const [activeOption, setActiveOption] = useState("");
  const [isTopicListVisible, setIsTopicListVisible] = useState(false);
  const [isSpeechVisible, setIsSpeechVisible] = useState(false);

  useEffect(() => {
    const cleaned = removeUnwantedText(lyrics, songName, artistName);
    setCleanedLyrics(cleaned);
    setHighlightedLyrics("");
  }, [lyrics, songName, artistName]);

  const handleMouseEnter = () => {
    setIsTopicListVisible(true);
    setIsSpeechVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTopicListVisible(false);
    setIsSpeechVisible(false);
  };

  const highlightQuestions = () => {
    if (!cleanedLyrics) return;
    const questionPattern = /(\b(?:who|what|when|where|why|how|have|is|are|am|was|were|will|shall|could|can|should|would|do|you've|if|the)\b.+?[?!.])/gi;
    const highlighted = cleanedLyrics.replace(questionPattern, '<span class="highlighted-question">$1</span>');
    setHighlightedLyrics(highlighted);
    setActiveOption("questions");
  };

  const highlightWhose = () => {
    if (!cleanedLyrics) return;
    const whosePattern = /(\bwho's\b[^?.!]*\?)/gi;
    const highlighted = cleanedLyrics.replace(whosePattern, '<span class="highlighted-question">$1</span>');
    setHighlightedLyrics(highlighted);
    setActiveOption("whose");
  };

  const stateVerbs = [
    'be', 'have', 'do', 'say', 'see', 'look', 'hear', 'know', 'think', 'believe', 'remember', 
    'forget', 'understand', 'want', 'need', 'prefer', 'like', 'love', 'hate', 'desire', 'wish', 
    'hope', 'fear', 'seem', 'appear', 'sound', 'taste', 'smell', 'belong', 'possess', 'contain', 
    'consist', 'include', 'involve', 'owe', 'own'
  ];

  const highlightStateVerbs = () => {
    if (!cleanedLyrics) return;
    const stateVerbsPattern = new RegExp(`\\b(${stateVerbs.join('|')})\\b`, 'gi');
    const highlighted = cleanedLyrics.replace(stateVerbsPattern, '<span class="highlighted-question">$1</span>');
    setHighlightedLyrics(highlighted);
    setActiveOption("stateVerbs");
  };

  useEffect(() => {
    setIsTopicListVisible(false);
    setIsSpeechVisible(false);
  }, [lyrics]);

  const isSidebarExpandedOrLargeScreen = sidebarExpanded || window.innerWidth > 768;

  const handleCloseLyricLab = (updateFunc) => {
    updateFunc(false);
  };

  return (
    <S.LyricLabContainer className={isSidebarExpandedOrLargeScreen ? "expanded" : ""} style={{ backgroundColor }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.LyricText dangerouslySetInnerHTML={{ __html: highlightedLyrics || cleanedLyrics }} />
      {isSidebarExpandedOrLargeScreen && (
        <>
          {isTopicListVisible && <TopicList highlightQuestions={highlightQuestions} highlightWhose={highlightWhose} highlightStateVerbs={highlightStateVerbs} activeOption={activeOption} />}
          {isSpeechVisible && <Speech />}
        </>
      )}
      {(isTopicListVisible || isSpeechVisible) && (
        <CircularMenu
          onHighlightQuestions={highlightQuestions}
          onHighlightWhose={highlightWhose}
          onHighlightStateVerbs={highlightStateVerbs}
          onCloseLyricLab={handleCloseLyricLab}
          showMenu={isTopicListVisible || isSpeechVisible}
        />
      )}
    </S.LyricLabContainer>
  );
};

export default LyricLab;
