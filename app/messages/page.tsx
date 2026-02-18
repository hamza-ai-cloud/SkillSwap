'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import NeonCard from '../components/NeonCard';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';
import { messages as initialMessages, currentUser } from '../data/dummyData';
import { FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: String(messages.length + 1),
      senderId: currentUser.id,
      senderName: currentUser.name,
      content: newMessage,
      timestamp: new Date().toISOString(),
      isRead: true,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[#00ffff] mb-2 font-[family-name:var(--font-orbitron)] neon-text-cyan">
            Messages
          </h1>
          <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
            Chat with your skill swap partners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <NeonCard variant="cyan">
                <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-orbitron)]">
                  Conversations
                </h3>
                <div className="space-y-2">
                  {[
                    { name: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', unread: 2 },
                    { name: 'Mike Rodriguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike', unread: 0 },
                    { name: 'Emily Watson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily', unread: 1 },
                  ].map((contact) => (
                    <div
                      key={contact.name}
                      className="flex items-center space-x-3 p-3 rounded-lg border-2 border-[#00ffff]/30 hover:border-[#00ffff] cursor-pointer transition-all duration-300"
                    >
                      <div className="relative w-10 h-10 rounded-full border-2 border-[#00ffff] overflow-hidden">
                        <Image
                          src={contact.avatar}
                          alt={contact.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm font-[family-name:var(--font-orbitron)]">
                          {contact.name}
                        </div>
                        {contact.unread > 0 && (
                          <div className="text-xs text-[#00ffff]">
                            {contact.unread} new
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </NeonCard>
            </motion.div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <NeonCard variant="magenta" className="h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center space-x-3 pb-4 border-b-2 border-[#ff00ff]/30">
                  <div className="relative w-12 h-12 rounded-full border-2 border-[#ff00ff] overflow-hidden">
                    <Image
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold font-[family-name:var(--font-orbitron)]">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-400">Online</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto py-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${message.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.senderId === currentUser.id ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`px-4 py-3 rounded-lg ${
                            message.senderId === currentUser.id
                              ? 'bg-[#00ffff] text-black'
                              : 'bg-black/60 border-2 border-[#ff00ff]'
                          }`}
                        >
                          <p className="font-[family-name:var(--font-poppins)]">
                            {message.content}
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 px-2">
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="pt-4 border-t-2 border-[#ff00ff]/30">
                  <div className="flex space-x-2">
                    <NeonInput
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      variant="magenta"
                      className="flex-1"
                    />
                    <NeonButton type="submit" variant="magenta">
                      <FaPaperPlane />
                    </NeonButton>
                  </div>
                </form>
              </NeonCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
