import React, { useState } from 'react';
import {
  MessageSquare, Users, Settings, Bell, Search,
  Phone, Video, LogOut, MessageCircle, UserPlus, Grid
} from 'lucide-react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('chats');

  const chats = [
    {
      id: 1,
      name: 'Alex Johnson',
      preview: 'Hey, are we still on for the meeting later?',
      time: '10:42 AM',
      unread: 2,
      online: true,
      avatar: '/contact_one.png'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      preview: 'The design looks great! Just a few minor tweaks needed.',
      time: '09:15 AM',
      unread: 0,
      online: false,
      avatar: '/contact_two.png'
    },
    {
      id: 3,
      name: 'Design Team',
      preview: 'Mike: I have uploaded the new assets.',
      time: 'Yesterday',
      unread: 5,
      online: true,
      avatar: 'https://i.pravatar.cc/150?img=32' // fallback if needed
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <MessageCircle size={28} color="var(--primary-color)" />
          StayChat
        </div>
        
        <nav className="nav-links">
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <Grid className="nav-icon" /> Dashboard
          </button>
          <button className={`nav-item ${activeTab === 'chats' ? 'active' : ''}`} onClick={() => setActiveTab('chats')}>
            <MessageSquare className="nav-icon" /> All Chats
          </button>
          <button className={`nav-item ${activeTab === 'contacts' ? 'active' : ''}`} onClick={() => setActiveTab('contacts')}>
            <Users className="nav-icon" /> Contacts
          </button>
          <button className={`nav-item ${activeTab === 'calls' ? 'active' : ''}`} onClick={() => setActiveTab('calls')}>
            <Phone className="nav-icon" /> Calls
          </button>
        </nav>

        <div className="nav-links" style={{ marginTop: 'auto', flex: 0 }}>
          <button className="nav-item">
            <Settings className="nav-icon" /> Settings
          </button>
          <button className="nav-item">
            <LogOut className="nav-icon" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="greeting">
            <h1>Good morning, Sweety! 👋</h1>
            <p>You have 7 new messages today.</p>
          </div>
          
          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} color="var(--text-secondary)" />
              <input type="text" placeholder="Search chats, contacts..." />
            </div>
            
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge"></span>
            </button>
            
            <img src="/user_avatar.png" alt="Sweety Profile" className="profile-avatar" />
          </div>
        </header>

        {/* Content Grid */}
        <div className="dashboard-grid">
          
          {/* Left Column */}
          <div className="column-left">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Recent Conversations</h2>
                <button className="see-all">See All</button>
              </div>
              
              <div className="chat-list">
                {chats.map((chat) => (
                  <div className="chat-item" key={chat.id}>
                    <div className="chat-avatar-wrapper">
                      <img src={chat.avatar} alt={chat.name} className="chat-avatar" 
                           onError={(e) => { e.target.src = 'https://i.pravatar.cc/150?u=' + chat.id }} />
                      <span className={`status-dot ${chat.online ? 'online' : 'offline'}`}></span>
                    </div>
                    
                    <div className="chat-details">
                      <div className="chat-name">{chat.name}</div>
                      <div className="chat-preview">{chat.preview}</div>
                    </div>
                    
                    <div className="chat-meta">
                      <span className="chat-time">{chat.time}</span>
                      {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="column-right">
            
            <div className="card" style={{ marginBottom: '24px' }}>
              <div className="card-header" style={{ marginBottom: '16px' }}>
                <h2 className="card-title">Quick Actions</h2>
              </div>
              
              <div className="quick-actions-grid">
                <div className="action-card">
                  <div className="action-icon blue">
                    <MessageSquare size={20} />
                  </div>
                  <span className="action-title">New Chat</span>
                </div>
                
                <div className="action-card">
                  <div className="action-icon green">
                    <UserPlus size={20} />
                  </div>
                  <span className="action-title">Add Contact</span>
                </div>
                
                <div className="action-card">
                  <div className="action-icon purple">
                    <Users size={20} />
                  </div>
                  <span className="action-title">New Group</span>
                </div>
                
                <div className="action-card">
                  <div className="action-icon orange">
                    <Video size={20} />
                  </div>
                  <span className="action-title">Start Meeting</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" style={{ marginBottom: '16px' }}>
                <h2 className="card-title">Updates</h2>
              </div>
              
              <div className="updates-list">
                <div className="update-item">
                  <div className="update-icon">
                    <Users size={18} />
                  </div>
                  <div className="update-content">
                    <h4>Design Team</h4>
                    <p>Meeting scheduled at 2:00 PM</p>
                  </div>
                </div>
                
                <div className="update-item">
                  <div className="update-icon">
                    <Bell size={18} />
                  </div>
                  <div className="update-content">
                    <h4>System Update</h4>
                    <p>New features available in v2.1</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
