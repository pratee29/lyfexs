import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Video, VideoOff, PhoneOff, Send, Users, Settings } from "lucide-react";

const participants = [
  { id: 1, name: "Sarah Chen", isSpeaking: true },
  { id: 2, name: "Alex Rivera", isSpeaking: false },
  { id: 3, name: "Michael Brown", isSpeaking: false },
  { id: 4, name: "Emily Johnson", isSpeaking: true },
];

const messages = [
  { id: 1, user: "Sarah Chen", text: "Welcome everyone to the discussion!", time: "10:30 AM" },
  { id: 2, user: "Alex Rivera", text: "Excited to be here!", time: "10:31 AM" },
  { id: 3, user: "Michael Brown", text: "Great topic today", time: "10:32 AM" },
];

export default function DiscussionRoom() {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [messageText, setMessageText] = useState("");
  const [accessType, setAccessType] = useState<"view" | "talk" | "create">("talk");

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText("");
    }
  };

  return (
    <div className="h-screen bg-[#0f172a] flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Python Programming Basics</h1>
          <div className="flex items-center gap-4 mt-1">
            <span className="flex items-center gap-2 text-sm text-white/60">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              LIVE
            </span>
            <span className="text-sm text-white/60">Scheduled: Today, 6:00 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="border-white/10 text-white hover:bg-white/10">
            <Users className="w-5 h-5" />
          </Button>
          {accessType === "create" && (
            <Button variant="outline" size="icon" className="border-white/10 text-white hover:bg-white/10">
              <Settings className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex overflow-hidden">
        {/* VIDEO GRID */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 h-fit">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className={`relative aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border transition-all duration-300 ${
                  participant.isSpeaking ? "border-orange-400 shadow-lg shadow-orange-500/30" : "border-white/10"
                }`}
              >
                {/* VIDEO PLACEHOLDER */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                    {participant.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>

                {/* NAME TAG */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                  {participant.name}
                </div>

                {/* SPEAKING INDICATOR */}
                {participant.isSpeaking && (
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-3 bg-orange-400 rounded-full animate-pulse" />
                      <div className="w-1 h-4 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}} />
                      <div className="w-1 h-5 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CHAT PANEL */}
        <div className="w-full sm:w-80 md:w-96 border-l border-white/10 backdrop-blur-xl bg-white/5 flex flex-col">
          {/* CHAT HEADER */}
          <div className="px-4 py-3 border-b border-white/10">
            <h3 className="text-white font-semibold">Chat</h3>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-orange-400">{message.user}</span>
                  <span className="text-xs text-white/40">{message.time}</span>
                </div>
                <p className="text-sm text-white/80">{message.text}</p>
              </div>
            ))}
          </div>

          {/* CHAT INPUT */}
          <div className="p-4 border-t border-white/10">
            {accessType === "view" ? (
              <div className="text-center text-white/40 text-sm py-3">
                Chat is read-only for View Access
              </div>
            ) : (
              <div className="flex gap-2">
                <Input
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400/20"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-orange-500 hover:bg-orange-600 text-black"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CONTROLS */}
      <div className="backdrop-blur-xl bg-white/5 border-t border-white/10 px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => setIsMicOn(!isMicOn)}
            disabled={accessType === "view"}
            className={`w-14 h-14 rounded-full transition-all duration-300 ${
              isMicOn
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            } ${accessType === "view" ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
          </Button>

          <Button
            onClick={() => setIsCameraOn(!isCameraOn)}
            className={`w-14 h-14 rounded-full transition-all duration-300 ${
              isCameraOn
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            {isCameraOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </Button>

          <Button className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300">
            <PhoneOff className="w-6 h-6" />
          </Button>

          {accessType === "create" && (
            <Button className="ml-4 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
              End Session
            </Button>
          )}
        </div>

        {/* ACCESS TYPE INFO */}
        <div className="text-center mt-3 text-xs text-white/40">
          {accessType === "view" && "View Access: Watch-only mode"}
          {accessType === "talk" && "Talk Access: Mic enabled"}
          {accessType === "create" && "Create Access: Full host controls"}
        </div>
      </div>
    </div>
  );
}
