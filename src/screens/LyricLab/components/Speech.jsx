import React, { useState, useEffect } from "react";
import * as S from "../Styled-LyricLab";
import { FaMicrophone } from "react-icons/fa";

const recognition = new window.webkitSpeechRecognition();

const Speech = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const currentTranscript =
        event.results[event.results.length - 1][0].transcript;
      setTranscript(prevTranscript => prevTranscript + " " + currentTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  const resetTranscript = () => {
    setTranscript("");
  };

  return (
    <S.SpeechWrapper className={isListening ? "active" : ""}>
      <S.FaMicrophoneContainer
      onClick={() => {
          if (isListening) {
            stopListening();
          } else {
            startListening();
          }
        }}
        isListening={isListening}
      >
        <FaMicrophone size={40} color={isListening ? "#00ccbb" : "#FFFFFF"} />
      </S.FaMicrophoneContainer>
      <S.TranscriptContainer>
        <S.Transcript>{transcript}</S.Transcript>
      </S.TranscriptContainer>
    </S.SpeechWrapper>
  );
};

export default Speech;
