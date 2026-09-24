/**
 * Ticket2Grow - Professional Audio & Media Player Engine
 * Powered by Web Audio API & Modern Web Standards
 * Features: Local Library, Curated Audio, Audius Online Music API & 24/7 Global Live Hit Radio
 */

// Initial Music Database (Royalty-free & Public Domain curated tracks)
const DEFAULT_TRACKS = [
  {
    id: 't2g-1',
    title: 'Neon Horizons & Growth',
    artist: 'Ticket2Grow Electronic Studio',
    album: 'Growth Wave 2026',
    genre: 'Electronic',
    duration: 185,
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop&q=80',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    lyrics: [
      "Welcome to the limitless rhythm of Ticket2Grow.",
      "Step beyond ordinary boundaries.",
      "Every frequency tuned for focus and inspiration.",
      "Upward momentum, uninterrupted flow.",
      "Feel the bassline elevate your mindset.",
      "Grow without limits."
    ]
  },
  {
    id: 't2g-2',
    title: 'Deep Midnight Lo-Fi',
    artist: 'Chillout Academy',
    album: 'Code & Coffee Vol. 4',
    genre: 'Lo-Fi',
    duration: 210,
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    lyrics: [
      "Soft rain falling on the studio glass...",
      "Calm vibes, continuous thinking.",
      "Keys typing into the late night.",
      "Zero noise, just peaceful creation.",
      "Your ticket to effortless learning."
    ]
  },
  {
    id: 't2g-3',
    title: 'Cyber Pulse & Synth Rhythms',
    artist: 'RetroFuture Lab',
    album: 'Neon Drive',
    genre: 'Synthwave',
    duration: 240,
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    lyrics: [
      "Neon lights flickering in the cyber skyline.",
      "High speed data and electric synths.",
      "Accelerating towards the future.",
      "Keep pushing the tempo."
    ]
  },
  {
    id: 't2g-4',
    title: 'Unlocking Your True Potential',
    artist: 'Ticket2Grow Podcast Ep. #01',
    album: 'Mastery & Mindset',
    genre: 'Podcast',
    duration: 320,
    cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&auto=format&fit=crop&q=80',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    lyrics: [
      "Host: 'Welcome to Ticket2Grow Podcast.'",
      "'Today we break down how to conquer big technical challenges.'",
      "'Persistence is the true catalyst of growth.'",
      "'Let's dive into practical execution strategies.'"
    ]
  },
  {
    id: 't2g-5',
    title: 'Acoustic Sunrise Serenade',
    artist: 'Organic Melodies',
    album: 'Morning Coffee Sessions',
    genre: 'Indie',
    duration: 195,
    cover: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&auto=format&fit=crop&q=80',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    lyrics: [
      "Gentle guitar strums in the early light.",
      "A peaceful morning to start fresh.",
      "Breathe in clarity, exhale the rush.",
      "Every new day is a ticket to grow."
    ]
  },
  {
    id: 't2g-6',
    title: 'Quantum Ambient Echoes',
    artist: 'Astral Nomad',
    album: 'Deep Space Dimensions',
    genre: 'Ambient',
    duration: 280,
    cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&auto=format&fit=crop&q=80',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    lyrics: [
      "Floating through zero gravity...",
      "Ethereal harmonic pads vibrating.",
      "Expanding consciousness and infinite space."
    ]
  }
];

// Global & Tamil 24/7 Live Hit Radio Stations (Verified High-Fidelity Streams)
const LIVE_RADIO_STATIONS = [
  // --- Tamil & Kollywood Superhit Stations ---
  {
    id: 'radio-ar-rahman',
    name: 'A.R. Rahman Hits 24/7',
    desc: 'Oscar Nayagan A.R. Rahman All-Time Blockbusters & Melodies',
    genre: 'tamil',
    country: 'Tamil Kollywood',
    icon: 'fa-music',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/arr?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-anirudh',
    name: 'Anirudh Rockstar Radio',
    desc: 'Rockstar Anirudh Ravichander High-Energy & Chartbuster Hits',
    genre: 'tamil',
    country: 'Tamil Kollywood',
    icon: 'fa-bolt',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/anirud?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-ilayaraja',
    name: 'Ilaiyaraaja Golden Hits',
    desc: 'Isaignani Ilaiyaraaja Timeless Masterpieces & Soulful Melodies',
    genre: 'tamil',
    country: 'Tamil Classic',
    icon: 'fa-guitar',
    cover: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/ilayaraja?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-yuvan',
    name: 'Yuvan Shankar Raja Hits',
    desc: 'U1 Drugs: Romantic Melodies, Youth Anthems & Soulful BGMs',
    genre: 'tamil',
    country: 'Tamil Kollywood',
    icon: 'fa-heart',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/yuvan?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-spb',
    name: 'SPB Evergreen Classics',
    desc: 'Padma Vibhushan S.P. Balasubrahmanyam Legendary Vocals',
    genre: 'tamil',
    country: 'Tamil Classics',
    icon: 'fa-microphone-lines',
    cover: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/spb?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-harris',
    name: 'Harris Jayaraj Melodies',
    desc: 'Minnale, Vaaranam Aayiram, Ghajini & Iconic Breezy Hits',
    genre: 'tamil',
    country: 'Tamil Kollywood',
    icon: 'fa-wave-square',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/harris?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-tamil90s',
    name: 'Tamil 90s Evergreen Hits',
    desc: 'Superstar Rajini, Kamal, Vijay, Ajith 90s Golden Nostalgia',
    genre: 'tamil',
    country: 'Tamil 90s',
    icon: 'fa-film',
    cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/90s?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },
  {
    id: 'radio-tamil2000s',
    name: 'Tamil 2000s Kollywood Radio',
    desc: '2000-2015 Blockbuster Dance, Romance & Mass Anthems',
    genre: 'tamil',
    country: 'Tamil 2000s',
    icon: 'fa-compact-disc',
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80',
    src: 'https://psrlive2.listenon.in/2000s?ah=0e81749e37789e5fb8c290926ce87e3f',
    isLive: true
  },

  // --- International Pop, EDM, Hip-Hop & Lo-Fi ---
  {
    id: 'radio-power181',
    name: 'Power 181 Top 40',
    desc: 'Billboard #1 Pop Hits & Global Chart Toppers',
    genre: 'pop',
    country: 'Global Hit Radio',
    icon: 'fa-bolt',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80',
    src: 'https://listen.181fm.com/181-power_128k.mp3',
    isLive: true
  },
  {
    id: 'radio-dancewave',
    name: 'Dance Wave Live',
    desc: 'Club, EDM, House & Festival Anthems',
    genre: 'edm',
    country: 'International',
    icon: 'fa-compact-disc',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80',
    src: 'https://dancewave.online/dance.mp3',
    isLive: true
  },
  {
    id: 'radio-thebeat',
    name: '181.FM The Beat',
    desc: 'Urban Hip-Hop, Rap & Smooth R&B Hits',
    genre: 'hiphop',
    country: 'USA Hit Station',
    icon: 'fa-fire',
    cover: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&auto=format&fit=crop&q=80',
    src: 'https://listen.181fm.com/181-beat_128k.mp3',
    isLive: true
  },
  {
    id: 'radio-groovesalad',
    name: 'SomaFM Groove Salad',
    desc: 'Downtempo Ambient & Chillout Lo-Fi Beats',
    genre: 'lofi',
    country: 'San Francisco, CA',
    icon: 'fa-mug-saucer',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop&q=80',
    src: 'https://ice2.somafm.com/groovesalad-128-mp3',
    isLive: true
  },
  {
    id: 'radio-classicrock',
    name: '181.FM Classic Rock',
    desc: '70s, 80s & 90s Legendary Rock Anthems',
    genre: 'rock',
    country: 'Global Rock',
    icon: 'fa-guitar',
    cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop&q=80',
    src: 'https://listen.181fm.com/181-rock_128k.mp3',
    isLive: true
  },
  {
    id: 'radio-awesome80s',
    name: '181.FM Awesome 80s',
    desc: 'Retro Pop, Synthwave & 80s Golden Classics',
    genre: 'rock',
    country: 'Retro Hits',
    icon: 'fa-radio',
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80',
    src: 'https://listen.181fm.com/181-awesome80s_128k.mp3',
    isLive: true
  },
  {
    id: 'radio-smoothjazz',
    name: 'SmoothJazz.com Global',
    desc: 'World Premier Smooth Jazz & Soul Saxophone',
    genre: 'jazz',
    country: 'Monterey Bay, CA',
    icon: 'fa-saxophone',
    cover: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=80',
    src: 'https://sj128.hnux.com',
    isLive: true
  },
  {
    id: 'radio-deepspace',
    name: 'SomaFM Deep Space One',
    desc: 'Deep Ambient Electronic Soundscapes & Drone',
    genre: 'jazz',
    country: 'Deep Space',
    icon: 'fa-moon',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&auto=format&fit=crop&q=80',
    src: 'https://ice2.somafm.com/deepspaceone-128-mp3',
    isLive: true
  }
];

class Ticket2GrowApp {
  constructor() {
    // State
    this.tracks = [...DEFAULT_TRACKS];
    this.onlineTrendingTracks = [];
    this.localTracks = [];
    this.radioStations = [...LIVE_RADIO_STATIONS];
    this.likedTrackIds = JSON.parse(localStorage.getItem('t2g_liked_songs') || '[]');
    this.customPlaylists = JSON.parse(localStorage.getItem('t2g_playlists') || '[]');
    this.currentPlaylist = [...this.tracks];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isShuffle = false;
    this.repeatMode = 'off'; // 'off' | 'all' | 'one'
    this.visualizerMode = 'bars'; // 'bars' | 'wave' | 'circular'
    this.activeFilter = 'all';
    this.activeRadioFilter = 'all';
    this.activeSearchTab = 'all';
    this.currentView = 'home';
    this.viewHistory = ['home'];
    this.historyIdx = 0;
    this.searchDebounceTimer = null;
    this.lastSearchResults = {
      local: [],
      online: [],
      radio: []
    };

    // Web Audio API Elements
    this.audioContext = null;
    this.audioSource = null;
    this.analyser = null;
    this.eqNodes = {};
    this.bassBoostNode = null;
    this.isAudioCtxInitialized = false;

    // DOM Elements Cache
    this.audio = document.getElementById('audioEngine');
    this.initElements();
    this.initEventListeners();
    this.initVisualizer();
    this.renderAll();

    // Fetch live online trending tracks from Audius API
    this.fetchTrendingTracks();

    // Auto load first track ready to play
    if (this.tracks.length > 0) {
      this.loadTrack(0, false);
    }
  }

  initElements() {
    this.playPauseBtn = document.getElementById('mainPlayPauseBtn');
    this.playIcon = document.getElementById('mainPlayIcon');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.shuffleBtn = document.getElementById('shuffleBtn');
    this.repeatBtn = document.getElementById('repeatBtn');
    this.playerCoverImg = document.getElementById('playerCoverImg');
    this.playerTitle = document.getElementById('playerTitle');
    this.playerArtist = document.getElementById('playerArtist');
    this.playerLikeBtn = document.getElementById('playerLikeBtn');
    this.progressBarContainer = document.getElementById('progressBarContainer');
    this.progressCurrentBar = document.getElementById('progressCurrentBar');
    this.progressBufferBar = document.getElementById('progressBufferBar');
    this.currentTimeLabel = document.getElementById('currentTimeLabel');
    this.durationTimeLabel = document.getElementById('durationTimeLabel');
    this.volumeRangeInput = document.getElementById('volumeRangeInput');
    this.volumeMuteBtn = document.getElementById('volumeMuteBtn');
    this.volumeIcon = document.getElementById('volumeIcon');
    this.globalSearchInput = document.getElementById('globalSearchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.heroVinyl = document.getElementById('heroVinyl');
    this.playingPulseRing = document.getElementById('playingPulseRing');
    this.canvas = document.getElementById('audioVisualizerCanvas');
    this.canvasCtx = this.canvas ? this.canvas.getContext('2d') : null;
    this.queueDrawer = document.getElementById('queueDrawer');
  }

  initEventListeners() {
    // Media Playback Controls
    this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    this.prevBtn.addEventListener('click', () => this.playPrevious());
    this.nextBtn.addEventListener('click', () => this.playNext());
    this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
    this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
    this.playerLikeBtn.addEventListener('click', () => this.toggleCurrentTrackLike());

    // Audio Engine Events
    this.audio.addEventListener('timeupdate', () => this.handleTimeUpdate());
    this.audio.addEventListener('loadedmetadata', () => this.handleMetadataLoaded());
    this.audio.addEventListener('progress', () => this.handleBufferProgress());
    this.audio.addEventListener('ended', () => this.handleTrackEnded());
    this.audio.addEventListener('error', (e) => this.handleAudioError(e));

    // Progress Bar Scrubber
    this.progressBarContainer.addEventListener('click', (e) => this.handleSeek(e));

    // Volume Slider
    this.volumeRangeInput.addEventListener('input', (e) => this.handleVolumeChange(e.target.value));
    this.volumeMuteBtn.addEventListener('click', () => this.toggleMute());

    // Navigation & View Routing
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view) this.navigateToView(view);
      });
    });

    // History Buttons
    document.getElementById('historyBackBtn').addEventListener('click', () => this.navigateHistory(-1));
    document.getElementById('historyForwardBtn').addEventListener('click', () => this.navigateHistory(1));

    // Search Input with Real-time Online Querying
    this.globalSearchInput.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
    this.clearSearchBtn.addEventListener('click', () => {
      this.globalSearchInput.value = '';
      this.clearSearchBtn.style.display = 'none';
      this.navigateToView('home');
    });

    // Search Tabs (All, Online, Radio, Local)
    document.querySelectorAll('.search-tab-pill').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        document.querySelectorAll('.search-tab-pill').forEach(b => b.classList.remove('active'));
        tabBtn.classList.add('active');
        this.activeSearchTab = tabBtn.dataset.searchTab;
        this.renderSearchResults();
      });
    });

    // Home Genre Filter Pills
    document.querySelectorAll('.genre-pill-bar .filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.genre-pill-bar .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeFilter = pill.dataset.filter;
        this.renderFilteredHome();
      });
    });

    // Live Radio Filter Pills
    document.querySelectorAll('#radioFilterBar .filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#radioFilterBar .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeRadioFilter = pill.dataset.radioFilter;
        this.renderRadioStations(this.activeRadioFilter);
      });
    });

    // Local Files Importer (File Picker & Drag/Drop)
    const fileInput = document.getElementById('audioFileInput');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => this.handleFileImport(e.target.files));
    }

    const dropZone = document.getElementById('dragDropZone');
    if (dropZone) {
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
      });
      dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (e.dataTransfer.files) this.handleFileImport(e.dataTransfer.files);
      });
      dropZone.addEventListener('click', () => fileInput.click());
    }

    // Hero buttons
    document.getElementById('heroPlayAllBtn')?.addEventListener('click', () => {
      this.currentPlaylist = [...this.tracks];
      this.playTrack(0);
    });
    document.getElementById('heroImportBtn')?.addEventListener('click', () => {
      this.navigateToView('local-files');
    });

    // Browse all Radio button from home
    document.getElementById('seeAllRadioBtn')?.addEventListener('click', () => {
      this.navigateToView('radio');
    });

    // Refresh Online Hits button
    document.getElementById('refreshOnlineBtn')?.addEventListener('click', () => {
      this.fetchTrendingTracks(true);
    });

    // Right Drawer Toggles (Queue & Lyrics)
    document.getElementById('playerQueueToggle').addEventListener('click', () => this.toggleQueueDrawer('queue'));
    document.getElementById('playerLyricsToggle').addEventListener('click', () => this.toggleQueueDrawer('lyrics'));
    document.getElementById('closeDrawerBtn').addEventListener('click', () => this.queueDrawer.classList.remove('open'));
    
    document.getElementById('tabQueueBtn').addEventListener('click', () => this.switchDrawerTab('queue'));
    document.getElementById('tabLyricsBtn').addEventListener('click', () => this.switchDrawerTab('lyrics'));
    document.getElementById('clearQueueBtn').addEventListener('click', () => this.clearQueue());

    // Top Visualizer Pill & Fullscreen Toggle
    document.getElementById('topVisualizerToggle')?.addEventListener('click', () => {
      this.navigateToView('visualizer-view');
    });
    document.getElementById('playerFullscreenToggle')?.addEventListener('click', () => {
      this.navigateToView('visualizer-view');
    });

    // Visualizer Modes
    ['Bars', 'Wave', 'Circular'].forEach(mode => {
      const btn = document.getElementById(`visMode${mode}`);
      if (btn) {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.vis-controls .pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.visualizerMode = mode.toLowerCase();
        });
      }
    });

    // Studio Equalizer Presets & Sliders
    this.initEqualizerControls();

    // Mobile Sidebar Toggle
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    if (openSidebarBtn && sidebar) {
      openSidebarBtn.addEventListener('click', () => sidebar.classList.add('mobile-open'));
    }
    if (closeSidebarBtn && sidebar) {
      closeSidebarBtn.addEventListener('click', () => sidebar.classList.remove('mobile-open'));
    }

    // Playlist Modal
    document.getElementById('createPlaylistBtn').addEventListener('click', () => {
      document.getElementById('createPlaylistModal').classList.add('open');
    });
    document.getElementById('closePlaylistModal').addEventListener('click', () => {
      document.getElementById('createPlaylistModal').classList.remove('open');
    });
    document.getElementById('cancelPlaylistModal').addEventListener('click', () => {
      document.getElementById('createPlaylistModal').classList.remove('open');
    });
    document.getElementById('savePlaylistBtn').addEventListener('click', () => this.handleCreatePlaylist());

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.togglePlayPause();
      } else if (e.code === 'ArrowRight' && (e.ctrlKey || e.metaKey)) {
        this.playNext();
      } else if (e.code === 'ArrowLeft' && (e.ctrlKey || e.metaKey)) {
        this.playPrevious();
      } else if (e.code === 'KeyM') {
        this.toggleMute();
      }
    });
  }

  /* ==========================================================================
     ONLINE MUSIC & AUDIUS API INTEGRATION
     ========================================================================== */
  async fetchTrendingTracks(forceNotification = false) {
    try {
      const res = await fetch('https://discoveryprovider.audius.co/v1/tracks/trending?limit=15&app_name=Ticket2Grow');
      if (!res.ok) throw new Error('Trending API response not ok');
      const json = await res.json();
      
      if (json && json.data && json.data.length > 0) {
        const audiusTracks = json.data.map(item => ({
          id: `audius-${item.id}`,
          title: item.title,
          artist: item.user?.name || item.user?.handle || 'Audius Artist',
          album: item.genre || 'Trending Hit',
          genre: item.genre || 'Trending',
          duration: item.duration || 180,
          cover: item.artwork ? (item.artwork['480x480'] || item.artwork['150x150']) : (item.cover_art_sizes ? `https://creatornode.audius.co/ipfs/${item.cover_art_sizes}/480x480.jpg` : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80'),
          src: `https://discoveryprovider.audius.co/v1/tracks/${item.id}/stream?app_name=Ticket2Grow`,
          isOnline: true,
          lyrics: [
            `Streaming "${item.title}" by ${item.user?.name || 'Artist'}.`,
            "Delivered live via Ticket2Grow Open Music Engine.",
            "High-fidelity sound processing active."
          ]
        }));

        this.onlineTrendingTracks = audiusTracks;
        
        // Merge into tracks list without duplicating
        const existingIds = new Set(this.tracks.map(t => t.id));
        audiusTracks.forEach(t => {
          if (!existingIds.has(t.id)) {
            this.tracks.push(t);
          }
        });

        this.renderFilteredHome();
        if (forceNotification) {
          this.showToast('Updated latest online trending music hits! 🚀');
        }
      }
    } catch (err) {
      console.warn('Online Audius tracks fetch error (falling back to offline bundled tracks):', err);
    }
  }

  handleSearchInput(query) {
    query = query.trim();
    if (!query) {
      this.clearSearchBtn.style.display = 'none';
      this.navigateToView('home');
      return;
    }

    this.clearSearchBtn.style.display = 'inline-flex';
    document.getElementById('searchQueryText').textContent = query;
    this.navigateToView('search');

    // Instant local & cached search
    const qLower = query.toLowerCase();
    this.lastSearchResults.local = this.tracks.filter(t => 
      t.title.toLowerCase().includes(qLower) ||
      t.artist.toLowerCase().includes(qLower) ||
      t.album?.toLowerCase().includes(qLower) ||
      t.genre?.toLowerCase().includes(qLower)
    );

    this.lastSearchResults.radio = this.radioStations.filter(s =>
      s.name.toLowerCase().includes(qLower) ||
      s.desc.toLowerCase().includes(qLower) ||
      s.genre.toLowerCase().includes(qLower) ||
      s.country.toLowerCase().includes(qLower)
    );

    this.renderSearchResults();

    // Debounced Online Search via Audius API
    clearTimeout(this.searchDebounceTimer);
    const searchLoader = document.getElementById('searchLoader');
    if (searchLoader) searchLoader.style.display = 'inline-flex';

    this.searchDebounceTimer = setTimeout(async () => {
      try {
        const res = await fetch(`https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(query)}&limit=15&app_name=Ticket2Grow`);
        if (res.ok) {
          const json = await res.json();
          if (json && json.data) {
            this.lastSearchResults.online = json.data.map(item => ({
              id: `audius-${item.id}`,
              title: item.title,
              artist: item.user?.name || item.user?.handle || 'Audius Artist',
              album: item.genre || 'Online Search Hit',
              genre: item.genre || 'Online Hit',
              duration: item.duration || 180,
              cover: item.artwork ? (item.artwork['480x480'] || item.artwork['150x150']) : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80',
              src: `https://discoveryprovider.audius.co/v1/tracks/${item.id}/stream?app_name=Ticket2Grow`,
              isOnline: true
            }));
          }
        }
      } catch (e) {
        console.warn('Online search error:', e);
      } finally {
        if (searchLoader) searchLoader.style.display = 'none';
        this.renderSearchResults();
      }
    }, 450);
  }

  renderSearchResults() {
    const tab = this.activeSearchTab;
    const { local, online, radio } = this.lastSearchResults;
    
    // Merge tracks based on tab
    let displayTracks = [];
    if (tab === 'all') {
      displayTracks = [...local, ...online.filter(o => !local.some(l => l.id === o.id))];
    } else if (tab === 'online') {
      displayTracks = online.length > 0 ? online : local.filter(l => l.isOnline);
    } else if (tab === 'local') {
      displayTracks = this.localTracks;
    }

    const totalCount = (tab === 'radio' ? radio.length : displayTracks.length + radio.length);
    document.getElementById('searchResultCount').textContent = `Found ${totalCount} matching result(s)`;

    // Radio results section
    const radioSection = document.getElementById('searchRadioSection');
    const radioGrid = document.getElementById('searchRadioGrid');
    if (tab === 'radio' || (tab === 'all' && radio.length > 0)) {
      radioSection.style.display = 'block';
      radioGrid.innerHTML = radio.map(s => this.getRadioCardHtml(s)).join('');
    } else {
      radioSection.style.display = 'none';
    }

    // Tracks results section
    const tracksSection = document.getElementById('searchTracksSection');
    if (tab === 'radio') {
      tracksSection.style.display = 'none';
    } else {
      tracksSection.style.display = 'block';
      this.renderTracksTable(displayTracks, 'searchTableBody');
    }
  }

  /* ==========================================================================
     WEB AUDIO API: EQUALIZER & ANALYSER
     ========================================================================== */
  initAudioContext() {
    if (this.isAudioCtxInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
      
      this.audioSource = this.audioContext.createMediaElementSource(this.audio);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;

      // 5-band Graphic Equalizer Nodes
      const frequencies = [60, 250, 1000, 4000, 16000];
      let lastNode = this.audioSource;

      frequencies.forEach(freq => {
        const filter = this.audioContext.createBiquadFilter();
        if (freq === 60) filter.type = 'lowshelf';
        else if (freq === 16000) filter.type = 'highshelf';
        else filter.type = 'peaking';

        filter.frequency.value = freq;
        filter.gain.value = 0;
        this.eqNodes[freq] = filter;

        lastNode.connect(filter);
        lastNode = filter;
      });

      // Bass Boost Node
      this.bassBoostNode = this.audioContext.createBiquadFilter();
      this.bassBoostNode.type = 'lowshelf';
      this.bassBoostNode.frequency.value = 90;
      this.bassBoostNode.gain.value = 0;

      lastNode.connect(this.bassBoostNode);
      this.bassBoostNode.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      this.isAudioCtxInitialized = true;
    } catch (err) {
      console.warn('Web Audio API initialized in fallback mode:', err);
    }
  }

  initEqualizerControls() {
    const freqs = [60, 250, 1000, 4000, 16000];
    freqs.forEach(freq => {
      const slider = document.getElementById(`eqBand${freq}`);
      const valLabel = document.getElementById(`eqVal${freq}`);
      if (slider) {
        slider.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          if (valLabel) valLabel.textContent = `${val > 0 ? '+' : ''}${val} dB`;
          if (this.eqNodes[freq]) {
            this.eqNodes[freq].gain.value = val;
          }
        });
      }
    });

    // Preset Buttons
    const presets = {
      'flat': [0, 0, 0, 0, 0],
      'bass-boost': [9, 6, 2, 0, -1],
      'electronic': [7, 4, -2, 3, 6],
      'vocal': [-3, 1, 6, 5, 2],
      'rock': [6, 4, -1, 4, 7],
      'acoustic': [4, 2, 2, 5, 6]
    };

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const presetName = btn.dataset.preset;
        const values = presets[presetName] || presets.flat;
        freqs.forEach((freq, idx) => {
          const val = values[idx];
          const slider = document.getElementById(`eqBand${freq}`);
          const label = document.getElementById(`eqVal${freq}`);
          if (slider) slider.value = val;
          if (label) label.textContent = `${val > 0 ? '+' : ''}${val} dB`;
          if (this.eqNodes[freq]) this.eqNodes[freq].gain.value = val;
        });
        this.showToast(`Applied EQ Preset: ${presetName.toUpperCase()}`);
      });
    });

    // Reset EQ
    const resetBtn = document.getElementById('resetEqBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        document.querySelector('.preset-btn[data-preset="flat"]')?.click();
      });
    }

    // Super Bass Switch
    const superBassToggle = document.getElementById('superBassToggle');
    if (superBassToggle) {
      superBassToggle.addEventListener('change', (e) => {
        if (this.bassBoostNode) {
          this.bassBoostNode.gain.value = e.target.checked ? 10 : 0;
        }
        this.showToast(e.target.checked ? 'Super Bass: ON 🔥' : 'Super Bass: OFF');
      });
    }

    // Playback Speed
    const speedSelect = document.getElementById('playbackSpeedSelect');
    if (speedSelect) {
      speedSelect.addEventListener('change', (e) => {
        this.audio.playbackRate = parseFloat(e.target.value);
        this.showToast(`Playback Speed: ${e.target.value}x`);
      });
    }
  }

  /* ==========================================================================
     PLAYBACK ENGINE
     ========================================================================== */
  loadTrack(index, autoPlay = true) {
    if (!this.currentPlaylist || this.currentPlaylist.length === 0) return;
    if (index < 0) index = this.currentPlaylist.length - 1;
    if (index >= this.currentPlaylist.length) index = 0;

    this.currentIndex = index;
    const track = this.currentPlaylist[this.currentIndex];

    // Update Player UI
    this.playerTitle.textContent = track.title;
    this.playerArtist.textContent = track.artist;
    this.playerCoverImg.src = track.cover || 'ticket2grow_app_icon.svg';
    
    // Update Document Title
    document.title = `${track.title} • Ticket2Grow`;

    // Update Like button
    const isLiked = this.likedTrackIds.includes(track.id);
    this.playerLikeBtn.classList.toggle('liked', isLiked);
    this.playerLikeBtn.innerHTML = isLiked ? '<i class="fa-solid fa-heart text-green"></i>' : '<i class="fa-regular fa-heart"></i>';

    // Update Fullscreen Visualizer Header
    const visTitle = document.getElementById('visTitle');
    const visArtist = document.getElementById('visArtist');
    if (visTitle) visTitle.textContent = track.title;
    if (visArtist) visArtist.textContent = `${track.artist} • ${track.album || (track.isLive ? 'Live Radio' : 'Album')}`;

    // Update Lyrics & Queue
    this.renderLyrics(track);
    this.renderQueue();
    this.updateActiveTableRows();

    // Reset scrubber for live or on-demand
    if (track.isLive) {
      this.currentTimeLabel.innerHTML = '<span class="live-tag-badge">LIVE</span>';
      this.durationTimeLabel.textContent = 'ON AIR';
      this.progressCurrentBar.style.width = '100%';
    } else {
      this.currentTimeLabel.textContent = '0:00';
      this.durationTimeLabel.textContent = this.formatTime(track.duration || 0);
      this.progressCurrentBar.style.width = '0%';
    }

    // Audio source loading
    this.audio.src = track.src;
    this.audio.load();

    if (autoPlay) {
      this.play();
    }
  }

  playTrack(index, playlist = null) {
    if (playlist) {
      this.currentPlaylist = [...playlist];
    }
    this.initAudioContext();
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    this.loadTrack(index, true);
  }

  playRadioStation(stationId) {
    const station = this.radioStations.find(s => s.id === stationId);
    if (!station) return;

    const radioTrack = {
      id: station.id,
      title: station.name,
      artist: `${station.country} • Live Broadcast`,
      album: 'Live 24/7 Hit Radio',
      genre: station.genre.toUpperCase(),
      duration: 0,
      cover: station.cover,
      src: station.src,
      isLive: true,
      lyrics: [
        `Tuned in to ${station.name}.`,
        station.desc,
        "Broadcasting live 24/7 in HD digital audio on Ticket2Grow."
      ]
    };

    // Set as current track
    this.currentPlaylist = [radioTrack, ...this.tracks];
    this.playTrack(0);
    this.showToast(`Tuned to ${station.name} 🔴 LIVE`);
  }

  play() {
    this.initAudioContext();
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    this.audio.play().then(() => {
      this.isPlaying = true;
      this.updatePlayStateUI();
    }).catch(err => {
      console.warn('Playback error, retrying stream:', err);
      this.isPlaying = true;
      this.updatePlayStateUI();
    });
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayStateUI();
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      if (!this.audio.src || this.audio.src === '') {
        this.loadTrack(this.currentIndex, true);
      } else {
        this.play();
      }
    }
  }

  playNext() {
    if (this.isShuffle) {
      const nextIdx = Math.floor(Math.random() * this.currentPlaylist.length);
      this.playTrack(nextIdx);
    } else {
      this.playTrack(this.currentIndex + 1);
    }
  }

  playPrevious() {
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    } else {
      this.playTrack(this.currentIndex - 1);
    }
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.shuffleBtn.classList.toggle('active', this.isShuffle);
    this.showToast(this.isShuffle ? 'Shuffle Mode: ON' : 'Shuffle Mode: OFF');
  }

  toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    const nextIdx = (modes.indexOf(this.repeatMode) + 1) % modes.length;
    this.repeatMode = modes[nextIdx];

    if (this.repeatMode === 'off') {
      this.repeatBtn.classList.remove('active');
      this.repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
      this.showToast('Repeat: OFF');
    } else if (this.repeatMode === 'all') {
      this.repeatBtn.classList.add('active');
      this.repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
      this.showToast('Repeat: All Tracks');
    } else if (this.repeatMode === 'one') {
      this.repeatBtn.classList.add('active');
      this.repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i><span style="font-size:0.6rem;position:absolute;top:2px;right:2px;font-weight:900;">1</span>';
      this.showToast('Repeat: Current Track');
    }
  }

  handleTrackEnded() {
    if (this.repeatMode === 'one') {
      this.audio.currentTime = 0;
      this.play();
    } else if (this.repeatMode === 'all' || this.currentIndex < this.currentPlaylist.length - 1) {
      this.playNext();
    } else {
      this.pause();
    }
  }

  handleAudioError(e) {
    console.warn('Audio stream error encountered:', e);
    const track = this.currentPlaylist[this.currentIndex];
    this.showToast(`Connecting to ${track?.title || 'audio stream'}...`);
  }

  updatePlayStateUI() {
    if (this.isPlaying) {
      this.playIcon.classList.remove('fa-play');
      this.playIcon.classList.add('fa-pause');
      if (this.heroVinyl) this.heroVinyl.classList.add('spinning');
      if (this.playingPulseRing) this.playingPulseRing.style.display = 'block';
    } else {
      this.playIcon.classList.remove('fa-pause');
      this.playIcon.classList.add('fa-play');
      if (this.heroVinyl) this.heroVinyl.classList.remove('spinning');
      if (this.playingPulseRing) this.playingPulseRing.style.display = 'none';
    }
  }

  /* ==========================================================================
     TIMING & SCRUBBING
     ========================================================================== */
  handleTimeUpdate() {
    const curTrack = this.currentPlaylist[this.currentIndex];
    if (curTrack && curTrack.isLive) {
      this.currentTimeLabel.innerHTML = '<span class="live-tag-badge">LIVE</span>';
      this.durationTimeLabel.textContent = 'ON AIR';
      this.progressCurrentBar.style.width = '100%';
      return;
    }

    if (!this.audio.duration || !isFinite(this.audio.duration)) {
      if (this.isPlaying) {
        this.currentTimeLabel.textContent = this.formatTime(this.audio.currentTime);
        this.durationTimeLabel.textContent = 'Streaming';
      }
      return;
    }

    const current = this.audio.currentTime;
    const duration = this.audio.duration;
    const percent = (current / duration) * 100;

    this.progressCurrentBar.style.width = `${percent}%`;
    this.currentTimeLabel.textContent = this.formatTime(current);
  }

  handleMetadataLoaded() {
    const curTrack = this.currentPlaylist[this.currentIndex];
    if (curTrack && curTrack.isLive) {
      this.durationTimeLabel.textContent = 'ON AIR';
      return;
    }

    const duration = this.audio.duration || 0;
    if (isFinite(duration) && duration > 0) {
      this.durationTimeLabel.textContent = this.formatTime(duration);
    } else {
      this.durationTimeLabel.textContent = 'Live';
    }
  }

  handleBufferProgress() {
    if (this.audio.buffered.length > 0 && this.audio.duration && isFinite(this.audio.duration)) {
      const bufferedEnd = this.audio.buffered.end(this.audio.buffered.length - 1);
      const percent = (bufferedEnd / this.audio.duration) * 100;
      this.progressBufferBar.style.width = `${percent}%`;
    }
  }

  handleSeek(e) {
    const curTrack = this.currentPlaylist[this.currentIndex];
    if (curTrack && curTrack.isLive) {
      this.showToast('Live Radio Stream is in real-time');
      return;
    }

    const rect = this.progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.max(0, Math.min(1, clickX / width));
    
    if (this.audio.duration && isFinite(this.audio.duration)) {
      this.audio.currentTime = percent * this.audio.duration;
      this.progressCurrentBar.style.width = `${percent * 100}%`;
    }
  }

  handleVolumeChange(val) {
    this.audio.volume = parseFloat(val);
    this.audio.muted = false;
    this.updateVolumeIcon(this.audio.volume);
  }

  toggleMute() {
    this.audio.muted = !this.audio.muted;
    if (this.audio.muted) {
      this.volumeIcon.className = 'fa-solid fa-volume-xmark';
      this.volumeRangeInput.value = 0;
    } else {
      this.updateVolumeIcon(this.audio.volume);
      this.volumeRangeInput.value = this.audio.volume;
    }
  }

  updateVolumeIcon(vol) {
    if (vol === 0) this.volumeIcon.className = 'fa-solid fa-volume-xmark';
    else if (vol < 0.5) this.volumeIcon.className = 'fa-solid fa-volume-low';
    else this.volumeIcon.className = 'fa-solid fa-volume-high';
  }

  /* ==========================================================================
     VISUALIZER ENGINE (HIGH FPS SPECTRUM)
     ========================================================================== */
  initVisualizer() {
    if (!this.canvas) return;

    const resizeCanvas = () => {
      if (!this.canvas.parentElement) return;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = rect.width * window.devicePixelRatio;
      this.canvas.height = rect.height * window.devicePixelRatio;
      if (this.canvasCtx) {
        this.canvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 100);

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);
      if (!this.canvasCtx) return;

      const width = this.canvas.width / window.devicePixelRatio;
      const height = this.canvas.height / window.devicePixelRatio;

      this.canvasCtx.clearRect(0, 0, width, height);

      let bufferLength = 64;
      let dataArray = new Uint8Array(bufferLength);

      if (this.analyser && this.isPlaying) {
        this.analyser.getByteFrequencyData(dataArray);
      } else {
        // Idle ambient gentle wave animation
        const time = Date.now() * 0.003;
        for (let i = 0; i < bufferLength; i++) {
          dataArray[i] = (Math.sin(time + i * 0.2) + 1) * 20;
        }
      }

      if (this.visualizerMode === 'bars') {
        const barWidth = (width / bufferLength) * 1.5;
        let x = (width - (bufferLength * barWidth * 0.8)) / 2;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * height * 0.75;
          const gradient = this.canvasCtx.createLinearGradient(0, height, 0, height - barHeight);
          gradient.addColorStop(0, '#1DB954');
          gradient.addColorStop(0.5, '#00FFA3');
          gradient.addColorStop(1, '#00D2FF');

          this.canvasCtx.fillStyle = gradient;
          this.canvasCtx.beginPath();
          this.canvasCtx.roundRect(x, height - barHeight - 20, barWidth - 4, barHeight + 4, [6, 6, 0, 0]);
          this.canvasCtx.fill();

          x += barWidth * 0.8;
        }
      } else if (this.visualizerMode === 'wave') {
        this.canvasCtx.beginPath();
        this.canvasCtx.lineWidth = 3;
        this.canvasCtx.strokeStyle = '#00FFA3';

        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) this.canvasCtx.moveTo(x, y);
          else this.canvasCtx.lineTo(x, y);

          x += sliceWidth;
        }
        this.canvasCtx.stroke();
      } else if (this.visualizerMode === 'circular') {
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(centerX, centerY) * 0.45;

        this.canvasCtx.beginPath();
        this.canvasCtx.arc(centerX, centerY, radius * 0.7, 0, 2 * Math.PI);
        this.canvasCtx.strokeStyle = 'rgba(29, 185, 84, 0.4)';
        this.canvasCtx.lineWidth = 4;
        this.canvasCtx.stroke();

        for (let i = 0; i < bufferLength; i++) {
          const angle = (i / bufferLength) * Math.PI * 2;
          const barHeight = (dataArray[i] / 255) * 80;
          const x1 = centerX + Math.cos(angle) * radius;
          const y1 = centerY + Math.sin(angle) * radius;
          const x2 = centerX + Math.cos(angle) * (radius + barHeight);
          const y2 = centerY + Math.sin(angle) * (radius + barHeight);

          this.canvasCtx.strokeStyle = '#00FFA3';
          this.canvasCtx.lineWidth = 3;
          this.canvasCtx.beginPath();
          this.canvasCtx.moveTo(x1, y1);
          this.canvasCtx.lineTo(x2, y2);
          this.canvasCtx.stroke();
        }
      }
    };

    renderFrame();
  }

  /* ==========================================================================
     PLAYLISTS, LIKES & LOCAL IMPORTS
     ========================================================================== */
  toggleCurrentTrackLike() {
    const track = this.currentPlaylist[this.currentIndex];
    if (!track) return;

    const idx = this.likedTrackIds.indexOf(track.id);
    if (idx === -1) {
      this.likedTrackIds.push(track.id);
      this.showToast(`Saved "${track.title}" to Liked Songs ❤️`);
    } else {
      this.likedTrackIds.splice(idx, 1);
      this.showToast(`Removed "${track.title}" from Liked Songs`);
    }

    localStorage.setItem('t2g_liked_songs', JSON.stringify(this.likedTrackIds));
    document.getElementById('likedCountPill').textContent = this.likedTrackIds.length;

    const isLiked = this.likedTrackIds.includes(track.id);
    this.playerLikeBtn.classList.toggle('liked', isLiked);
    this.playerLikeBtn.innerHTML = isLiked ? '<i class="fa-solid fa-heart text-green"></i>' : '<i class="fa-regular fa-heart"></i>';

    this.renderLikedTable();
  }

  toggleTrackLike(trackId) {
    const idx = this.likedTrackIds.indexOf(trackId);
    const track = this.tracks.find(t => t.id === trackId) || this.currentPlaylist.find(t => t.id === trackId);
    if (idx === -1) {
      this.likedTrackIds.push(trackId);
      this.showToast(`Saved "${track?.title || 'Track'}" to Liked Songs`);
    } else {
      this.likedTrackIds.splice(idx, 1);
      this.showToast(`Removed from Liked Songs`);
    }

    localStorage.setItem('t2g_liked_songs', JSON.stringify(this.likedTrackIds));
    document.getElementById('likedCountPill').textContent = this.likedTrackIds.length;
    this.renderLikedTable();
    this.renderFilteredHome();
  }

  handleCreatePlaylist() {
    const nameInput = document.getElementById('playlistNameInput');
    const descInput = document.getElementById('playlistDescInput');
    const name = nameInput.value.trim();
    if (!name) return;

    const newPlaylist = {
      id: `pl-${Date.now()}`,
      name: name,
      desc: descInput.value.trim(),
      tracks: []
    };

    this.customPlaylists.push(newPlaylist);
    localStorage.setItem('t2g_playlists', JSON.stringify(this.customPlaylists));
    
    nameInput.value = '';
    descInput.value = '';
    document.getElementById('createPlaylistModal').classList.remove('open');

    this.renderCustomPlaylists();
    this.showToast(`Playlist "${name}" created!`);
  }

  handleFileImport(files) {
    if (!files || files.length === 0) return;
    let count = 0;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('audio/') || file.name.endsWith('.mp3') || file.name.endsWith('.wav') || file.name.endsWith('.m4a')) {
        const fileUrl = URL.createObjectURL(file);
        const newTrack = {
          id: `local-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          title: file.name.replace(/\.[^/.]+$/, ''),
          artist: 'Local Audio File',
          album: 'Device Storage',
          genre: 'Local',
          duration: 0,
          cover: 'ticket2grow_app_icon.svg',
          src: fileUrl,
          isLocal: true,
          lyrics: ["Playing directly from your local device storage."]
        };

        this.localTracks.push(newTrack);
        this.tracks.unshift(newTrack);
        count++;
      }
    });

    if (count > 0) {
      this.renderLocalFilesTable();
      this.renderFilteredHome();
      document.getElementById('localCountPill').textContent = this.localTracks.length;
      this.showToast(`Imported ${count} local audio track(s)! 🎧`);
      this.navigateToView('local-files');
    }
  }

  /* ==========================================================================
     VIEWS & NAVIGATION
     ========================================================================== */
  navigateToView(viewName) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    const targetSection = document.getElementById(this.getViewSectionId(viewName));
    if (targetSection) {
      targetSection.classList.add('active');
    }

    const navBtn = document.querySelector(`.nav-item[data-view="${viewName}"]`);
    if (navBtn) navBtn.classList.add('active');

    // Sidebar auto close on mobile
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');

    this.currentView = viewName;
    if (this.viewHistory[this.historyIdx] !== viewName) {
      this.viewHistory.push(viewName);
      this.historyIdx = this.viewHistory.length - 1;
    }

    // Scroll to top
    document.getElementById('mainContent').scrollTo({ top: 0, behavior: 'smooth' });
  }

  getViewSectionId(name) {
    const map = {
      'home': 'viewHome',
      'radio': 'viewRadio',
      'explore': 'viewExplore',
      'podcasts': 'viewPodcasts',
      'liked': 'viewLiked',
      'local-files': 'viewLocalFiles',
      'equalizer': 'viewEqualizer',
      'visualizer-view': 'viewVisualizer',
      'search': 'viewSearch'
    };
    return map[name] || 'viewHome';
  }

  navigateHistory(direction) {
    const nextIdx = this.historyIdx + direction;
    if (nextIdx >= 0 && nextIdx < this.viewHistory.length) {
      this.historyIdx = nextIdx;
      this.navigateToView(this.viewHistory[this.historyIdx]);
    }
  }

  /* ==========================================================================
     DRAWER TOGGLES & LYRICS
     ========================================================================== */
  toggleQueueDrawer(tab = 'queue') {
    const isOpen = this.queueDrawer.classList.contains('open');
    if (!isOpen) {
      this.queueDrawer.classList.add('open');
      this.switchDrawerTab(tab);
    } else {
      const activeTab = document.querySelector('.drawer-tab.active')?.id;
      if ((tab === 'queue' && activeTab === 'tabQueueBtn') || (tab === 'lyrics' && activeTab === 'tabLyricsBtn')) {
        this.queueDrawer.classList.remove('open');
      } else {
        this.switchDrawerTab(tab);
      }
    }
  }

  switchDrawerTab(tab) {
    document.querySelectorAll('.drawer-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.drawer-tab-pane').forEach(p => p.classList.remove('active'));

    if (tab === 'queue') {
      document.getElementById('tabQueueBtn').classList.add('active');
      document.getElementById('paneQueue').classList.add('active');
      this.renderQueue();
    } else {
      document.getElementById('tabLyricsBtn').classList.add('active');
      document.getElementById('paneLyrics').classList.add('active');
    }
  }

  renderLyrics(track) {
    const container = document.getElementById('lyricsContainer');
    if (!container) return;

    if (track.lyrics && track.lyrics.length > 0) {
      container.innerHTML = track.lyrics.map((line, idx) => `
        <p class="lyrics-line ${idx === 0 ? 'active' : ''}">${line}</p>
      `).join('');
    } else {
      container.innerHTML = `<p class="lyrics-line active">Pure audio stream. Feel the frequency of Ticket2Grow.</p>`;
    }
  }

  renderQueue() {
    const curBox = document.getElementById('queueCurrentTrack');
    const queueList = document.getElementById('queueItemsList');
    if (!curBox || !queueList) return;

    const currentTrack = this.currentPlaylist[this.currentIndex];
    if (currentTrack) {
      curBox.innerHTML = `
        <img src="${currentTrack.cover || 'ticket2grow_app_icon.svg'}" class="queue-thumb" alt="${currentTrack.title}">
        <div style="flex:1;overflow:hidden;">
          <strong style="display:block;font-size:0.88rem;color:#00FFA3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${currentTrack.title}</strong>
          <span style="font-size:0.75rem;color:#B3B3C2;">${currentTrack.artist}</span>
        </div>
        <i class="fa-solid fa-volume-high text-green"></i>
      `;
    }

    const upNext = this.currentPlaylist.slice(this.currentIndex + 1);
    if (upNext.length === 0) {
      queueList.innerHTML = `<p style="font-size:0.8rem;color:#75758A;padding:10px 0;">No more tracks in queue.</p>`;
    } else {
      queueList.innerHTML = upNext.map((t, idx) => `
        <div class="queue-track-row" onclick="window.t2gApp.playTrack(${this.currentIndex + 1 + idx})">
          <img src="${t.cover || 'ticket2grow_app_icon.svg'}" class="queue-thumb" alt="${t.title}">
          <div style="flex:1;overflow:hidden;">
            <strong style="display:block;font-size:0.85rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.title}</strong>
            <span style="font-size:0.72rem;color:#75758A;">${t.artist}</span>
          </div>
          <span style="font-size:0.75rem;color:#75758A;">${this.formatTime(t.duration)}</span>
        </div>
      `).join('');
    }
  }

  clearQueue() {
    if (this.currentPlaylist.length > 0) {
      this.currentPlaylist = [this.currentPlaylist[this.currentIndex]];
      this.currentIndex = 0;
      this.renderQueue();
      this.showToast('Cleared upcoming queue');
    }
  }

  /* ==========================================================================
     RENDERING ENGINE
     ========================================================================== */
  renderAll() {
    this.renderFilteredHome();
    this.renderHomeRadioCarousel();
    this.renderRadioStations();
    this.renderExplore();
    this.renderPodcasts();
    this.renderLikedTable();
    this.renderLocalFilesTable();
    this.renderCustomPlaylists();
    document.getElementById('likedCountPill').textContent = this.likedTrackIds.length;
    document.getElementById('localCountPill').textContent = this.localTracks.length;
  }

  renderFilteredHome() {
    let filtered = this.tracks;
    if (this.activeFilter !== 'all') {
      filtered = this.tracks.filter(t => t.genre?.toLowerCase() === this.activeFilter.toLowerCase());
    }

    // Quick Cards
    const quickGrid = document.getElementById('quickCardsGrid');
    if (quickGrid) {
      quickGrid.innerHTML = filtered.slice(0, 6).map((t, idx) => {
        const globalIdx = this.tracks.indexOf(t);
        return `
        <div class="quick-card" onclick="window.t2gApp.playTrack(${globalIdx})">
          <img src="${t.cover || 'ticket2grow_app_icon.svg'}" class="quick-card-img" alt="${t.title}">
          <div class="quick-card-info">
            <h4 class="quick-card-title">${t.title}</h4>
            <span style="font-size:0.75rem;color:#75758A;">${t.artist}</span>
          </div>
          <button class="quick-card-play-btn" title="Play ${t.title}">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      `;
      }).join('');
    }

    // Trending Table
    this.renderTracksTable(filtered, 'trendingTableBody');

    // Focus & Growth Carousel
    const focusBox = document.getElementById('focusCardsCarousel');
    if (focusBox) {
      focusBox.innerHTML = this.tracks.slice(0, 8).map((t, idx) => `
        <div class="music-card" onclick="window.t2gApp.playTrack(${idx})">
          <div class="card-img-box">
            <img src="${t.cover || 'ticket2grow_app_icon.svg'}" alt="${t.title}">
            <button class="card-play-fab" title="Play"><i class="fa-solid fa-play"></i></button>
          </div>
          <h4 class="card-title">${t.title}</h4>
          <p class="card-subtitle">${t.artist} • ${t.genre || 'Music'}</p>
        </div>
      `).join('');
    }
  }

  renderHomeRadioCarousel() {
    const carousel = document.getElementById('homeRadioCarousel');
    if (!carousel) return;

    carousel.innerHTML = this.radioStations.map(s => `
      <div class="music-card" onclick="window.t2gApp.playRadioStation('${s.id}')">
        <div class="card-img-box">
          <img src="${s.cover}" alt="${s.name}">
          <button class="card-play-fab" title="Listen Live"><i class="fa-solid fa-play"></i></button>
        </div>
        <h4 class="card-title">${s.name}</h4>
        <p class="card-subtitle"><span class="live-tag-badge">LIVE</span> ${s.country}</p>
      </div>
    `).join('');
  }

  renderRadioStations(filter = 'all') {
    const grid = document.getElementById('radioStationsGrid');
    if (!grid) return;

    let filtered = this.radioStations;
    if (filter !== 'all') {
      filtered = this.radioStations.filter(s => s.genre.toLowerCase() === filter.toLowerCase());
    }

    grid.innerHTML = filtered.map(s => this.getRadioCardHtml(s)).join('');
  }

  getRadioCardHtml(station) {
    return `
      <div class="radio-card" onclick="window.t2gApp.playRadioStation('${station.id}')">
        <div class="radio-card-header">
          <div class="radio-card-img-box">
            <img src="${station.cover}" alt="${station.name}">
          </div>
          <span class="radio-badge-live">LIVE</span>
        </div>
        <div class="radio-card-info">
          <h3 class="radio-card-title">${station.name}</h3>
          <p class="radio-card-desc">${station.desc}</p>
        </div>
        <div class="radio-card-footer">
          <span class="station-genre-tag">${station.genre.toUpperCase()}</span>
          <button class="radio-play-btn" title="Tune in live">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    `;
  }

  renderTracksTable(trackList, tableBodyId) {
    const tbody = document.getElementById(tableBodyId);
    if (!tbody) return;

    if (trackList.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:30px;color:#75758A;">No matching tracks found.</td></tr>`;
      return;
    }

    tbody.innerHTML = trackList.map((t, idx) => {
      const isCurrent = this.currentPlaylist[this.currentIndex]?.id === t.id;
      const isLiked = this.likedTrackIds.includes(t.id);
      const onlineBadge = t.isOnline ? '<span class="online-tag-badge">ONLINE</span>' : (t.isLive ? '<span class="live-tag-badge">LIVE</span>' : '');

      return `
        <tr class="track-row ${isCurrent ? 'playing' : ''}" data-id="${t.id}" onclick="window.t2gApp.handleTableRowClick('${t.id}')">
          <td class="track-num-cell">
            <span class="track-num-text">${idx + 1}</span>
            <i class="fa-solid fa-play track-play-icon"></i>
          </td>
          <td>
            <div class="track-col-main">
              <img src="${t.cover || 'ticket2grow_app_icon.svg'}" class="track-row-cover" alt="${t.title}">
              <div class="track-meta-title-box">
                <span class="track-col-title">${t.title} ${onlineBadge}</span>
                <span class="track-col-artist">${t.artist}</span>
              </div>
            </div>
          </td>
          <td><span class="track-col-album">${t.genre || t.album || 'Hit'}</span></td>
          <td><span class="track-col-duration">${t.isLive ? 'LIVE' : this.formatTime(t.duration)}</span></td>
          <td>
            <div class="track-actions-cell" onclick="event.stopPropagation()">
              <button class="icon-btn-inline ${isLiked ? 'liked' : ''}" onclick="window.t2gApp.toggleTrackLike('${t.id}')">
                <i class="${isLiked ? 'fa-solid fa-heart text-green' : 'fa-regular fa-heart'}"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  handleTableRowClick(trackId) {
    let trackIdx = this.currentPlaylist.findIndex(t => t.id === trackId);
    if (trackIdx !== -1) {
      this.playTrack(trackIdx);
    } else {
      // Find in all tracks, online search results, or radio
      const foundTrack = this.tracks.find(t => t.id === trackId) || 
                         this.lastSearchResults.online.find(t => t.id === trackId) ||
                         this.localTracks.find(t => t.id === trackId);
      if (foundTrack) {
        this.currentPlaylist = [foundTrack, ...this.tracks];
        this.playTrack(0);
      }
    }
  }

  renderLikedTable() {
    const likedTracks = this.tracks.filter(t => this.likedTrackIds.includes(t.id));
    const emptyState = document.getElementById('likedEmptyState');
    const metaText = document.getElementById('likedMetaText');

    if (metaText) metaText.textContent = `${likedTracks.length} song(s) • Saved to your local library`;

    if (likedTracks.length === 0) {
      if (emptyState) emptyState.style.display = 'flex';
      document.getElementById('likedTableBody').innerHTML = '';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      this.renderTracksTable(likedTracks, 'likedTableBody');
    }

    const playAllBtn = document.getElementById('playAllLikedBtn');
    if (playAllBtn) {
      playAllBtn.onclick = () => {
        if (likedTracks.length > 0) {
          this.currentPlaylist = [...likedTracks];
          this.playTrack(0);
        } else {
          this.showToast('No liked songs to play yet!');
        }
      };
    }
  }

  renderLocalFilesTable() {
    const metaText = document.getElementById('localMetaText');
    if (metaText) metaText.textContent = `${this.localTracks.length} uploaded tracks • Offline & Ready`;
    this.renderTracksTable(this.localTracks, 'localTableBody');

    const playLocalBtn = document.getElementById('playAllLocalBtn');
    if (playLocalBtn) {
      playLocalBtn.onclick = () => {
        if (this.localTracks.length > 0) {
          this.currentPlaylist = [...this.localTracks];
          this.playTrack(0);
        } else {
          this.showToast('Import local audio files first!');
        }
      };
    }
  }

  renderExplore() {
    const exploreGrid = document.getElementById('genreCardsGrid');
    if (!exploreGrid) return;

    const categories = [
      { name: 'Tamil Superhits', color: 'linear-gradient(135deg, #FF416C, #FF4B2B)', icon: 'fa-film' },
      { name: 'Electronic & Bass', color: 'linear-gradient(135deg, #1DB954, #00FFA3)', icon: 'fa-bolt' },
      { name: 'Lo-Fi Chillhop', color: 'linear-gradient(135deg, #4776E6, #8E54E9)', icon: 'fa-mug-saucer' },
      { name: 'Synthwave & Retro', color: 'linear-gradient(135deg, #FF6B35, #F9D423)', icon: 'fa-gamepad' },
      { name: 'Podcasts & Mindset', color: 'linear-gradient(135deg, #F9D423, #FF4E50)', icon: 'fa-microphone' },
      { name: 'Acoustic & Folk', color: 'linear-gradient(135deg, #11998e, #38ef7d)', icon: 'fa-guitar' },
      { name: 'Ambient Soundscapes', color: 'linear-gradient(135deg, #8A2387, #E94057)', icon: 'fa-water' }
    ];

    exploreGrid.innerHTML = categories.map(cat => `
      <div class="genre-card" style="background: ${cat.color};" onclick="window.t2gApp.filterByGenre('${cat.name.split(' ')[0]}')">
        <h3>${cat.name}</h3>
        <i class="fa-solid ${cat.icon}"></i>
      </div>
    `).join('');
  }

  filterByGenre(genre) {
    if (genre.toLowerCase() === 'tamil') {
      this.navigateToView('radio');
      const tamilPill = document.querySelector('#radioFilterBar .filter-pill[data-radio-filter="tamil"]');
      if (tamilPill) tamilPill.click();
      return;
    }

    this.activeFilter = genre;
    document.querySelectorAll('.genre-pill-bar .filter-pill').forEach(pill => {
      if (pill.dataset.filter.toLowerCase() === genre.toLowerCase()) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
    this.navigateToView('home');
    this.renderFilteredHome();
  }

  renderPodcasts() {
    const podcastGrid = document.getElementById('podcastCardsGrid');
    if (!podcastGrid) return;

    const podcasts = this.tracks.filter(t => t.genre === 'Podcast');
    podcastGrid.innerHTML = podcasts.map((p) => {
      const idx = this.tracks.indexOf(p);
      return `
      <div class="music-card" onclick="window.t2gApp.playTrack(${idx})">
        <div class="card-img-box">
          <img src="${p.cover || 'ticket2grow_app_icon.svg'}" alt="${p.title}">
          <button class="card-play-fab"><i class="fa-solid fa-play"></i></button>
        </div>
        <h4 class="card-title">${p.title}</h4>
        <p class="card-subtitle">${p.artist}</p>
      </div>
    `;
    }).join('');
  }

  renderCustomPlaylists() {
    const list = document.getElementById('customPlaylistsList');
    if (!list) return;

    list.innerHTML = this.customPlaylists.map(pl => `
      <button class="nav-item" style="padding:6px 12px;font-size:0.82rem;" onclick="window.t2gApp.showToast('Opened playlist: ${pl.name}')">
        <i class="fa-solid fa-list-check text-green" style="font-size:0.9rem;"></i>
        <span>${pl.name}</span>
      </button>
    `).join('');
  }

  updateActiveTableRows() {
    const curTrack = this.currentPlaylist[this.currentIndex];
    if (!curTrack) return;

    document.querySelectorAll('.track-row').forEach(row => {
      const rowId = row.dataset.id;
      const isCurrent = rowId === curTrack.id;
      row.classList.toggle('playing', isCurrent);
    });
  }

  formatTime(seconds) {
    if (!seconds || isNaN(seconds) || !isFinite(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-green"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.t2gApp = new Ticket2GrowApp();

  // Register PWA Service Worker for offline Android app support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('Ticket2Grow Service Worker active:', reg.scope);
    }).catch((err) => {
      console.log('Service Worker registration skipped:', err);
    });
  }
});
