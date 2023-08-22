import styles from "./index.module.css";
const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <img
              className={styles.threadsLogoIcon}
              alt=""
              src="/threads-logo.svg"
            />
            <div className={styles.threads}>threads</div>
          </div>
          <div className={styles.avatar}>
            <div className={styles.righInfos}>
              <img
                className={styles.logo2Icon}
                alt=""
                src="/threadsImages/logo-2.svg"
              />
              <img
                className={styles.hamburgerIcon}
                alt=""
                src="/threadsImages/hamburger.svg"
              />
            </div>
          </div>
        </div>
        <section className={styles.contentcontainer}>
          <div className={styles.userinfo}>
            <div className={styles.infos}>
              <img
                className={styles.avatarBigIcon}
                alt=""
                src="/avatar-big.svg"
              />
              <div className={styles.infos1}>
                <div className={styles.infos2}>
                  <b className={styles.threads}>Alisson Rochinski</b>
                  <div className={styles.infos3}>
                    <div className={styles.arochinski}>arochinski</div>
                    <button className={styles.threadsnetWrapper}>
                      <div className={styles.threadsnet}>threads.net</div>
                    </button>
                  </div>
                </div>
                <div className={styles.uiDesignerContainer}>
                  <p className={styles.uiDesigner}>
                    UI Designer | Let's redesign the world
                  </p>
                  <p className={styles.uiDesigner}>
                    alisson.rochinski@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.infos4}>
              <div className={styles.respostasECurtidas}>
                <div className={styles.seguidores}>2957 seguidores</div>
                <div className={styles.respostasECurtidasChild} />
                <div className={styles.seguidores}>rochinski.com</div>
              </div>
            </div>
          </div>
          <div className={styles.feed1}>
            <div className={styles.threadinput}>
              <div className={styles.thread}>
                <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
              </div>
              <div className={styles.infosActions}>
                <div className={styles.infos5}>
                  <input
                    className={styles.shareSomethingCool}
                    type="text"
                    placeholder="Share something cool today"
                  />
                </div>
                <div className={styles.actions}>
                  <button className={styles.actions1}>
                    <img className={styles.sendIcon} alt="" src="/send.svg" />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar2.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.threads}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.temporDolorProident}>
                      I’ve been exploring ways of setting up variables in Figma
                      if you have two different sets of global colours for light
                      and dark themes with multiple brands. If you want to learn
                      more about it, DM me, please
                    </div>
                  </div>
                  <div className={styles.actions2}>
                    <img className={styles.likeIcon} alt="" src="/like3.svg" />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>7 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar3.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.threads}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.temporDolorProident}>
                      guys, just see that now we have a "Save for Later" I've
                      been waiting for this so much
                    </div>
                  </div>
                  <div className={styles.actions2}>
                    <img className={styles.likeIcon} alt="" src="/like3.svg" />
                  </div>
                  <div className={styles.reactions1}>
                    <div className={styles.seguidores}>2 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar4.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.threads}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.temporDolorProident}>
                      Hold onto your seats, folks! The new iPhone is coming in
                      hot, ready to rock our world! Imagine the stunning photos
                      and videos I'll capture with this beauty! 📸💥
                      #BringItOnNewiPhone #BeyondExcited
                    </div>
                  </div>
                  <div className={styles.actions2}>
                    <img className={styles.likeIcon} alt="" src="/like3.svg" />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>16 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar5.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.threads}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.temporDolorProident}>
                      guys, just see that now we have a "Save for Later" I've
                      been waiting for this so much
                    </div>
                  </div>
                  <div className={styles.actions2}>
                    <img className={styles.likeIcon} alt="" src="/like3.svg" />
                  </div>
                  <div className={styles.reactions1}>
                    <div className={styles.seguidores}>2 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar6.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.threads}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.temporDolorProident}>
                      Hold onto your seats, folks! The new iPhone is coming in
                      hot, ready to rock our world! Imagine the stunning photos
                      and videos I'll capture with this beauty! 📸💥
                      #BringItOnNewiPhone #BeyondExcited
                    </div>
                  </div>
                  <div className={styles.actions2}>
                    <img className={styles.likeIcon} alt="" src="/like3.svg" />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>16 Likes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infos6}>
            <div className={styles.infos5}>
              <div className={styles.headingInfos}>
                <h2 className={styles.trendingTopics}>Trending Topics</h2>
                <img
                  className={styles.settingsIcon}
                  alt=""
                  src="/settings.svg"
                />
              </div>
            </div>
            <div className={styles.treanding}>
              <div className={styles.topic}>
                <div className={styles.design}>Design</div>
                <div className={styles.threadsdesktop}>ThreadsDesktop</div>
                <div className={styles.threads}>123.9k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>movies and series</div>
                <div className={styles.threadsdesktop}>
                  Spider-Man: Across the Spider-Verse
                </div>
                <div className={styles.threads}>93.4k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>tech</div>
                <div className={styles.threadsdesktop}>iPhone 15</div>
                <div className={styles.threads}>85.2k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>games</div>
                <div className={styles.threadsdesktop}>Riot Games</div>
                <div className={styles.threads}>71.9k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>Design</div>
                <div className={styles.threadsdesktop}>#Minimalism</div>
                <div className={styles.threads}>69.1k threads</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Content;
