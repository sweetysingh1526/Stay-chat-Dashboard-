import React from 'react';
import {
  Home, MessageSquare, Users, Zap, Building, Calendar, 
  Bell, BarChart2, FileText, Bot, ChevronDown, ChevronLeft,
  Search, RotateCcw, TrendingUp, Clock, CheckCircle2,
  LogOut, Sparkles
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-icon green-glow">
            <Building size={20} className="green-icon" />
          </div>
          <div className="logo-text">
            <h2>StayChat AI</h2>
            <p>Hotel Communication</p>
          </div>
          <button className="collapse-btn">
            <ChevronLeft size={16} />
          </button>
        </div>

        <nav className="nav-menu">
          <div className="nav-item active">
            <Home size={18} className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <MessageSquare size={18} className="nav-icon" />
            <span>Chats</span>
          </div>
          <div className="nav-item">
            <Users size={18} className="nav-icon" />
            <span>Leads & Inquiries</span>
          </div>
          
          <div className="spacer"></div>
          
          <div className="nav-item">
            <Zap size={18} className="nav-icon" />
            <span>Automation</span>
            <ChevronDown size={14} className="nav-chevron" />
          </div>
          <div className="nav-item">
            <Building size={18} className="nav-icon" />
            <span>Hotel Profiles</span>
            <ChevronDown size={14} className="nav-chevron" />
          </div>
          <div className="nav-item">
            <Calendar size={18} className="nav-icon" />
            <span>Bookings Integration</span>
          </div>
          <div className="nav-item">
            <Bell size={18} className="nav-icon" />
            <span>Notifications</span>
          </div>
          
          <div className="spacer"></div>
          
          <div className="nav-item">
            <BarChart2 size={18} className="nav-icon" />
            <span>Analytics</span>
          </div>
          <div className="nav-item">
            <FileText size={18} className="nav-icon" />
            <span>Audit Logs</span>
          </div>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <div className="hotel-selector">
              <div className="hotel-info">
                <h3>HOTEL SANIDHYAM</h3>
                <p>Bengali Tola, Varanasi</p>
              </div>
              <ChevronDown size={16} className="text-secondary" />
            </div>
          </div>

          <div className="header-right">
            <div className="search-box">
              <Search size={16} className="search-icon text-secondary" />
              <input type="text" placeholder="Search hotels, guests, or mess" />
            </div>
            
            <button className="icon-btn">
              <RotateCcw size={18} />
            </button>
            
            <button className="icon-btn has-badge">
              <Bell size={18} />
              <span className="badge">3</span>
            </button>

            <div className="user-profile">
              <div className="avatar">JD</div>
              <div className="user-info">
                <span className="user-name">John Doe</span>
                <span className="user-role">Manager</span>
              </div>
              <ChevronDown size={16} className="text-secondary" />
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="welcome-section">
            <h1>Welcome back, <span className="highlight-text">admin</span></h1>
            <p>Here's what's happening with your hotels today.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Calendar size={20} className="purple-icon" />
              </div>
              <div className="stat-label">Total Bookings</div>
              <div className="stat-value">1,249</div>
              <div className="stat-trend positive">+12.5% from last month</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <MessageSquare size={20} className="purple-icon" />
              </div>
              <div className="stat-label">Response Rate</div>
              <div className="stat-value">98.4%</div>
              <div className="stat-trend positive">+2.1% improvement</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Bot size={20} className="purple-icon" />
              </div>
              <div className="stat-label">AI Chats Active</div>
              <div className="stat-value">47</div>
              <div className="stat-trend neutral">Currently handled by AI</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <TrendingUp size={20} className="purple-icon" />
              </div>
              <div className="stat-label">Revenue Growth</div>
              <div className="stat-value">₹24.8K</div>
              <div className="stat-trend positive">+18.2% this quarter</div>
            </div>
          </div>

          <div className="content-grid">
            {/* Left Column */}
            <div className="ai-assistant-panel">
              <div className="panel-header">
                <div className="ai-title">
                  <div className="ai-icon-mini">
                    <Bot size={16} />
                  </div>
                  <h2>AI Assistant</h2>
                  <span className="tag">ACTIVE & LEARNING</span>
                </div>
                <p>Real-time intelligence generated by StayChat AI across all hotel operations.</p>
              </div>

              <div className="ai-logs">
                <div className="log-item">
                  <p>"Upsold breakfast to Room 305"</p>
                </div>
                <div className="log-item">
                  <p>"Created maintenance ticket #405"</p>
                </div>
                <div className="log-item">
                  <p>"Auto-replied to late check-out request"</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="quick-stats-panel">
              <h2>Quick Stats</h2>
              <div className="stats-list">
                <div className="list-stat-item">
                  <div className="list-stat-left">
                    <Clock size={16} className="text-secondary" />
                    <span>Avg. Response Time</span>
                  </div>
                  <div className="list-stat-right">
                    <span className="trend positive">-15%</span>
                  </div>
                  <div className="list-stat-value">1.2s</div>
                </div>

                <div className="list-stat-item">
                  <div className="list-stat-left">
                    <CheckCircle2 size={16} className="text-secondary" />
                    <span>Guest Satisfaction</span>
                  </div>
                  <div className="list-stat-right">
                    <span className="trend positive">+8%</span>
                  </div>
                  <div className="list-stat-value">4.9/5.0</div>
                </div>

                <div className="list-stat-item">
                  <div className="list-stat-left">
                    <Bot size={16} className="text-secondary" />
                    <span>Resolved by AI</span>
                  </div>
                  <div className="list-stat-right">
                    <span className="trend positive">+12%</span>
                  </div>
                  <div className="list-stat-value">85%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fab-ai">
        <Sparkles size={18} />
        <span>AI Assistant</span>
      </button>
    </div>
  );
}

export default App;
