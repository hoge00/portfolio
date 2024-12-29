
<template>
  <v-app>
    <v-main style="background-color: #000000;">
      <!-- ヘッダーセクション -->
      <div class="header-section">
        <v-container class="header-content">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <div class="profile-wrapper">
                <v-avatar 
    class="profile-avatar mb-4"
    :size="avatarSize"
  >
    <nuxt-img 
      src="/hoge.png" 
      alt="アイコン"
      :width="avatarSize"
      :height="avatarSize"
      loading="lazy"
    />
  </v-avatar>
                <h1 :class="titleClass" class="font-weight-bold text-grey-lighten-2 mb-2">
                  hoge
                </h1>
                <p :class="subtitleClass" class="text-grey-darken-1 mb-6">
                  エンジニア
                </p>
                <v-row justify="center" no-gutters>
                  <v-col cols="12" sm="auto" class="px-2 mb-3">
                    <v-btn
                      href="https://github.com/hoge00"
                      target="_blank"
                      class="social-btn"
                      block
                      :min-width="buttonMinWidth"
                    >
                      <v-icon start>mdi-github</v-icon>
                      GitHub
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="auto" class="px-2 mb-3">
                    <v-btn
                      href="https://x.com/testhoge00"
                      target="_blank"
                      class="social-btn"
                      block
                      :min-width="buttonMinWidth"
                    >
                      <v-icon start>mdi-twitter</v-icon>
                      X
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- 趣味セクション -->
      <section class="hobbies-section">
        <v-container>
          <h2 :class="sectionTitleClass" class="section-title text-center mb-8">
            趣味
          </h2>
          <v-row justify="center">
            <v-col 
              v-for="hobby in hobbies" 
              :key="hobby.title"
              cols="12" 
              sm="6" 
              md="4" 
              class="pa-3"
            >
              <div class="hobby-card">
                <div class="icon-circle">
                  <v-icon :size="iconSize">mdi-{{ hobby.icon }}</v-icon>
                </div>
                <h3 class="hobby-title">{{ hobby.title }}</h3>
                <p class="hobby-description">{{ hobby.description }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- フッター -->
      <v-footer class="footer" app>
        <v-container>
          <p class="copyright text-center mb-0">© 2024 hoge. All rights reserved.</p>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobile: false,
      hobbies: [
        {
          icon: 'code-tags',
          title: 'プログラミング',
          description: '個人開発'
        },
        {
          icon: 'gamepad-variant',
          title: 'ゲーム',
          description: '原神、ゼンレスゾーンゼロ、崩壊スターレイル、ブルーアーカイブ、鳴潮、雀魂 etc'
        },
        {
          icon: 'guitar-acoustic',
          title: 'ギター',
          description: 'アコースティック＆エレキ'
        }
      ]
    }
  },
  computed: {
    avatarSize() {
      return this.isMobile ? 120 : 180
    },
    titleClass() {
      return this.isMobile ? 'text-h4' : 'text-h2'
    },
    subtitleClass() {
      return this.isMobile ? 'text-subtitle-1' : 'text-h6'
    },
    sectionTitleClass() {
      return this.isMobile ? 'text-h4' : 'text-h3'
    },
    buttonMinWidth() {
      return this.isMobile ? undefined : '150'
    },
    iconSize() {
      return this.isMobile ? 24 : 32
    }
  },
  mounted() {
    // クライアントサイドでのみ実行
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 600
    }
  }
};
</script>

<style scoped>
/* ヘッダーセクション */
.header-section {
  background-color: #000000;
  position: relative;
  padding: 3rem 0;
  border-bottom: 3px solid #FF0000;
}

.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-avatar {
  border: 4px solid #FF0000;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
}

.social-btn {
  background-color: transparent !important;
  border: 2px solid #FF0000 !important;
  color: #FF0000 !important;
  height: 48px !important;
  letter-spacing: 0.5px !important;
  text-transform: none !important;
  transition: all 0.3s ease !important;
}

.social-btn:hover {
  background-color: #FF0000 !important;
  color: #1A1A1A !important;
}

.social-btn:hover .v-icon {
  color: #1A1A1A !important;
}

/* 趣味セクション */
.hobbies-section {
  padding: 4rem 0;
}

.section-title {
  color: #FF0000;
  font-weight: bold;
}

.hobby-card {
  background-color: #000000;
  border: 2px solid #FF0000;
  border-radius: 16px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background-color: #FF0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

@media (min-width: 600px) {
  .icon-circle {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
  }
}

.icon-circle .v-icon {
  color: #000000;
}

.hobby-title {
  color: #FF0000;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.hobby-description {
  color: #666666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
}

.hobby-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(255, 0, 0, 0.2);
}

/* フッター */
.footer {
  background-color: #000000 !important;
  border-top: 1px solid #FF0000;
}

.copyright {
  color: #FF0000;
}

/* レスポンシブ調整 */
@media (max-width: 599px) {
  .header-section {
    padding: 2rem 0;
  }
  
  .hobbies-section {
    padding: 2rem 0;
  }
  
  .hobby-card {
    padding: 1.25rem;
  }
  
  .hobby-title {
    font-size: 1.1rem;
  }
}
</style>
