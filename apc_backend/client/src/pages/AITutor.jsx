import { useState, useEffect, useRef } from "react";
import { chatWithTutor, getTutorConversations, getTutorConversation, deleteTutorConversation } from "../api";
import {
  MessageSquare,
  Send,
  Plus,
  Trash2,
  Bot,
  User as UserIcon,
} from "lucide-react";

export default function AITutor() {
  const [conversations, setConversations] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(true);

  const messagesEndRef = useRef(null);

  async function loadConversations() {
    try {
      const res = await getTutorConversations();
      setConversations(res.data.conversations || []);
    } catch (err) {
      console.error("Failed to load tutor conversations:", err);
    } finally {
      setListLoading(false);
    }
  }

  useEffect(() => {
    loadConversations();
  }, []);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadConversationDetails = async (convId) => {
    setActiveId(convId);
    setLoading(true);
    try {
      const res = await getTutorConversation(convId);
      setMessages(res.data.conversation?.messages || []);
    } catch (err) {
      console.error("Failed to load chat details:", err);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    setActiveId(null);
    setMessages([]);
    setInput("");
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");

    // Append user message locally
    const updatedMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const res = await chatWithTutor({
        message: userMsg,
        conversationId: activeId || undefined,
      });

      // Append AI reply
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.data.message },
      ]);

      if (!activeId) {
        // We started a new conversation; update ID and refresh sidebar
        setActiveId(res.data.conversationId);
        await loadConversations();
      }
    } catch (err) {
      alert("Failed to send message: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConversation = async (convId, e) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this chat session?")) return;
    try {
      await deleteTutorConversation(convId);
      if (activeId === convId) {
        startNewChat();
      }
      await loadConversations();
    } catch (err) {
      alert("Failed to delete conversation");
    }
  };

  return (
    <div className="h-[80vh] flex flex-col md:flex-row glass-panel rounded-2xl overflow-hidden border border-slate-800/60 animate-fadeIn">
      {/* Sidebar Conversation List */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-900 bg-slate-950/40 p-4 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-4 overflow-hidden flex flex-col h-full">
          <button
            onClick={startNewChat}
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>New Chat</span>
          </button>

          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1.5 pr-0.5">
            {listLoading ? (
              <div className="text-center text-slate-500 py-6 text-xs">Loading sessions...</div>
            ) : conversations.length === 0 ? (
              <div className="text-center text-slate-500 py-6 text-xs">No active chats</div>
            ) : (
              conversations.map((conv) => {
                const isActive = activeId === conv.id;
                return (
                  <div
                    key={conv.id}
                    onClick={() => loadConversationDetails(conv.id)}
                    className={`group w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left cursor-pointer transition-all ${
                      isActive
                        ? "bg-slate-900 border border-slate-800 text-blue-400 font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 overflow-hidden">
                      <MessageSquare className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs truncate max-w-[140px]">
                        {conv.title || "Tutor Conversation"}
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleDeleteConversation(conv.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-red-400 hover:bg-red-950/20 rounded transition-all"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </aside>

      {/* Main Chat Interface */}
      <section className="flex-1 flex flex-col justify-between bg-slate-900/10 relative">
        {/* Messages List Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center max-w-md mx-auto space-y-4">
              <div className="p-4 bg-blue-500/15 rounded-full text-blue-400">
                <Bot className="h-10 w-10" />
              </div>
              <h2 className="text-xl font-bold text-slate-200">AI Placement Tutor</h2>
              <p className="text-xs text-slate-400">
                Ask any doubts regarding Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, SQL, or mock interviews. I am ready to explain with examples.
              </p>
            </div>
          ) : (
            messages.map((msg, index) => {
              const isAI = msg.role === "assistant";
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-3 max-w-[85%] ${
                    isAI ? "mr-auto" : "ml-auto flex-row-reverse space-x-reverse"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isAI ? "bg-blue-600/15 text-blue-400" : "bg-indigo-600/15 text-indigo-400"}`}>
                    {isAI ? <Bot className="h-4.5 w-4.5" /> : <UserIcon className="h-4.5 w-4.5" />}
                  </div>

                  <div className={`p-4 rounded-2xl border ${
                    isAI
                      ? "bg-slate-900/60 border-slate-850 text-slate-350 text-sm whitespace-pre-line"
                      : "bg-[#1d4ed8]/10 border-blue-900/30 text-slate-100 text-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              );
            })
          )}

          {loading && (
            <div className="flex items-start space-x-3 max-w-[85%]">
              <div className="p-2 rounded-lg bg-blue-600/15 text-blue-400 animate-pulse">
                <Bot className="h-4.5 w-4.5" />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-850 text-slate-300 text-sm">
                <div className="flex items-center space-x-1.5 py-1">
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form Box */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-900 bg-slate-950/20">
          <div className="flex items-center space-x-3 bg-slate-900 border border-slate-800 focus-within:border-blue-500 rounded-xl px-4 py-2.5 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a technical or placement preparation doubt..."
              className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-50 text-white transition-all"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
