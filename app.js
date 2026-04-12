/* ============================================
   CURA — Design Community App
   ============================================
   A component-based SPA with hash routing,
   built with vanilla JS for zero dependencies.
   ============================================ */

// =============================================
// SVG Icons
// =============================================
const Icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  homeFilled: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 7v11a2 2 0 0 1-2 2h-4v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H5a2 2 0 0 1-2-2V9l9-7z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  cameraFilled: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11zM12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFilled: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  userFilled: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2h16zM12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  bookmarkFilled: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  logOut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  messageCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
};

// =============================================
// Data Store (Mock Data + State)
// =============================================
const Store = {
  currentUser: null,
  currentPage: 'home',
  selectedPost: null,
  showPostDetail: false,
  subPage: null, // 'editProfile' | 'settings'

  users: [
    { id: 'u1', username: 'minimal.studio', displayName: 'Minimal Studio', bio: 'Creating calm spaces ✨', avatar: null, initials: 'MS', posts: ['p1','p3','p8'], followers: 1247, following: 89 },
    { id: 'u2', username: 'deskcraft', displayName: 'DeskCraft', bio: 'Setups that inspire productivity', avatar: null, initials: 'DC', posts: ['p2','p6'], followers: 892, following: 156 },
    { id: 'u3', username: 'wall.art', displayName: 'Wall Art', bio: 'Digital wallpapers & aesthetics', avatar: null, initials: 'WA', posts: ['p4','p7'], followers: 2103, following: 45 },
    { id: 'u4', username: 'lifestyle.lens', displayName: 'Lifestyle Lens', bio: 'Everyday beauty', avatar: null, initials: 'LL', posts: ['p5','p9','p10'], followers: 567, following: 234 },
  ],

  posts: [
    { id: 'p1', userId: 'u1', image: 'images/interior1.png', title: 'Dark Moody Living Room', description: 'A minimal approach to modern living. Dark walls with warm accent lighting create the perfect atmosphere for unwinding.', tags: ['interior', 'livingroom', 'moody', 'minimal'], likes: 342, comments: [], createdAt: '2026-04-11T10:00:00Z' },
    { id: 'p2', userId: 'u2', image: 'images/desk1.png', title: 'RGB Battlestation', description: 'My ultrawide gaming and productivity setup. Featuring custom RGB, mechanical keyboard, and a clean cable management solution.', tags: ['desksetup', 'gaming', 'rgb', 'ultrawide'], likes: 567, comments: [], createdAt: '2026-04-10T14:30:00Z' },
    { id: 'p3', userId: 'u1', image: 'images/interior2.png', title: 'City View Bedroom', description: 'Luxurious bedroom with a stunning city view. Premium linens and ambient lighting for the perfect night\'s rest.', tags: ['interior', 'bedroom', 'luxury', 'cityview'], likes: 890, comments: [], createdAt: '2026-04-09T18:00:00Z' },
    { id: 'p4', userId: 'u3', image: 'images/wallpaper1.png', title: 'Deep Navy Abstract', description: 'Abstract digital art wallpaper featuring deep navy gradients and geometric elements. Perfect for dark mode setups.', tags: ['wallpaper', 'abstract', 'dark', 'digital'], likes: 1203, comments: [], createdAt: '2026-04-08T09:00:00Z' },
    { id: 'p5', userId: 'u4', image: 'images/lifestyle1.png', title: 'Morning Workspace', description: 'Starting the day right with coffee and a clean workspace. Simple pleasures make the biggest difference.', tags: ['lifestyle', 'workspace', 'coffee', 'minimal'], likes: 423, comments: [], createdAt: '2026-04-07T07:00:00Z' },
    { id: 'p6', userId: 'u2', image: 'images/desk2.png', title: 'Scandinavian Clean Desk', description: 'A bright and airy workspace inspired by Scandinavian design principles. White, wood, and greenery.', tags: ['desksetup', 'scandinavian', 'minimal', 'clean'], likes: 678, comments: [], createdAt: '2026-04-06T12:00:00Z' },
    { id: 'p7', userId: 'u3', image: 'images/wallpaper1.png', title: 'Midnight Gradient', description: 'Smooth flowing gradients in deep teal and purple. Perfect for OLED screens.', tags: ['wallpaper', 'gradient', 'oled', 'dark'], likes: 956, comments: [], createdAt: '2026-04-05T22:00:00Z' },
    { id: 'p8', userId: 'u1', image: 'images/interior1.png', title: 'Cozy Reading Corner', description: 'Every home needs a dedicated reading nook. Soft lighting and comfortable seating are essential.', tags: ['interior', 'cozy', 'reading', 'minimal'], likes: 234, comments: [], createdAt: '2026-04-04T16:00:00Z' },
    { id: 'p9', userId: 'u4', image: 'images/lifestyle1.png', title: 'Analog Vibes', description: 'Sometimes disconnecting from digital means connecting with creativity. Notebooks, pens, and good coffee.', tags: ['lifestyle', 'analog', 'creative', 'coffee'], likes: 189, comments: [], createdAt: '2026-04-03T11:00:00Z' },
    { id: 'p10', userId: 'u4', image: 'images/desk2.png', title: 'Productivity Station', description: 'Where ideas become reality. A clean setup for focused deep work sessions.', tags: ['desksetup', 'productivity', 'clean', 'workspace'], likes: 345, comments: [], createdAt: '2026-04-02T08:00:00Z' },
  ],

  likedPosts: new Set(),
  savedPosts: new Set(),
  followedUsers: new Set(),

  // Settings
  darkMode: true,
  notifications: true,

  // Snap state
  snapImage: null,
  snapTitle: '',
  snapDescription: '',
  snapTags: [],

  init() {
    // Add some initial comments
    this.posts[0].comments = [
      { id: 'c1', userId: 'u2', text: 'This is absolutely stunning! The lighting is perfect.', createdAt: '2026-04-11T12:00:00Z', replies: [
        { id: 'r1', userId: 'u1', text: 'Thank you! Took a while to get the balance right.', createdAt: '2026-04-11T12:30:00Z' }
      ]},
      { id: 'c2', userId: 'u3', text: 'Love the dark wall color. What paint did you use?', createdAt: '2026-04-11T14:00:00Z', replies: [] },
    ];
    this.posts[1].comments = [
      { id: 'c3', userId: 'u4', text: 'That cable management is next level! 🔥', createdAt: '2026-04-10T16:00:00Z', replies: [] },
    ];

    // Load persisted state
    try {
      const saved = localStorage.getItem('cura_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.likedPosts) this.likedPosts = new Set(parsed.likedPosts);
        if (parsed.savedPosts) this.savedPosts = new Set(parsed.savedPosts);
        if (parsed.followedUsers) this.followedUsers = new Set(parsed.followedUsers);
        if (parsed.currentUser) this.currentUser = parsed.currentUser;
        if (parsed.darkMode !== undefined) this.darkMode = parsed.darkMode;
        if (parsed.notifications !== undefined) this.notifications = parsed.notifications;
      }
    } catch (e) {}
  },

  save() {
    try {
      localStorage.setItem('cura_state', JSON.stringify({
        likedPosts: [...this.likedPosts],
        savedPosts: [...this.savedPosts],
        followedUsers: [...this.followedUsers],
        currentUser: this.currentUser,
        darkMode: this.darkMode,
        notifications: this.notifications,
      }));
    } catch (e) {}
  },

  toggleLike(postId) {
    if (this.likedPosts.has(postId)) {
      this.likedPosts.delete(postId);
      const post = this.posts.find(p => p.id === postId);
      if (post) post.likes--;
    } else {
      this.likedPosts.add(postId);
      const post = this.posts.find(p => p.id === postId);
      if (post) post.likes++;
    }
    this.save();
  },

  toggleSave(postId) {
    if (this.savedPosts.has(postId)) {
      this.savedPosts.delete(postId);
    } else {
      this.savedPosts.add(postId);
    }
    this.save();
  },

  toggleFollow(userId) {
    if (this.followedUsers.has(userId)) {
      this.followedUsers.delete(userId);
      const user = this.users.find(u => u.id === userId);
      if (user) user.followers--;
    } else {
      this.followedUsers.add(userId);
      const user = this.users.find(u => u.id === userId);
      if (user) user.followers++;
    }
    this.save();
  },

  login(email, password) {
    // Simple mock login
    this.currentUser = {
      id: 'uMe',
      username: email.split('@')[0],
      displayName: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      bio: 'Design enthusiast ✨',
      avatar: null,
      initials: email.charAt(0).toUpperCase() + (email.charAt(1) || '').toUpperCase(),
      posts: [],
      followers: 0,
      following: 0,
    };
    this.save();
  },

  logout() {
    this.currentUser = null;
    this.save();
  },

  addPost(imageDataUrl, title, description, tags) {
    const newId = 'p' + Date.now();
    const post = {
      id: newId,
      userId: this.currentUser ? this.currentUser.id : 'uMe',
      image: imageDataUrl,
      title,
      description,
      tags,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    this.posts.unshift(post);
    if (this.currentUser) {
      this.currentUser.posts.unshift(newId);
    }
    this.save();
    return post;
  },

  addComment(postId, text) {
    const post = this.posts.find(p => p.id === postId);
    if (!post) return;
    const comment = {
      id: 'c' + Date.now(),
      userId: this.currentUser ? this.currentUser.id : 'guest',
      text,
      createdAt: new Date().toISOString(),
      replies: [],
    };
    post.comments.push(comment);
    return comment;
  },

  addReply(postId, commentId, text) {
    const post = this.posts.find(p => p.id === postId);
    if (!post) return;
    const comment = post.comments.find(c => c.id === commentId);
    if (!comment) return;
    const reply = {
      id: 'r' + Date.now(),
      userId: this.currentUser ? this.currentUser.id : 'guest',
      text,
      createdAt: new Date().toISOString(),
    };
    comment.replies.push(reply);
    return reply;
  },

  getUser(userId) {
    if (this.currentUser && this.currentUser.id === userId) return this.currentUser;
    return this.users.find(u => u.id === userId);
  },

  getUserPosts(userId) {
    return this.posts.filter(p => p.userId === userId);
  },

  getLikedPosts() {
    return this.posts.filter(p => this.likedPosts.has(p.id));
  },

  getFilteredPosts(category) {
    if (!category || category === 'All') return this.posts;
    const tagMap = {
      'Interior': ['interior', 'livingroom', 'bedroom', 'cozy'],
      'Desk Setup': ['desksetup', 'gaming', 'setup', 'workspace'],
      'Wallpaper': ['wallpaper', 'abstract', 'gradient', 'digital'],
      'Lifestyle': ['lifestyle', 'coffee', 'analog', 'creative'],
    };
    const tags = tagMap[category] || [];
    return this.posts.filter(p => p.tags.some(t => tags.includes(t)));
  },
};

// =============================================
// Helper Functions
// =============================================
function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (key === 'className') element.className = val;
    else if (key === 'innerHTML') element.innerHTML = val;
    else if (key.startsWith('on')) element.addEventListener(key.slice(2).toLowerCase(), val);
    else if (key === 'style' && typeof val === 'object') Object.assign(element.style, val);
    else element.setAttribute(key, val);
  }
  for (const child of children) {
    if (typeof child === 'string') element.appendChild(document.createTextNode(child));
    else if (child) element.appendChild(child);
  }
  return element;
}

function formatTime(isoString) {
  const now = new Date();
  const date = new Date(isoString);
  const diff = (now - date) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatNumber(num) {
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return num.toString();
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = el('div', { className: 'toast' });
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// =============================================
// Components
// =============================================

// --- Bottom Navigation ---
function BottomNav() {
  const tabs = [
    { id: 'home', label: 'Home', icon: Icons.home, iconActive: Icons.homeFilled },
    { id: 'snap', label: 'Snap', icon: Icons.camera, iconActive: Icons.cameraFilled },
    { id: 'likes', label: 'Likes', icon: Icons.heart, iconActive: Icons.heartFilled },
    { id: 'profile', label: 'Profile', icon: Icons.user, iconActive: Icons.userFilled },
  ];

  const nav = el('nav', { className: 'bottom-nav', id: 'bottom-nav' });

  tabs.forEach(tab => {
    const isActive = Store.currentPage === tab.id;
    const button = el('button', {
      className: `nav-tab ${isActive ? 'active' : ''}`,
      id: `nav-tab-${tab.id}`,
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigateTo(tab.id);
      },
    });
    button.innerHTML = `
      <span>${isActive ? tab.iconActive : tab.icon}</span>
      <span class="nav-tab-label">${tab.label}</span>
    `;
    nav.appendChild(button);
  });

  return nav;
}

// --- Post Card ---
function PostCard(post, index) {
  const user = Store.getUser(post.userId);
  const isLiked = Store.likedPosts.has(post.id);

  const card = el('div', {
    className: 'post-card',
    style: { animationDelay: `${index * 0.05}s` },
    onClick: () => openPostDetail(post.id),
  });

  const imageWrap = el('div', { className: 'post-card-image-wrap' });

  const img = el('img', {
    className: 'post-card-image',
    src: post.image,
    alt: post.title,
    loading: 'lazy',
  });
  img.onerror = () => {
    img.style.height = '180px';
    img.style.background = 'linear-gradient(135deg, var(--surface), var(--surface-elevated))';
  };
  imageWrap.appendChild(img);

  const likeBtn = el('button', {
    className: `post-card-like-btn ${isLiked ? 'liked' : ''}`,
    onClick: (e) => {
      e.stopPropagation();
      Store.toggleLike(post.id);
      likeBtn.classList.toggle('liked');
      likeBtn.innerHTML = Store.likedPosts.has(post.id) ? Icons.heartFilled : Icons.heart;
      likeBtn.classList.add('like-animate');
      setTimeout(() => likeBtn.classList.remove('like-animate'), 350);
    },
  });
  likeBtn.innerHTML = isLiked ? Icons.heartFilled : Icons.heart;
  imageWrap.appendChild(likeBtn);

  card.appendChild(imageWrap);

  if (post.title) {
    const info = el('div', { className: 'post-card-info' });
    info.appendChild(el('div', { className: 'post-card-title' }, post.title));
    
    if (user) {
      const meta = el('div', { className: 'post-card-meta' });
      const avatar = el('div', { className: 'post-card-avatar' }, user.initials);
      meta.appendChild(avatar);
      meta.appendChild(el('span', { className: 'post-card-author' }, user.username));
      info.appendChild(meta);
    }
    card.appendChild(info);
  }

  return card;
}

// --- Skeleton Card ---
function SkeletonCard(height) {
  const card = el('div', { className: 'skeleton-card' });
  const skImg = el('div', { className: 'skeleton skeleton-image', style: { height: height + 'px' } });
  const skText = el('div', { className: 'skeleton skeleton-text' });
  const skTextShort = el('div', { className: 'skeleton skeleton-text short' });
  card.appendChild(skImg);
  card.appendChild(skText);
  card.appendChild(skTextShort);
  return card;
}

// --- Feed Grid ---
function FeedGrid(posts) {
  const grid = el('div', { className: 'feed-grid', id: 'feed-grid' });
  posts.forEach((post, i) => {
    grid.appendChild(PostCard(post, i));
  });
  return grid;
}

// --- Comment Section ---
function CommentSection(post) {
  const section = el('div', { className: 'comments-section' });
  
  section.appendChild(el('div', { className: 'comments-header' }, `Comments (${post.comments.length})`));

  // Comment input
  const inputWrap = el('div', { className: 'comment-input-wrap' });
  const input = el('textarea', {
    className: 'comment-input',
    placeholder: 'Add a comment...',
    rows: '1',
  });
  const sendBtn = el('button', {
    className: 'comment-send-btn',
    innerHTML: Icons.send,
    onClick: () => {
      const text = input.value.trim();
      if (!text) return;
      Store.addComment(post.id, text);
      input.value = '';
      renderComments();
    },
  });
  inputWrap.appendChild(input);
  inputWrap.appendChild(sendBtn);
  section.appendChild(inputWrap);

  // Comments list
  const commentsList = el('div', { id: 'comments-list' });
  section.appendChild(commentsList);

  function renderComments() {
    commentsList.innerHTML = '';
    const sorted = [...post.comments].reverse();
    sorted.forEach(comment => {
      commentsList.appendChild(CommentItem(post, comment));
    });
  }

  renderComments();
  return section;
}

function CommentItem(post, comment) {
  const user = Store.getUser(comment.userId) || { initials: 'G', username: 'guest' };
  const item = el('div', { className: 'comment-item' });

  const avatar = el('div', { className: 'comment-avatar' }, user.initials);
  item.appendChild(avatar);

  const body = el('div', { className: 'comment-body' });
  body.appendChild(el('div', { className: 'comment-author' }, user.username));
  body.appendChild(el('div', { className: 'comment-text' }, comment.text));

  const footer = el('div', { className: 'comment-footer' });
  footer.appendChild(el('span', { className: 'comment-action' }, formatTime(comment.createdAt)));

  let showReplyInput = false;
  const replyAction = el('span', {
    className: 'comment-action',
    onClick: () => {
      showReplyInput = !showReplyInput;
      renderReplies();
    },
  }, 'Reply');
  footer.appendChild(replyAction);
  body.appendChild(footer);

  // Replies container
  const repliesContainer = el('div', { className: 'comment-replies', id: `replies-${comment.id}` });
  body.appendChild(repliesContainer);

  function renderReplies() {
    repliesContainer.innerHTML = '';
    
    if (showReplyInput) {
      const replyWrap = el('div', { className: 'reply-input-wrap' });
      const replyInput = el('textarea', { className: 'reply-input', placeholder: 'Reply...', rows: '1' });
      const replySend = el('button', {
        className: 'reply-send-btn',
        innerHTML: Icons.send,
        onClick: () => {
          const text = replyInput.value.trim();
          if (!text) return;
          Store.addReply(post.id, comment.id, text);
          showReplyInput = false;
          renderReplies();
        },
      });
      replyWrap.appendChild(replyInput);
      replyWrap.appendChild(replySend);
      repliesContainer.appendChild(replyWrap);
    }

    comment.replies.forEach(reply => {
      const rUser = Store.getUser(reply.userId) || { initials: 'G', username: 'guest' };
      const rItem = el('div', { className: 'comment-item' });
      rItem.appendChild(el('div', { className: 'comment-avatar', style: { width: '24px', height: '24px', fontSize: '10px' } }, rUser.initials));
      const rBody = el('div', { className: 'comment-body' });
      rBody.appendChild(el('div', { className: 'comment-author' }, rUser.username));
      rBody.appendChild(el('div', { className: 'comment-text' }, reply.text));
      rBody.appendChild(el('div', { className: 'comment-footer' },
        el('span', { className: 'comment-action' }, formatTime(reply.createdAt))
      ));
      rItem.appendChild(rBody);
      repliesContainer.appendChild(rItem);
    });
  }

  renderReplies();
  item.appendChild(body);
  return item;
}

// --- Profile Header ---
function ProfileHeader(user) {
  const section = el('div', { className: 'profile-header-section' });

  const avatar = el('div', { className: 'profile-avatar' });
  if (user.avatar) {
    avatar.appendChild(el('img', { src: user.avatar, alt: user.displayName }));
  } else {
    avatar.textContent = user.initials;
  }
  section.appendChild(avatar);

  section.appendChild(el('div', { className: 'profile-username' }, user.displayName));
  if (user.bio) {
    section.appendChild(el('div', { className: 'profile-bio' }, user.bio));
  }

  return section;
}

// --- Follow Button ---
function FollowButton(userId) {
  const isFollowing = Store.followedUsers.has(userId);
  const btn = el('button', {
    className: `follow-btn ${isFollowing ? 'following' : ''}`,
    onClick: (e) => {
      e.stopPropagation();
      Store.toggleFollow(userId);
      btn.classList.toggle('following');
      btn.textContent = Store.followedUsers.has(userId) ? 'Following' : 'Follow';
    },
  }, isFollowing ? 'Following' : 'Follow');
  return btn;
}

// =============================================
// Pages
// =============================================

// --- Home Page ---
function HomePage() {
  const page = el('div', { className: 'page', id: 'page-home' });

  // Header
  const header = el('div', { className: 'page-header' });
  header.appendChild(el('div', { className: 'page-header-logo' }, 'CURA'));
  const actions = el('div', { className: 'page-header-actions' });
  const searchBtn = el('button', { className: 'header-btn', innerHTML: Icons.search });
  actions.appendChild(searchBtn);
  header.appendChild(actions);
  page.appendChild(header);

  // Category Filter
  const categories = ['All', 'Interior', 'Desk Setup', 'Wallpaper', 'Lifestyle'];
  let activeCategory = 'All';
  const filterRow = el('div', { className: 'category-filter' });
  
  categories.forEach(cat => {
    const pill = el('button', {
      className: `category-pill ${cat === activeCategory ? 'active' : ''}`,
      onClick: () => {
        activeCategory = cat;
        filterRow.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderFeed();
      },
    }, cat);
    filterRow.appendChild(pill);
  });
  page.appendChild(filterRow);

  // Feed container
  const feedContainer = el('div', { id: 'home-feed-container' });
  page.appendChild(feedContainer);

  function renderFeed() {
    feedContainer.innerHTML = '';
    // Show skeleton briefly
    const skeletonGrid = el('div', { className: 'feed-grid' });
    const heights = [200, 260, 180, 240, 220, 190];
    for (let i = 0; i < 6; i++) {
      skeletonGrid.appendChild(SkeletonCard(heights[i]));
    }
    feedContainer.appendChild(skeletonGrid);

    setTimeout(() => {
      feedContainer.innerHTML = '';
      const posts = Store.getFilteredPosts(activeCategory);
      feedContainer.appendChild(FeedGrid(posts));
    }, 400);
  }

  renderFeed();
  return page;
}

// --- Snap Page ---
function SnapPage() {
  const page = el('div', { className: 'page', id: 'page-snap' });

  // Header
  const header = el('div', { className: 'page-header' });
  header.appendChild(el('div', { className: 'page-header-title' }, 'Create Post'));
  page.appendChild(header);

  const content = el('div', { className: 'snap-page' });

  // Upload area
  const fileInput = el('input', {
    type: 'file',
    accept: 'image/*',
    className: 'file-input-hidden',
    id: 'snap-file-input',
    onChange: (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          Store.snapImage = ev.target.result;
          renderUploadArea();
        };
        reader.readAsDataURL(file);
      }
    },
  });
  content.appendChild(fileInput);

  const uploadArea = el('div', { id: 'snap-upload-area-container' });
  content.appendChild(uploadArea);

  function renderUploadArea() {
    uploadArea.innerHTML = '';
    const area = el('div', {
      className: `snap-upload-area ${Store.snapImage ? 'has-image' : ''}`,
      onClick: () => { if (!Store.snapImage) fileInput.click(); },
    });

    if (Store.snapImage) {
      area.appendChild(el('img', {
        src: Store.snapImage,
        className: 'snap-preview-image',
        alt: 'Preview',
      }));
      const removeBtn = el('button', {
        className: 'snap-remove-btn',
        innerHTML: Icons.x,
        onClick: (e) => {
          e.stopPropagation();
          Store.snapImage = null;
          fileInput.value = '';
          renderUploadArea();
        },
      });
      area.appendChild(removeBtn);
    } else {
      area.innerHTML = `
        ${Icons.upload}
        <span class="snap-upload-text">Tap to upload image</span>
        <span class="snap-upload-sub">PNG, JPG up to 10MB</span>
      `;
    }
    uploadArea.appendChild(area);
  }

  renderUploadArea();

  // Form
  const form = el('div', { className: 'snap-form' });

  // Title
  const titleGroup = el('div', { className: 'snap-input-group' });
  titleGroup.appendChild(el('label', { className: 'snap-label' }, 'Title'));
  const titleInput = el('input', {
    className: 'snap-input',
    type: 'text',
    placeholder: 'Give your post a title',
    onInput: (e) => { Store.snapTitle = e.target.value; },
  });
  titleGroup.appendChild(titleInput);
  form.appendChild(titleGroup);

  // Description
  const descGroup = el('div', { className: 'snap-input-group' });
  descGroup.appendChild(el('label', { className: 'snap-label' }, 'Description'));
  const descInput = el('textarea', {
    className: 'snap-input snap-textarea',
    placeholder: 'Tell the story behind your design...',
    onInput: (e) => { Store.snapDescription = e.target.value; },
  });
  descGroup.appendChild(descInput);
  form.appendChild(descGroup);

  // Tags
  const tagsGroup = el('div', { className: 'snap-input-group' });
  tagsGroup.appendChild(el('label', { className: 'snap-label' }, 'Tags'));
  const tagsWrap = el('div', { className: 'snap-tags-input-wrap' });
  const tagsChipsContainer = el('span', { id: 'tags-chips' });
  tagsWrap.appendChild(tagsChipsContainer);
  const tagInput = el('input', {
    className: 'snap-tags-field',
    placeholder: '#interior, #desksetup...',
    onKeydown: (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const val = tagInput.value.replace(/[#,]/g, '').trim().toLowerCase();
        if (val && !Store.snapTags.includes(val)) {
          Store.snapTags.push(val);
          renderTags();
        }
        tagInput.value = '';
      }
    },
  });
  tagsWrap.appendChild(tagInput);
  tagsGroup.appendChild(tagsWrap);
  form.appendChild(tagsGroup);

  function renderTags() {
    tagsChipsContainer.innerHTML = '';
    Store.snapTags.forEach((tag, i) => {
      const chip = el('span', { className: 'snap-tag-chip' });
      chip.textContent = '#' + tag;
      const removeTag = el('span', {
        className: 'snap-tag-remove',
        innerHTML: Icons.x,
        onClick: () => {
          Store.snapTags.splice(i, 1);
          renderTags();
        },
      });
      chip.appendChild(removeTag);
      tagsChipsContainer.appendChild(chip);
    });
  }

  // Submit
  const submitBtn = el('button', {
    className: 'snap-submit-btn',
    onClick: () => {
      if (!Store.snapImage) {
        showToast('Please upload an image');
        return;
      }
      if (!Store.snapTitle.trim()) {
        showToast('Please add a title');
        return;
      }

      Store.addPost(Store.snapImage, Store.snapTitle, Store.snapDescription, Store.snapTags);

      // Reset
      Store.snapImage = null;
      Store.snapTitle = '';
      Store.snapDescription = '';
      Store.snapTags = [];
      titleInput.value = '';
      descInput.value = '';
      tagInput.value = '';
      fileInput.value = '';
      renderUploadArea();
      renderTags();

      showToast('Post created successfully! 🎉');
      setTimeout(() => navigateTo('home'), 800);
    },
  }, 'Publish Post');
  form.appendChild(submitBtn);

  content.appendChild(form);
  page.appendChild(content);
  return page;
}

// --- Likes Page ---
function LikesPage() {
  const page = el('div', { className: 'page', id: 'page-likes' });

  const header = el('div', { className: 'page-header' });
  header.appendChild(el('div', { className: 'page-header-title' }, 'Liked Posts'));
  page.appendChild(header);

  const likedPosts = Store.getLikedPosts();

  if (likedPosts.length === 0) {
    const empty = el('div', { className: 'empty-state' });
    empty.innerHTML = Icons.heart;
    empty.appendChild(el('div', { className: 'empty-state-title' }, 'No likes yet'));
    empty.appendChild(el('div', { className: 'empty-state-text' }, 'Start exploring and like posts that inspire you'));
    page.appendChild(empty);
  } else {
    page.appendChild(FeedGrid(likedPosts));
  }

  return page;
}

// --- Profile Page ---
function ProfilePage() {
  const page = el('div', { className: 'page', id: 'page-profile' });

  if (!Store.currentUser) {
    // Login screen
    page.appendChild(LoginScreen());
    return page;
  }

  // Header
  const header = el('div', { className: 'page-header' });
  header.appendChild(el('div', { className: 'page-header-title' }, 'Profile'));
  page.appendChild(header);

  // Profile header
  page.appendChild(ProfileHeader(Store.currentUser));

  // Stats
  const stats = el('div', { className: 'profile-stats' });
  const userPosts = Store.getUserPosts(Store.currentUser.id);
  
  const statData = [
    { value: userPosts.length, label: 'Posts' },
    { value: Store.currentUser.followers, label: 'Followers' },
    { value: Store.currentUser.following, label: 'Following' },
  ];
  statData.forEach(s => {
    const stat = el('div', { className: 'profile-stat' });
    stat.appendChild(el('div', { className: 'profile-stat-value' }, formatNumber(s.value)));
    stat.appendChild(el('div', { className: 'profile-stat-label' }, s.label));
    stats.appendChild(stat);
  });
  page.appendChild(stats);

  // Action buttons
  const actions = el('div', { className: 'profile-actions' });

  const editBtn = el('button', {
    className: 'profile-action-btn primary',
    onClick: () => openSubPage('editProfile'),
  }, 'Edit Profile');
  actions.appendChild(editBtn);

  const settingsBtn = el('button', {
    className: 'profile-action-btn secondary',
    onClick: () => openSubPage('settings'),
  }, 'Settings');
  actions.appendChild(settingsBtn);

  const logoutBtn = el('button', {
    className: 'profile-action-btn danger',
    onClick: () => {
      Store.logout();
      renderApp();
      showToast('Logged out successfully');
    },
  }, 'Logout');
  actions.appendChild(logoutBtn);

  page.appendChild(actions);

  // User's posts
  page.appendChild(el('div', { className: 'profile-posts-header' }, 'My Posts'));

  if (userPosts.length === 0) {
    const empty = el('div', { className: 'profile-empty' });
    empty.innerHTML = Icons.image;
    empty.appendChild(el('div', { className: 'profile-empty-text' }, 'No posts yet'));
    page.appendChild(empty);
  } else {
    const postsGrid = el('div', { className: 'profile-posts-grid' });
    userPosts.forEach(post => {
      const item = el('div', {
        className: 'profile-post-item',
        onClick: () => openPostDetail(post.id),
      });
      item.appendChild(el('img', { src: post.image, alt: post.title, loading: 'lazy' }));
      postsGrid.appendChild(item);
    });
    page.appendChild(postsGrid);
  }

  return page;
}

// --- Login Screen ---
function LoginScreen() {
  const screen = el('div', { className: 'login-screen' });

  screen.appendChild(el('div', { className: 'login-logo' }, 'CURA'));
  screen.appendChild(el('div', { className: 'login-subtitle' }, 'Join the design community'));

  const form = el('div', { className: 'login-form' });

  const emailInput = el('input', {
    className: 'login-input',
    type: 'email',
    placeholder: 'Email',
    id: 'login-email',
  });
  form.appendChild(emailInput);

  const passwordInput = el('input', {
    className: 'login-input',
    type: 'password',
    placeholder: 'Password',
    id: 'login-password',
  });
  form.appendChild(passwordInput);

  const loginBtn = el('button', {
    className: 'login-btn',
    onClick: () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      if (!email) {
        showToast('Please enter your email');
        return;
      }
      if (!password) {
        showToast('Please enter your password');
        return;
      }
      Store.login(email, password);
      renderApp();
      showToast('Welcome to CURA! 🎨');
    },
  }, 'Sign In');
  form.appendChild(loginBtn);

  screen.appendChild(form);

  screen.appendChild(el('div', { className: 'login-divider' }, 'or'));

  const guestBtn = el('button', {
    className: 'login-guest-btn',
    onClick: () => {
      Store.login('designer@cura.app', 'guest');
      renderApp();
      showToast('Welcome, designer! 🎨');
    },
  }, 'Continue as Guest');
  screen.appendChild(guestBtn);

  return screen;
}

// --- Post Detail Overlay ---
function PostDetailOverlay(post) {
  const overlay = el('div', { className: 'detail-overlay', id: 'detail-overlay' });
  const user = Store.getUser(post.userId);

  // Header
  const header = el('div', { className: 'detail-header' });
  const backBtn = el('button', {
    className: 'detail-back-btn',
    innerHTML: Icons.arrowLeft,
    onClick: closePostDetail,
  });
  header.appendChild(backBtn);

  const detailActions = el('div', { className: 'detail-actions' });

  const isLiked = Store.likedPosts.has(post.id);
  const likeBtn = el('button', {
    className: `detail-action-btn ${isLiked ? 'liked' : ''}`,
    innerHTML: isLiked ? Icons.heartFilled : Icons.heart,
    onClick: () => {
      Store.toggleLike(post.id);
      likeBtn.classList.toggle('liked');
      likeBtn.innerHTML = Store.likedPosts.has(post.id) ? Icons.heartFilled : Icons.heart;
      likeBtn.classList.add('like-animate');
      setTimeout(() => likeBtn.classList.remove('like-animate'), 350);
      // Update stats
      const likeStat = document.querySelector('#detail-like-count');
      if (likeStat) likeStat.textContent = formatNumber(post.likes);
    },
  });
  detailActions.appendChild(likeBtn);

  const isSaved = Store.savedPosts.has(post.id);
  const saveBtn = el('button', {
    className: `detail-action-btn ${isSaved ? 'saved' : ''}`,
    innerHTML: isSaved ? Icons.bookmarkFilled : Icons.bookmark,
    onClick: () => {
      Store.toggleSave(post.id);
      saveBtn.classList.toggle('saved');
      saveBtn.innerHTML = Store.savedPosts.has(post.id) ? Icons.bookmarkFilled : Icons.bookmark;
      showToast(Store.savedPosts.has(post.id) ? 'Saved' : 'Removed from saved');
    },
  });
  detailActions.appendChild(saveBtn);

  const shareBtn = el('button', {
    className: 'detail-action-btn',
    innerHTML: Icons.share,
    onClick: () => showToast('Link copied!'),
  });
  detailActions.appendChild(shareBtn);

  header.appendChild(detailActions);
  overlay.appendChild(header);

  // Image
  const img = el('img', {
    className: 'detail-image',
    src: post.image,
    alt: post.title,
  });
  overlay.appendChild(img);

  // Content
  const content = el('div', { className: 'detail-content' });

  // User row
  if (user) {
    const userRow = el('div', { className: 'detail-user-row' });
    const userInfo = el('div', { className: 'detail-user-info' });
    const userAvatar = el('div', { className: 'detail-user-avatar' }, user.initials);
    userInfo.appendChild(userAvatar);
    const userText = el('div');
    userText.appendChild(el('div', { className: 'detail-user-name' }, user.displayName));
    userText.appendChild(el('div', { className: 'detail-user-handle' }, '@' + user.username));
    userInfo.appendChild(userText);
    userRow.appendChild(userInfo);

    if (!Store.currentUser || Store.currentUser.id !== user.id) {
      userRow.appendChild(FollowButton(user.id));
    }
    content.appendChild(userRow);
  }

  content.appendChild(el('div', { className: 'detail-title' }, post.title));

  if (post.description) {
    content.appendChild(el('div', { className: 'detail-description' }, post.description));
  }

  // Tags
  if (post.tags.length > 0) {
    const tags = el('div', { className: 'detail-tags' });
    post.tags.forEach(tag => {
      tags.appendChild(el('span', { className: 'detail-tag' }, '#' + tag));
    });
    content.appendChild(tags);
  }

  // Stats
  const stats = el('div', { className: 'detail-stats' });
  const likeStat = el('div', { className: 'detail-stat' });
  likeStat.innerHTML = Icons.heart;
  likeStat.appendChild(el('span', { id: 'detail-like-count' }, formatNumber(post.likes)));
  stats.appendChild(likeStat);

  const commentStat = el('div', { className: 'detail-stat' });
  commentStat.innerHTML = Icons.messageCircle;
  commentStat.appendChild(el('span', {}, post.comments.length + ' comments'));
  stats.appendChild(commentStat);
  content.appendChild(stats);

  // Comments
  content.appendChild(CommentSection(post));

  // Extra bottom padding
  content.appendChild(el('div', { style: { height: '40px' } }));

  overlay.appendChild(content);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('open');
    });
  });

  return overlay;
}

// --- Edit Profile Sub-Page ---
function EditProfilePage() {
  const page = el('div', { className: 'sub-page', id: 'sub-page-edit' });

  const header = el('div', { className: 'sub-page-header' });
  const backBtn = el('button', {
    className: 'detail-back-btn',
    innerHTML: Icons.arrowLeft,
    onClick: closeSubPage,
  });
  header.appendChild(backBtn);
  header.appendChild(el('span', { className: 'sub-page-title' }, 'Edit Profile'));
  page.appendChild(header);

  const content = el('div', { className: 'edit-profile-screen' });
  const user = Store.currentUser;

  // Avatar
  const avatarSection = el('div', { className: 'edit-avatar-section' });
  const avatarEl = el('div', { className: 'edit-avatar' });
  if (user.avatar) {
    avatarEl.appendChild(el('img', { src: user.avatar }));
  } else {
    avatarEl.textContent = user.initials;
  }
  const avatarOverlay = el('div', { className: 'edit-avatar-overlay', innerHTML: Icons.camera });
  avatarEl.appendChild(avatarOverlay);

  const avatarFileInput = el('input', {
    type: 'file',
    accept: 'image/*',
    className: 'file-input-hidden',
    onChange: (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          user.avatar = ev.target.result;
          Store.save();
          avatarEl.innerHTML = '';
          avatarEl.appendChild(el('img', { src: user.avatar, style: { width: '100%', height: '100%', objectFit: 'cover' } }));
          avatarEl.appendChild(avatarOverlay);
        };
        reader.readAsDataURL(file);
      }
    },
  });
  avatarEl.addEventListener('click', () => avatarFileInput.click());
  content.appendChild(avatarFileInput);

  avatarSection.appendChild(avatarEl);
  avatarSection.appendChild(el('div', { className: 'edit-change-photo' }, 'Change Photo'));
  content.appendChild(avatarSection);

  // Form
  const form = el('div', { className: 'edit-form' });

  const nameField = el('div', { className: 'edit-field' });
  nameField.appendChild(el('label', { className: 'edit-label' }, 'Display Name'));
  const nameInput = el('input', {
    className: 'edit-input',
    type: 'text',
    value: user.displayName,
    placeholder: 'Your display name',
  });
  nameField.appendChild(nameInput);
  form.appendChild(nameField);

  const usernameField = el('div', { className: 'edit-field' });
  usernameField.appendChild(el('label', { className: 'edit-label' }, 'Username'));
  const usernameInput = el('input', {
    className: 'edit-input',
    type: 'text',
    value: user.username,
    placeholder: 'Your username',
  });
  usernameField.appendChild(usernameInput);
  form.appendChild(usernameField);

  const bioField = el('div', { className: 'edit-field' });
  bioField.appendChild(el('label', { className: 'edit-label' }, 'Bio'));
  const bioInput = el('textarea', {
    className: 'edit-input',
    style: { minHeight: '80px', resize: 'vertical' },
    placeholder: 'Tell us about yourself...',
  });
  bioInput.value = user.bio || '';
  bioField.appendChild(bioInput);
  form.appendChild(bioField);

  const saveBtn = el('button', {
    className: 'edit-save-btn',
    onClick: () => {
      user.displayName = nameInput.value.trim() || user.displayName;
      user.username = usernameInput.value.trim() || user.username;
      user.bio = bioInput.value.trim();
      user.initials = user.displayName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      Store.save();
      closeSubPage();
      renderApp();
      showToast('Profile updated! ✨');
    },
  }, 'Save Changes');
  form.appendChild(saveBtn);

  content.appendChild(form);
  page.appendChild(content);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => page.classList.add('open'));
  });

  return page;
}

// --- Settings Sub-Page ---
function SettingsPage() {
  const page = el('div', { className: 'sub-page', id: 'sub-page-settings' });

  const header = el('div', { className: 'sub-page-header' });
  const backBtn = el('button', {
    className: 'detail-back-btn',
    innerHTML: Icons.arrowLeft,
    onClick: closeSubPage,
  });
  header.appendChild(backBtn);
  header.appendChild(el('span', { className: 'sub-page-title' }, 'Settings'));
  page.appendChild(header);

  const content = el('div', { className: 'settings-screen' });

  // Preferences
  const prefsGroup = el('div', { className: 'settings-group' });
  prefsGroup.appendChild(el('div', { className: 'settings-group-title' }, 'Preferences'));

  // Dark Mode
  const darkItem = el('div', { className: 'settings-item' });
  const darkLeft = el('div', { className: 'settings-item-left' });
  darkLeft.appendChild(el('div', { className: 'settings-item-icon', innerHTML: Icons.moon }));
  const darkText = el('div');
  darkText.appendChild(el('div', { className: 'settings-item-label' }, 'Dark Mode'));
  darkText.appendChild(el('div', { className: 'settings-item-desc' }, 'Use dark theme'));
  darkLeft.appendChild(darkText);
  darkItem.appendChild(darkLeft);

  const darkToggle = el('div', {
    className: `toggle-switch ${Store.darkMode ? 'on' : ''}`,
    onClick: () => {
      Store.darkMode = !Store.darkMode;
      darkToggle.classList.toggle('on');
      Store.save();
      showToast(Store.darkMode ? 'Dark mode enabled' : 'Dark mode disabled');
    },
  });
  darkItem.appendChild(darkToggle);
  prefsGroup.appendChild(darkItem);

  // Notifications
  const notiItem = el('div', { className: 'settings-item' });
  const notiLeft = el('div', { className: 'settings-item-left' });
  notiLeft.appendChild(el('div', { className: 'settings-item-icon', innerHTML: Icons.bell }));
  const notiText = el('div');
  notiText.appendChild(el('div', { className: 'settings-item-label' }, 'Notifications'));
  notiText.appendChild(el('div', { className: 'settings-item-desc' }, 'Push notifications'));
  notiLeft.appendChild(notiText);
  notiItem.appendChild(notiLeft);

  const notiToggle = el('div', {
    className: `toggle-switch ${Store.notifications ? 'on' : ''}`,
    onClick: () => {
      Store.notifications = !Store.notifications;
      notiToggle.classList.toggle('on');
      Store.save();
      showToast(Store.notifications ? 'Notifications on' : 'Notifications off');
    },
  });
  notiItem.appendChild(notiToggle);
  prefsGroup.appendChild(notiItem);

  content.appendChild(prefsGroup);

  // Account
  const accountGroup = el('div', { className: 'settings-group' });
  accountGroup.appendChild(el('div', { className: 'settings-group-title' }, 'Account'));

  const accountItems = [
    { icon: Icons.lock, label: 'Account Settings', desc: 'Email, password' },
    { icon: Icons.shield, label: 'Privacy', desc: 'Profile visibility, blocked users' },
  ];

  accountItems.forEach(item => {
    const row = el('div', {
      className: 'settings-item',
      onClick: () => showToast('Coming soon'),
    });
    const left = el('div', { className: 'settings-item-left' });
    left.appendChild(el('div', { className: 'settings-item-icon', innerHTML: item.icon }));
    const text = el('div');
    text.appendChild(el('div', { className: 'settings-item-label' }, item.label));
    text.appendChild(el('div', { className: 'settings-item-desc' }, item.desc));
    left.appendChild(text);
    row.appendChild(left);
    row.appendChild(el('div', { className: 'settings-chevron', innerHTML: Icons.chevronRight }));
    accountGroup.appendChild(row);
  });

  content.appendChild(accountGroup);

  // Danger
  const dangerGroup = el('div', { className: 'settings-group' });
  dangerGroup.appendChild(el('div', { className: 'settings-group-title' }, ''));

  const logoutItem = el('div', {
    className: 'settings-item',
    onClick: () => {
      Store.logout();
      closeSubPage();
      renderApp();
      showToast('Logged out');
    },
  });
  const logoutLeft = el('div', { className: 'settings-item-left' });
  logoutLeft.appendChild(el('div', { className: 'settings-item-icon', innerHTML: Icons.logOut, style: { background: 'rgba(239,68,68,0.1)', color: 'var(--danger)' } }));
  logoutLeft.appendChild(el('div', { className: 'settings-item-label', style: { color: 'var(--danger)' } }, 'Log Out'));
  logoutItem.appendChild(logoutLeft);
  dangerGroup.appendChild(logoutItem);
  content.appendChild(dangerGroup);

  page.appendChild(content);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => page.classList.add('open'));
  });

  return page;
}

// =============================================
// Navigation & Routing
// =============================================
function navigateTo(pageId) {
  Store.currentPage = pageId;
  renderApp();
}

function openPostDetail(postId) {
  const post = Store.posts.find(p => p.id === postId);
  if (!post) return;
  Store.selectedPost = post;
  Store.showPostDetail = true;

  const existing = document.getElementById('detail-overlay');
  if (existing) existing.remove();

  const overlay = PostDetailOverlay(post);
  document.body.appendChild(overlay);
}

function closePostDetail() {
  const overlay = document.getElementById('detail-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    setTimeout(() => overlay.remove(), 350);
  }
  Store.showPostDetail = false;
  Store.selectedPost = null;
}

function openSubPage(type) {
  Store.subPage = type;
  const existing = document.querySelector('.sub-page');
  if (existing) existing.remove();

  let page;
  if (type === 'editProfile') page = EditProfilePage();
  else if (type === 'settings') page = SettingsPage();

  if (page) document.body.appendChild(page);
}

function closeSubPage() {
  const subPage = document.querySelector('.sub-page');
  if (subPage) {
    subPage.classList.remove('open');
    setTimeout(() => subPage.remove(), 350);
  }
  Store.subPage = null;
}

// =============================================
// Scroll Behavior (hide/show nav)
// =============================================
let lastScrollY = 0;
let navHidden = false;

function setupScrollBehavior() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.addEventListener('scroll', () => {
      const currentScrollY = page.scrollTop;
      const nav = document.getElementById('bottom-nav');
      if (!nav) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !navHidden) {
        nav.classList.add('hidden');
        navHidden = true;
      } else if (currentScrollY < lastScrollY && navHidden) {
        nav.classList.remove('hidden');
        navHidden = false;
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  });
}

// =============================================
// Main Render
// =============================================
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Render pages
  const homePage = HomePage();
  const snapPage = SnapPage();
  const likesPage = LikesPage();
  const profilePage = ProfilePage();

  // Set active
  const pages = { home: homePage, snap: snapPage, likes: likesPage, profile: profilePage };
  Object.entries(pages).forEach(([id, page]) => {
    if (id === Store.currentPage) page.classList.add('active');
    app.appendChild(page);
  });

  // Bottom nav
  app.appendChild(BottomNav());

  // Setup scroll behavior
  setupScrollBehavior();
}

// =============================================
// Initialize
// =============================================
Store.init();
renderApp();
