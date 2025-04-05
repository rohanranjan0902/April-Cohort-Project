import React from 'react';

const CallPlayer = ({ audioUrl, transcription }) => {
  return (
    <div className="call-player">
      <h2>Call Player</h2>
      <audio controls src={audioUrl}></audio>
      <div className="transcription">
        <h3>Transcription:</h3>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default CallPlayer;
