import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2/inject.js"; // without the version number // Botpress Web Chat URL
    script.async = true;
    document.body.appendChild(script);

    // Check if the script is loaded and initialize the chatbot
    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          host: "https://cdn.botpress.cloud/webchat",
          botId: "de7548d6-95c4-496c-b7e0-714f1a096b29",
          messaging: {
            greeting: "Hello! How can I assist you today?",
            botName: "witty-shark",
          },
        });
      } else {
        console.error("Botpress Web Chat failed to load.");
      }
    };

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No need to render anything here, the bot is injected via the script
};

export default ChatBot;
