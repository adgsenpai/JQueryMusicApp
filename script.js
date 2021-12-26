jQuery(function($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/mythium/',
            extension = '',
            tracks = [{
                    "name": "Godspeed",
                    "artist": "Bringyourknapsack",
                    "cover": "https://i1.sndcdn.com/artworks-000243646858-e60l92-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/godspeed.mp3?raw=true",
                    "url": "https://soundcloud.com/bringyourknapsack/godspeed",
                    "favorited": "false"
                },
                {
                    "name": "Life Of A Hentai Dude",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/life-of-a-hentai-dude.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/life-of-a-hentai-dude",
                    "favorited": "false"
                },
                {
                    "name": "Amagami Ss Nakata Sae Ed",
                    "artist": "Bafaloon",
                    "cover": "https://i1.sndcdn.com/artworks-000058281299-wgdtoh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/amagami-ss-nakata-sae-ed.mp3?raw=true",
                    "url": "https://soundcloud.com/bafaloon/amagami-ss-nakata-sae-ed",
                    "favorited": "false"
                },
                {
                    "name": "Going On",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/going-on.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/going-on",
                    "favorited": "false"
                },
                {
                    "name": "Heisoku No Kakudai",
                    "artist": "User 909844975",
                    "cover": "https://i1.sndcdn.com/artworks-49w79Us6tJS0lUMU-AfZstw-large.png",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/heisoku-no-kakudai.mp3?raw=true",
                    "url": "https://soundcloud.com/user-909844975/heisoku-no-kakudai",
                    "favorited": "false"
                },
                {
                    "name": "Um Can We Communicate",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-dbqocpcCeXy44Hyh-XXesUQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/um-can-we-communicate.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/um-can-we-communicate",
                    "favorited": "false"
                },
                {
                    "name": "Hidden Feelings",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-000194644923-58xrnf-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hidden-feelings.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/hidden-feelings",
                    "favorited": "false"
                },
                {
                    "name": "M 9 Revision Magnification Of",
                    "artist": "User 909844975",
                    "cover": "https://i1.sndcdn.com/avatars-e0dxRuonWSemq9m1-zvoylw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/m-9-revision-magnification-of.mp3?raw=true",
                    "url": "https://soundcloud.com/user-909844975/m-9-revision-magnification-of",
                    "favorited": "false"
                },
                {
                    "name": "Low Roar Anything You Needost Death Strandingambient Door Remix",
                    "artist": "User 137994743",
                    "cover": "https://i1.sndcdn.com/artworks-000638502712-w0e53y-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/low-roar-anything-you-needost-death-strandingambient-door-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/user-137994743/low-roar-anything-you-needost-death-strandingambient-door-remix",
                    "favorited": "false"
                },
                {
                    "name": "Virtual",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-DHSEEz9VvGadAVjB-TngqYw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/virtual.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/virtual",
                    "favorited": "false"
                },
                {
                    "name": "Magnolia Flip Prodbceinstein",
                    "artist": "B C Einstein",
                    "cover": "https://i1.sndcdn.com/artworks-000313062282-h6s9yz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/magnolia-flip-prodbceinstein.mp3?raw=true",
                    "url": "https://soundcloud.com/b-c-einstein/magnolia-flip-prodbceinstein",
                    "favorited": "false"
                },
                {
                    "name": "Strangers Rmx",
                    "artist": "Duumu",
                    "cover": "https://i1.sndcdn.com/artworks-000225104292-mmqdas-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/strangers-rmx.mp3?raw=true",
                    "url": "https://soundcloud.com/duumu/strangers-rmx",
                    "favorited": "false"
                },
                {
                    "name": "Whole Lotta Schemin W Soudiere",
                    "artist": "Inteus666",
                    "cover": "https://i1.sndcdn.com/artworks-000570131744-7tgcbg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/whole-lotta-schemin-w-soudiere.mp3?raw=true",
                    "url": "https://soundcloud.com/inteus666/whole-lotta-schemin-w-soudiere",
                    "favorited": "false"
                },
                {
                    "name": "Very Best One",
                    "artist": "Omniboi",
                    "cover": "https://i1.sndcdn.com/artworks-000302386110-giuufa-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/very-best-one.mp3?raw=true",
                    "url": "https://soundcloud.com/omniboi/very-best-one",
                    "favorited": "false"
                },
                {
                    "name": "Smilee",
                    "artist": "Speaksantino",
                    "cover": "https://i1.sndcdn.com/artworks-000187523947-6e0q5x-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/smilee.mp3?raw=true",
                    "url": "https://soundcloud.com/speaksantino/smilee",
                    "favorited": "false"
                },
                {
                    "name": "Its So Hard To Make Music Rn I Just Wanna Sleep",
                    "artist": "Hyy 3",
                    "cover": "https://i1.sndcdn.com/artworks-000120557150-yk59id-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/its-so-hard-to-make-music-rn-i-just-wanna-sleep.mp3?raw=true",
                    "url": "https://soundcloud.com/hyy-3/its-so-hard-to-make-music-rn-i-just-wanna-sleep",
                    "favorited": "false"
                },
                {
                    "name": "19960914A",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-000384542049-8zcm3o-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/19960914a.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/19960914a",
                    "favorited": "false"
                },
                {
                    "name": "Mimikyu Groove",
                    "artist": "Immeeyo",
                    "cover": "https://i1.sndcdn.com/artworks-000385868826-w09jsq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mimikyu-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/immeeyo/mimikyu-groove",
                    "favorited": "false"
                },
                {
                    "name": "Yoshis Island Hip Hop Remix By",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-jfRWklxXn7cy1ppg-LEI5DQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yoshis-island-hip-hop-remix-by.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/yoshis-island-hip-hop-remix-by",
                    "favorited": "false"
                },
                {
                    "name": "Tekken 7 Infinite Azuremoonsiders 1Stconsole Soundtrack 7 7 1",
                    "artist": "Dylan Leach 9",
                    "cover": "https://i1.sndcdn.com/avatars-000145236506-o8s0ys-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tekken-7-infinite-azuremoonsiders-1stconsole-soundtrack-7-7-1.mp3?raw=true",
                    "url": "https://soundcloud.com/dylan-leach-9/tekken-7-infinite-azuremoonsiders-1stconsole-soundtrack-7-7-1",
                    "favorited": "false"
                },
                {
                    "name": "Carnal Desire",
                    "artist": "Amacchi",
                    "cover": "https://i1.sndcdn.com/artworks-000589662557-rxokt1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/carnal-desire.mp3?raw=true",
                    "url": "https://soundcloud.com/amacchi/carnal-desire",
                    "favorited": "false"
                },
                {
                    "name": "Gone Villain",
                    "artist": "Noshow O_O",
                    "cover": "https://i1.sndcdn.com/artworks-000287798693-eg81pb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gone-villain.mp3?raw=true",
                    "url": "https://soundcloud.com/noshow-o_o/gone-villain",
                    "favorited": "false"
                },
                {
                    "name": "Dear My Mother",
                    "artist": "Im_Naku",
                    "cover": "https://i1.sndcdn.com/artworks-2vQHhy9bWdEKcB9Y-tO8E8Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dear-my-mother.mp3?raw=true",
                    "url": "https://soundcloud.com/im_naku/dear-my-mother",
                    "favorited": "false"
                },
                {
                    "name": "Ameba Flavors Hues",
                    "artist": "Flayvors",
                    "cover": "https://i1.sndcdn.com/artworks-000194092015-a3dme8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ameba-flavors-hues.mp3?raw=true",
                    "url": "https://soundcloud.com/flayvors/ameba-flavors-hues",
                    "favorited": "false"
                },
                {
                    "name": "Love Taste Fanservice Mix Moe Shop X Jamie Paige X Shiki Prod By Flacko No Rap Edited",
                    "artist": "Beanjamoono",
                    "cover": "https://i1.sndcdn.com/artworks-000172243329-t22crw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/love-taste-fanservice-mix-moe-shop-x-jamie-paige-x-shiki-prod-by-flacko-no-rap-edited.mp3?raw=true",
                    "url": "https://soundcloud.com/beanjamoono/love-taste-fanservice-mix-moe-shop-x-jamie-paige-x-shiki-prod-by-flacko-no-rap-edited",
                    "favorited": "false"
                },
                {
                    "name": "3 6 Destruction",
                    "artist": "Pharmasix",
                    "cover": "https://i1.sndcdn.com/artworks-sFzEzxjzOzDMEcrh-4PtSNQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/3-6-destruction.mp3?raw=true",
                    "url": "https://soundcloud.com/pharmasix/3-6-destruction",
                    "favorited": "false"
                },
                {
                    "name": "Tuyu Hide And Seek By Myself",
                    "artist": "2Mixim2",
                    "cover": "https://i1.sndcdn.com/artworks-kyI0YEmghzYDyygJ-Qod2Vg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tuyu-hide-and-seek-by-myself.mp3?raw=true",
                    "url": "https://soundcloud.com/2mixim2/tuyu-hide-and-seek-by-myself",
                    "favorited": "false"
                },
                {
                    "name": "Wap",
                    "artist": "Chordio",
                    "cover": "https://i1.sndcdn.com/artworks-iCpuinTI2fEXuRBa-5rfbgA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wap.mp3?raw=true",
                    "url": "https://soundcloud.com/chordio/wap",
                    "favorited": "false"
                },
                {
                    "name": "Gotta Get This Money",
                    "artist": "Skuccimusic",
                    "cover": "https://i1.sndcdn.com/artworks-000254984042-ola88b-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gotta-get-this-money.mp3?raw=true",
                    "url": "https://soundcloud.com/skuccimusic/gotta-get-this-money",
                    "favorited": "false"
                },
                {
                    "name": "Tanuki Babybaby Fc Ep Free",
                    "artist": "Tanukimusic",
                    "cover": "https://i1.sndcdn.com/artworks-000094343117-ys9nju-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tanuki-babybaby-fc-ep-free.mp3?raw=true",
                    "url": "https://soundcloud.com/tanukimusic/tanuki-babybaby-fc-ep-free",
                    "favorited": "false"
                },
                {
                    "name": "Monochrome",
                    "artist": "Simeugosto",
                    "cover": "https://i1.sndcdn.com/artworks-000510922230-7heqzx-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/monochrome.mp3?raw=true",
                    "url": "https://soundcloud.com/simeugosto/monochrome",
                    "favorited": "false"
                },
                {
                    "name": "Good Morning Just Kiddin Remix",
                    "artist": "Maxfrostmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000349564353-cwq8uu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/good-morning-just-kiddin-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/maxfrostmusic/good-morning-just-kiddin-remix",
                    "favorited": "false"
                },
                {
                    "name": "Templime Timesurf Lockqe Remix",
                    "artist": "Lockqe",
                    "cover": "https://i1.sndcdn.com/artworks-SpCwz7QVx9jc105I-xzoNzw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/templime-timesurf-lockqe-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/lockqe/templime-timesurf-lockqe-remix",
                    "favorited": "false"
                },
                {
                    "name": "Sonder Winter Sun",
                    "artist": "Rorateam",
                    "cover": "https://i1.sndcdn.com/artworks-000200079564-5sja4s-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sonder-winter-sun.mp3?raw=true",
                    "url": "https://soundcloud.com/rorateam/sonder-winter-sun",
                    "favorited": "false"
                },
                {
                    "name": "Crossing Faygo V3",
                    "artist": "Fumiharo",
                    "cover": "https://i1.sndcdn.com/artworks-fE1KcxFzRQZBejGA-lUYQWw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crossing-faygo-v3.mp3?raw=true",
                    "url": "https://soundcloud.com/fumiharo/crossing-faygo-v3",
                    "favorited": "false"
                },
                {
                    "name": "24 Hour Cinderella Synthwavecyberpunk Remix",
                    "artist": "Astrolives",
                    "cover": "https://i1.sndcdn.com/artworks-2sxBMmJGxIMojJhW-5uNumw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/24-hour-cinderella-synthwavecyberpunk-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/astrolives/24-hour-cinderella-synthwavecyberpunk-remix",
                    "favorited": "false"
                },
                {
                    "name": "Lighters",
                    "artist": "Rinse Cycle",
                    "cover": "https://i1.sndcdn.com/artworks-000413602935-0s6i6t-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lighters.mp3?raw=true",
                    "url": "https://soundcloud.com/rinse-cycle/lighters",
                    "favorited": "false"
                },
                {
                    "name": "Feel The Pain",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-mmlH4chJSg3MD8Ky-5nbhxg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/feel-the-pain.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/feel-the-pain",
                    "favorited": "false"
                },
                {
                    "name": "Dense Pika Mitten Ep Kneaded Pains Out 21St September 2015",
                    "artist": "Denseandpika",
                    "cover": "https://i1.sndcdn.com/artworks-000129592473-ohi6le-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dense-pika-mitten-ep-kneaded-pains-out-21st-september-2015.mp3?raw=true",
                    "url": "https://soundcloud.com/denseandpika/dense-pika-mitten-ep-kneaded-pains-out-21st-september-2015",
                    "favorited": "false"
                },
                {
                    "name": "Super Carti 64",
                    "artist": "Itsyungtaji",
                    "cover": "https://i1.sndcdn.com/artworks-000673266376-gdk3m9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/super-carti-64.mp3?raw=true",
                    "url": "https://soundcloud.com/itsyungtaji/super-carti-64",
                    "favorited": "false"
                },
                {
                    "name": "Cors Moon Garden Ghost Data Remix",
                    "artist": "Ghost_Data",
                    "cover": "https://i1.sndcdn.com/artworks-000414158763-73zz95-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cors-moon-garden-ghost-data-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/ghost_data/cors-moon-garden-ghost-data-remix",
                    "favorited": "false"
                },
                {
                    "name": "Fresh Start Full Album",
                    "artist": "Gpklofi",
                    "cover": "https://i1.sndcdn.com/artworks-B1G1nTmGPphCDX7h-eMCfgA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fresh-start-full-album.mp3?raw=true",
                    "url": "https://soundcloud.com/gpklofi/fresh-start-full-album",
                    "favorited": "false"
                },
                {
                    "name": "Hero Of Time",
                    "artist": "Okamimusician",
                    "cover": "https://i1.sndcdn.com/artworks-000186708530-oohhbb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hero-of-time.mp3?raw=true",
                    "url": "https://soundcloud.com/okamimusician/hero-of-time",
                    "favorited": "false"
                },
                {
                    "name": "Uh Lala Monsieur Francais",
                    "artist": "Jazzyryuuji",
                    "cover": "https://i1.sndcdn.com/artworks-hVGcUkx7CFXzrxgM-RTiviw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/uh-lala-monsieur-francais.mp3?raw=true",
                    "url": "https://soundcloud.com/jazzyryuuji/uh-lala-monsieur-francais",
                    "favorited": "false"
                },
                {
                    "name": "Megamoe",
                    "artist": "Cutieconbini",
                    "cover": "https://i1.sndcdn.com/artworks-000172787201-ftlses-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/megamoe.mp3?raw=true",
                    "url": "https://soundcloud.com/cutieconbini/megamoe",
                    "favorited": "false"
                },
                {
                    "name": "Kage The Grave",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-4d7zX0t43fXEUibB-dY32Kw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kage-the-grave.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/kage-the-grave",
                    "favorited": "false"
                },
                {
                    "name": "Tenshi",
                    "artist": "Vxlkyrie Ost",
                    "cover": "https://i1.sndcdn.com/avatars-9Sh9og3WotQaowiS-vhn9ng-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tenshi.mp3?raw=true",
                    "url": "https://soundcloud.com/vxlkyrie-ost/tenshi",
                    "favorited": "false"
                },
                {
                    "name": "Chu Chu Yeah",
                    "artist": "Acestoaces",
                    "cover": "https://i1.sndcdn.com/artworks-000227514216-kq75fi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chu-chu-yeah.mp3?raw=true",
                    "url": "https://soundcloud.com/acestoaces/chu-chu-yeah",
                    "favorited": "false"
                },
                {
                    "name": "Busta Rhymes Goes To The Wii Shop Channel",
                    "artist": "Datmanovader",
                    "cover": "https://i1.sndcdn.com/artworks-000095325576-o5pveo-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/busta-rhymes-goes-to-the-wii-shop-channel.mp3?raw=true",
                    "url": "https://soundcloud.com/datmanovader/busta-rhymes-goes-to-the-wii-shop-channel",
                    "favorited": "false"
                },
                {
                    "name": "Citruskiss",
                    "artist": "Tofiemusic",
                    "cover": "https://i1.sndcdn.com/artworks-000477860427-dxdabg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/citruskiss.mp3?raw=true",
                    "url": "https://soundcloud.com/tofiemusic/citruskiss",
                    "favorited": "false"
                },
                {
                    "name": "02 Umi Ga Kikoeru",
                    "artist": "Minako_Love",
                    "cover": "https://i1.sndcdn.com/artworks-000116256229-t9zsxb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/02-umi-ga-kikoeru.mp3?raw=true",
                    "url": "https://soundcloud.com/minako_love/02-umi-ga-kikoeru",
                    "favorited": "false"
                },
                {
                    "name": "Again",
                    "artist": "Fruitsbasket1",
                    "cover": "https://i1.sndcdn.com/artworks-Lg2Ehkuy2PruN9Ia-JXUkrQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/again.mp3?raw=true",
                    "url": "https://soundcloud.com/fruitsbasket1/again",
                    "favorited": "false"
                },
                {
                    "name": "Wishingwell",
                    "artist": "Dampszn",
                    "cover": "https://i1.sndcdn.com/artworks-XG9MbzwIN4Xw3xnR-zivmxA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wishingwell.mp3?raw=true",
                    "url": "https://soundcloud.com/dampszn/wishingwell",
                    "favorited": "false"
                },
                {
                    "name": "Machine Girl Ghost",
                    "artist": "Dredcollective",
                    "cover": "https://i1.sndcdn.com/artworks-000071079799-i2axds-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/machine-girl-ghost.mp3?raw=true",
                    "url": "https://soundcloud.com/dredcollective/machine-girl-ghost",
                    "favorited": "false"
                },
                {
                    "name": "Mondaymornings",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-000253308857-4x3nqy-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mondaymornings.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/mondaymornings",
                    "favorited": "false"
                },
                {
                    "name": "Sittin Back",
                    "artist": "Palmtrees Shit",
                    "cover": "https://i1.sndcdn.com/artworks-000227782316-ggpem9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sittin-back.mp3?raw=true",
                    "url": "https://soundcloud.com/palmtrees-shit/sittin-back",
                    "favorited": "false"
                },
                {
                    "name": "Storm",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-jxO8AP0t1tLJSj9n-p6Xqig-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/storm.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/storm",
                    "favorited": "false"
                },
                {
                    "name": "Zebulon",
                    "artist": "Alltta",
                    "cover": "https://i1.sndcdn.com/artworks-000259861733-4q1hey-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/zebulon.mp3?raw=true",
                    "url": "https://soundcloud.com/alltta/zebulon",
                    "favorited": "false"
                },
                {
                    "name": "Basement Dwellersw Koibi",
                    "artist": "Chodeeater",
                    "cover": "https://i1.sndcdn.com/artworks-000223856055-ztvwe7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/basement-dwellersw-koibi.mp3?raw=true",
                    "url": "https://soundcloud.com/chodeeater/basement-dwellersw-koibi",
                    "favorited": "false"
                },
                {
                    "name": "Heavy Rainfall Predicted",
                    "artist": "Ohnowearefucked",
                    "cover": "https://i1.sndcdn.com/artworks-zuboBvAiwRpklykd-KJAYMA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/heavy-rainfall-predicted.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnowearefucked/heavy-rainfall-predicted",
                    "favorited": "false"
                },
                {
                    "name": "Chikatto Chika Chika",
                    "artist": "Bglm0B",
                    "cover": "https://i1.sndcdn.com/artworks-000482619828-pz002j-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chikatto-chika-chika.mp3?raw=true",
                    "url": "https://soundcloud.com/bglm0b/chikatto-chika-chika",
                    "favorited": "false"
                },
                {
                    "name": "Styrofoam",
                    "artist": "Ezzyland",
                    "cover": "https://i1.sndcdn.com/artworks-000548496813-h2t4xc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/styrofoam.mp3?raw=true",
                    "url": "https://soundcloud.com/ezzyland/styrofoam",
                    "favorited": "false"
                },
                {
                    "name": "Chiptune What If I Have A Spaceship For Christophe K",
                    "artist": "Acclion",
                    "cover": "https://i1.sndcdn.com/artworks-ETnOXF3seHPZFzei-yCSrSg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chiptune-what-if-i-have-a-spaceship-for-christophe-k.mp3?raw=true",
                    "url": "https://soundcloud.com/acclion/chiptune-what-if-i-have-a-spaceship-for-christophe-k",
                    "favorited": "false"
                },
                {
                    "name": "Doin Mah Thangs",
                    "artist": "Kushfaceleanin",
                    "cover": "https://i1.sndcdn.com/artworks-000249130021-ipz95e-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/doin-mah-thangs.mp3?raw=true",
                    "url": "https://soundcloud.com/kushfaceleanin/doin-mah-thangs",
                    "favorited": "false"
                },
                {
                    "name": "Homeward",
                    "artist": "Muship9052",
                    "cover": "https://i1.sndcdn.com/artworks-tfWbTUY3AzGkp4Uv-yYYnrg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/homeward.mp3?raw=true",
                    "url": "https://soundcloud.com/muship9052/homeward",
                    "favorited": "false"
                },
                {
                    "name": "The Legendary Phoenix Chrono Ark Sound Track",
                    "artist": "Cosmogrph",
                    "cover": "https://i1.sndcdn.com/artworks-fIQh3KtCAb51PKTE-Hja2FQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-legendary-phoenix-chrono-ark-sound-track.mp3?raw=true",
                    "url": "https://soundcloud.com/cosmogrph/the-legendary-phoenix-chrono-ark-sound-track",
                    "favorited": "false"
                },
                {
                    "name": "Gooba 6Ix9Ine",
                    "artist": "Scumgang6Ix9Ine",
                    "cover": "https://i1.sndcdn.com/artworks-5XZOPzuRR4arOyLJ-iPlbHw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gooba-6ix9ine.mp3?raw=true",
                    "url": "https://soundcloud.com/scumgang6ix9ine/gooba-6ix9ine",
                    "favorited": "false"
                },
                {
                    "name": "Mezame Eurythmics Bermei",
                    "artist": "User 248092619",
                    "cover": "https://i1.sndcdn.com/artworks-dt4k9FiffkqypxvE-GtX6Hg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mezame-eurythmics-bermei.mp3?raw=true",
                    "url": "https://soundcloud.com/user-248092619/mezame-eurythmics-bermei",
                    "favorited": "false"
                },
                {
                    "name": "Whats A Gawr To A Gura",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-QHJ1yWRhyJvyHNWb-plTbhw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/whats-a-gawr-to-a-gura.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/whats-a-gawr-to-a-gura",
                    "favorited": "false"
                },
                {
                    "name": "Moe Maid Cafe Edens Apple",
                    "artist": "User_Naoki",
                    "cover": "https://i1.sndcdn.com/artworks-MNPfgrC42o1Ai7ac-B0ADbw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moe-maid-cafe-edens-apple.mp3?raw=true",
                    "url": "https://soundcloud.com/user_naoki/moe-maid-cafe-edens-apple",
                    "favorited": "false"
                },
                {
                    "name": "Let Em Have It W Grouf",
                    "artist": "Katebi",
                    "cover": "https://i1.sndcdn.com/artworks-kUVD0jTG1gQuio8u-6N2d7g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/let-em-have-it-w-grouf.mp3?raw=true",
                    "url": "https://soundcloud.com/katebi/let-em-have-it-w-grouf",
                    "favorited": "false"
                },
                {
                    "name": "Watame Lon Head Rap",
                    "artist": "Tsunomaki_Watame",
                    "cover": "https://i1.sndcdn.com/artworks-0upe4IQHzBX60DNB-zBAbeQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/watame-lon-head-rap.mp3?raw=true",
                    "url": "https://soundcloud.com/tsunomaki_watame/watame-lon-head-rap",
                    "favorited": "false"
                },
                {
                    "name": "Barefoot",
                    "artist": "Dxsbond",
                    "cover": "https://i1.sndcdn.com/artworks-teOCvysabqfcPmtN-8LGfQg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/barefoot.mp3?raw=true",
                    "url": "https://soundcloud.com/dxsbond/barefoot",
                    "favorited": "false"
                },
                {
                    "name": "Lmst",
                    "artist": "Ye55Ine",
                    "cover": "https://i1.sndcdn.com/artworks-000320904903-0ks43k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lmst.mp3?raw=true",
                    "url": "https://soundcloud.com/ye55ine/lmst",
                    "favorited": "false"
                },
                {
                    "name": "Die Antwoord Open The Door Feat Panther Modern",
                    "artist": "Narchbeats",
                    "cover": "https://i1.sndcdn.com/artworks-JzZHeLqg0GaX1nU9-1USH3A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/die-antwoord-open-the-door-feat-panther-modern.mp3?raw=true",
                    "url": "https://soundcloud.com/narchbeats/die-antwoord-open-the-door-feat-panther-modern",
                    "favorited": "false"
                },
                {
                    "name": "Fun Tonight",
                    "artist": "Macross 82 99",
                    "cover": "https://i1.sndcdn.com/artworks-000207353741-qmd1pg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fun-tonight.mp3?raw=true",
                    "url": "https://soundcloud.com/macross-82-99/fun-tonight",
                    "favorited": "false"
                },
                {
                    "name": "Vicetone Nevada",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000168845355-wnya6k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vicetone-nevada.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/vicetone-nevada",
                    "favorited": "false"
                },
                {
                    "name": "Lets Get Together",
                    "artist": "Sleepover Gossip",
                    "cover": "https://i1.sndcdn.com/artworks-000254513153-9rxky8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lets-get-together.mp3?raw=true",
                    "url": "https://soundcloud.com/sleepover-gossip/lets-get-together",
                    "favorited": "false"
                },
                {
                    "name": "Ride Or Die",
                    "artist": "Official Secret Souls",
                    "cover": "https://i1.sndcdn.com/artworks-fkzj25rs3fWzDVkj-Z7o31g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ride-or-die.mp3?raw=true",
                    "url": "https://soundcloud.com/official-secret-souls/ride-or-die",
                    "favorited": "false"
                },
                {
                    "name": "Atrata",
                    "artist": "Ukitazaworks",
                    "cover": "https://i1.sndcdn.com/artworks-SrhKxhyZzqJiKC6w-gXjG9Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/atrata.mp3?raw=true",
                    "url": "https://soundcloud.com/ukitazaworks/atrata",
                    "favorited": "false"
                },
                {
                    "name": "Xppt3Joakdif",
                    "artist": "Noble Reblended",
                    "cover": "https://i1.sndcdn.com/artworks-000259255499-c7l3nd-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/xppt3joakdif.mp3?raw=true",
                    "url": "https://soundcloud.com/noble-reblended/xppt3joakdif",
                    "favorited": "false"
                },
                {
                    "name": "Feint Snake Eyes Feat Coma",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000032069324-c5hbyp-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/feint-snake-eyes-feat-coma.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/feint-snake-eyes-feat-coma",
                    "favorited": "false"
                },
                {
                    "name": "Koven Yes Fox Stevenson Remix",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-dOlUaTfBya4uKNSi-48cRjA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/koven-yes-fox-stevenson-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/koven-yes-fox-stevenson-remix",
                    "favorited": "false"
                },
                {
                    "name": "Ephemeral",
                    "artist": "Miraimusics",
                    "cover": "https://i1.sndcdn.com/artworks-000151074431-aum8lc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ephemeral.mp3?raw=true",
                    "url": "https://soundcloud.com/miraimusics/ephemeral",
                    "favorited": "false"
                },
                {
                    "name": "Say So Doja Cat ",
                    "artist": "Hani Soleha 909662204",
                    "cover": "https://i1.sndcdn.com/artworks-AUMUwxbWXSTrnKXj-klJYPw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/say-so-doja-cat-",
                    "url": "https://soundcloud.com/hani-soleha-909662204/say-so-doja-cat-",
                    "favorited": "false"
                },
                {
                    "name": "Vibe Pt 3",
                    "artist": "Cookiee Kawaii",
                    "cover": "https://i1.sndcdn.com/artworks-KsAfl0kWxckcgxnk-OQRzqA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vibe-pt-3.mp3?raw=true",
                    "url": "https://soundcloud.com/cookiee-kawaii/vibe-pt-3",
                    "favorited": "false"
                },
                {
                    "name": "Jakkajump",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/artworks-XHRoMrxTyYEugGO9-yxmq8w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jakkajump.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/jakkajump",
                    "favorited": "false"
                },
                {
                    "name": "To Love Somebody",
                    "artist": "Ohayonanoja",
                    "cover": "https://i1.sndcdn.com/artworks-JqoZQLsfek8A3jHL-R0LrFg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/to-love-somebody.mp3?raw=true",
                    "url": "https://soundcloud.com/ohayonanoja/to-love-somebody",
                    "favorited": "false"
                },
                {
                    "name": "Wheredidugowtf",
                    "artist": "Ohnowearefucked",
                    "cover": "https://i1.sndcdn.com/artworks-41NzhMwmzOLJHEXQ-jPLWlA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wheredidugowtf.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnowearefucked/wheredidugowtf",
                    "favorited": "false"
                },
                {
                    "name": "Mamama Lap Pillow Kurosai",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-000249151831-xtph7x-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mamama-lap-pillow-kurosai.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/mamama-lap-pillow-kurosai",
                    "favorited": "false"
                },
                {
                    "name": "Conscious",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000220481439-hiwsut-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/conscious.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/conscious",
                    "favorited": "false"
                },
                {
                    "name": "Tsundere Twintails Underwater 1",
                    "artist": "Themoecafe",
                    "cover": "https://i1.sndcdn.com/artworks-000514006677-esm6ie-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tsundere-twintails-underwater-1.mp3?raw=true",
                    "url": "https://soundcloud.com/themoecafe/tsundere-twintails-underwater-1",
                    "favorited": "false"
                },
                {
                    "name": "Loading",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/loading.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/loading",
                    "favorited": "false"
                },
                {
                    "name": "Hiccup",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000200924413-z8sl14-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hiccup.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/hiccup",
                    "favorited": "false"
                },
                {
                    "name": "Renai Circulation",
                    "artist": "User 892096870",
                    "cover": "https://i1.sndcdn.com/artworks-000288582515-xqc768-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/renai-circulation.mp3?raw=true",
                    "url": "https://soundcloud.com/user-892096870/renai-circulation",
                    "favorited": "false"
                },
                {
                    "name": "Love Lies",
                    "artist": "Duumu",
                    "cover": "https://i1.sndcdn.com/artworks-000389499042-ovyf4v-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/love-lies.mp3?raw=true",
                    "url": "https://soundcloud.com/duumu/love-lies",
                    "favorited": "false"
                },
                {
                    "name": "If I Could Put A Beat In The Samurai Champloo Ost",
                    "artist": "Bknappbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000131241993-zh0r26-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/if-i-could-put-a-beat-in-the-samurai-champloo-ost.mp3?raw=true",
                    "url": "https://soundcloud.com/bknappbeats/if-i-could-put-a-beat-in-the-samurai-champloo-ost",
                    "favorited": "false"
                },
                {
                    "name": "Delicious",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-000587170445-j4hy82-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/delicious.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/delicious",
                    "favorited": "false"
                },
                {
                    "name": "Hard Bass School Narkotik Kal",
                    "artist": "Matrasss",
                    "cover": "https://i1.sndcdn.com/artworks-000029532559-m0dout-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hard-bass-school-narkotik-kal.mp3?raw=true",
                    "url": "https://soundcloud.com/matrasss/hard-bass-school-narkotik-kal",
                    "favorited": "false"
                },
                {
                    "name": "Anzious Martyr",
                    "artist": "Anzious",
                    "cover": "https://i1.sndcdn.com/artworks-000171314950-iqv4pq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anzious-martyr.mp3?raw=true",
                    "url": "https://soundcloud.com/anzious/anzious-martyr",
                    "favorited": "false"
                },
                {
                    "name": "Coco",
                    "artist": "Pewdie",
                    "cover": "https://i1.sndcdn.com/artworks-nGurOICHqKYgIuVS-qJJnHw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/coco.mp3?raw=true",
                    "url": "https://soundcloud.com/pewdie/coco",
                    "favorited": "false"
                },
                {
                    "name": "Jeku Love Me",
                    "artist": "Peachwind",
                    "cover": "https://i1.sndcdn.com/artworks-000194878290-e5t8vl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jeku-love-me.mp3?raw=true",
                    "url": "https://soundcloud.com/peachwind/jeku-love-me",
                    "favorited": "false"
                },
                {
                    "name": "Shindig New Friends",
                    "artist": "Nightowlcollective",
                    "cover": "https://i1.sndcdn.com/artworks-000192260166-jbiqph-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/shindig-new-friends.mp3?raw=true",
                    "url": "https://soundcloud.com/nightowlcollective/shindig-new-friends",
                    "favorited": "false"
                },
                {
                    "name": "Anywherermx",
                    "artist": "Duumu",
                    "cover": "https://i1.sndcdn.com/artworks-000264962324-oa31yl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anywherermx.mp3?raw=true",
                    "url": "https://soundcloud.com/duumu/anywherermx",
                    "favorited": "false"
                },
                {
                    "name": "Buster",
                    "artist": "Satorizoom",
                    "cover": "https://i1.sndcdn.com/artworks-000596824322-dcpvg0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/buster.mp3?raw=true",
                    "url": "https://soundcloud.com/satorizoom/buster",
                    "favorited": "false"
                },
                {
                    "name": "Satelitememories",
                    "artist": "Qutabire",
                    "cover": "https://i1.sndcdn.com/artworks-SJemwtTntKOkbBMz-4hFhUQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/satelitememories.mp3?raw=true",
                    "url": "https://soundcloud.com/qutabire/satelitememories",
                    "favorited": "false"
                },
                {
                    "name": "I Be That Mf W Dj Smokey Mr Sisco",
                    "artist": "Youngpirelli",
                    "cover": "https://i1.sndcdn.com/artworks-000675930679-mr3k48-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/i-be-that-mf-w-dj-smokey-mr-sisco.mp3?raw=true",
                    "url": "https://soundcloud.com/youngpirelli/i-be-that-mf-w-dj-smokey-mr-sisco",
                    "favorited": "false"
                },
                {
                    "name": "Sweets Have A Dream",
                    "artist": "User 836522875",
                    "cover": "https://i1.sndcdn.com/artworks-000634684645-bgxzd1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sweets-have-a-dream.mp3?raw=true",
                    "url": "https://soundcloud.com/user-836522875/sweets-have-a-dream",
                    "favorited": "false"
                },
                {
                    "name": "Mayoi Just Me Machiko Remix",
                    "artist": "Machikodubs",
                    "cover": "https://i1.sndcdn.com/artworks-D5gsjmFAmmI9BThe-1usyrg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mayoi-just-me-machiko-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/machikodubs/mayoi-just-me-machiko-remix",
                    "favorited": "false"
                },
                {
                    "name": "Aura Alan Walker Ghost From Death Stranding Timefallaktm Official",
                    "artist": "Aktmofficial",
                    "cover": "https://i1.sndcdn.com/artworks-000637593556-1k5ael-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aura-alan-walker-ghost-from-death-stranding-timefallaktm-official.mp3?raw=true",
                    "url": "https://soundcloud.com/aktmofficial/aura-alan-walker-ghost-from-death-stranding-timefallaktm-official",
                    "favorited": "false"
                },
                {
                    "name": "03 Close To You",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-oM9RB9vvUJk8yNrI-4g21tA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/03-close-to-you.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/03-close-to-you",
                    "favorited": "false"
                },
                {
                    "name": "Renai",
                    "artist": "Season Team",
                    "cover": "https://i1.sndcdn.com/artworks-000195389409-vnto2o-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/renai.mp3?raw=true",
                    "url": "https://soundcloud.com/season-team/renai",
                    "favorited": "false"
                },
                {
                    "name": "Christmas",
                    "artist": "User 304005133 494915018",
                    "cover": "https://i1.sndcdn.com/artworks-QJi1YmoySWJvW8yw-cXNAUw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/christmas.mp3?raw=true",
                    "url": "https://soundcloud.com/user-304005133-494915018/christmas",
                    "favorited": "false"
                },
                {
                    "name": "D28Lfmpfh95O",
                    "artist": "Mamomop",
                    "cover": "https://i1.sndcdn.com/artworks-j9zqM4zHgPpC39Ew-zUV3xw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/d28lfmpfh95o.mp3?raw=true",
                    "url": "https://soundcloud.com/mamomop/d28lfmpfh95o",
                    "favorited": "false"
                },
                {
                    "name": "Daybreak",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-000449384967-deot4z-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/daybreak.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/daybreak",
                    "favorited": "false"
                },
                {
                    "name": "Toradora Ed 1 Vanilla Salt",
                    "artist": "Clay Candra",
                    "cover": "https://i1.sndcdn.com/artworks-000147289644-tgr1pz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/toradora-ed-1-vanilla-salt.mp3?raw=true",
                    "url": "https://soundcloud.com/clay-candra/toradora-ed-1-vanilla-salt",
                    "favorited": "false"
                },
                {
                    "name": "Fold",
                    "artist": "User_Paperskies",
                    "cover": "https://i1.sndcdn.com/artworks-UQfYSg8SnINzUmbM-FAWwIg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fold.mp3?raw=true",
                    "url": "https://soundcloud.com/user_paperskies/fold",
                    "favorited": "false"
                },
                {
                    "name": "So She Says",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-zuboBvAiwRpklykd-KJAYMA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/so-she-says.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/so-she-says",
                    "favorited": "false"
                },
                {
                    "name": "Myonmyonmyonmyonmyonmyonmyon",
                    "artist": "Kirerererere",
                    "cover": "https://i1.sndcdn.com/artworks-000115520186-f8dtuq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/myonmyonmyonmyonmyonmyonmyon.mp3?raw=true",
                    "url": "https://soundcloud.com/kirerererere/myonmyonmyonmyonmyonmyonmyon",
                    "favorited": "false"
                },
                {
                    "name": "Batch 5",
                    "artist": "Minthaze",
                    "cover": "https://i1.sndcdn.com/artworks-M2ycZx0CtNqzT5FP-hDsSNA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/batch-5.mp3?raw=true",
                    "url": "https://soundcloud.com/minthaze/batch-5",
                    "favorited": "false"
                },
                {
                    "name": "Contaminate",
                    "artist": "Diadiadia1",
                    "cover": "https://i1.sndcdn.com/artworks-TMMkxdvk8avvLWit-Ly3zqg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/contaminate.mp3?raw=true",
                    "url": "https://soundcloud.com/diadiadia1/contaminate",
                    "favorited": "false"
                },
                {
                    "name": "Honey Moon",
                    "artist": "Arialdead",
                    "cover": "https://i1.sndcdn.com/artworks-YcYFg0Bz1sozbHnK-pJ9aIw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/honey-moon.mp3?raw=true",
                    "url": "https://soundcloud.com/arialdead/honey-moon",
                    "favorited": "false"
                },
                {
                    "name": "Feel",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/feel.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/feel",
                    "favorited": "false"
                },
                {
                    "name": "My Otachan Addiction Prod Djyungpurpleheart",
                    "artist": "Unitsun",
                    "cover": "https://i1.sndcdn.com/artworks-3AWhAd8Ct2YoepyG-DnysPQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/my-otachan-addiction-prod-djyungpurpleheart.mp3?raw=true",
                    "url": "https://soundcloud.com/unitsun/my-otachan-addiction-prod-djyungpurpleheart",
                    "favorited": "false"
                },
                {
                    "name": "Egor Muf Faraon Novyy Albom",
                    "artist": "Analog Sunset 733130590",
                    "cover": "https://i1.sndcdn.com/artworks-CpXrn0jlVMXhzUQN-NWQKaw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/egor-muf-faraon-novyy-albom.mp3?raw=true",
                    "url": "https://soundcloud.com/analog-sunset-733130590/egor-muf-faraon-novyy-albom",
                    "favorited": "false"
                },
                {
                    "name": "Dont Cry Dont Cry Dont Cry",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-000377274045-dzg2lg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dont-cry-dont-cry-dont-cry.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/dont-cry-dont-cry-dont-cry",
                    "favorited": "false"
                },
                {
                    "name": "Wake W Edp 1",
                    "artist": "Hakii",
                    "cover": "https://i1.sndcdn.com/artworks-1pHjG9TGHgilvyaO-W8hMsw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wake-w-edp-1.mp3?raw=true",
                    "url": "https://soundcloud.com/hakii/wake-w-edp-1",
                    "favorited": "false"
                },
                {
                    "name": "Aika",
                    "artist": "Moecollective",
                    "cover": "https://i1.sndcdn.com/artworks-000176383008-akrany-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aika.mp3?raw=true",
                    "url": "https://soundcloud.com/moecollective/aika",
                    "favorited": "false"
                },
                {
                    "name": "Gomamayo",
                    "artist": "Thinaticsystem",
                    "cover": "https://i1.sndcdn.com/artworks-pTznz1D3D44xc2kC-hCBaEg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gomamayo.mp3?raw=true",
                    "url": "https://soundcloud.com/thinaticsystem/gomamayo",
                    "favorited": "false"
                },
                {
                    "name": "Fresh Wkuuaden",
                    "artist": "Sakurauwu",
                    "cover": "https://i1.sndcdn.com/artworks-3OQnui90s1y53g3M-pnAlkg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fresh-wkuuaden.mp3?raw=true",
                    "url": "https://soundcloud.com/sakurauwu/fresh-wkuuaden",
                    "favorited": "false"
                },
                {
                    "name": "Chopin Nocturne Op 9 No 2",
                    "artist": "User 213331928",
                    "cover": "https://i1.sndcdn.com/artworks-LVMtdBRjebEMvRwi-lBXXTg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chopin-nocturne-op-9-no-2.mp3?raw=true",
                    "url": "https://soundcloud.com/user-213331928/chopin-nocturne-op-9-no-2",
                    "favorited": "false"
                },
                {
                    "name": "Butter Sugar Cream Bonus",
                    "artist": "Faded Audio",
                    "cover": "https://i1.sndcdn.com/artworks-000108276557-zl7e8q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/butter-sugar-cream-bonus.mp3?raw=true",
                    "url": "https://soundcloud.com/faded-audio/butter-sugar-cream-bonus",
                    "favorited": "false"
                },
                {
                    "name": "Groovy W Gvvp",
                    "artist": "Groufs",
                    "cover": "https://i1.sndcdn.com/artworks-000242077689-0ge7sy-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/groovy-w-gvvp.mp3?raw=true",
                    "url": "https://soundcloud.com/groufs/groovy-w-gvvp",
                    "favorited": "false"
                },
                {
                    "name": "Mr Robot In The Darkdjash",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000196894142-p7x4x9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mr-robot-in-the-darkdjash.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/mr-robot-in-the-darkdjash",
                    "favorited": "false"
                },
                {
                    "name": "Rogue Atlantic",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000094082263-ys5o2h-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/rogue-atlantic.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/rogue-atlantic",
                    "favorited": "false"
                },
                {
                    "name": "Summer Romance At Tokyos Bay",
                    "artist": "Latenightdreammusic",
                    "cover": "https://i1.sndcdn.com/artworks-dVBRVccXHqzbVMfX-lwytdQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/summer-romance-at-tokyos-bay.mp3?raw=true",
                    "url": "https://soundcloud.com/latenightdreammusic/summer-romance-at-tokyos-bay",
                    "favorited": "false"
                },
                {
                    "name": "Juice",
                    "artist": "Daphniphyllum",
                    "cover": "https://i1.sndcdn.com/artworks-000491723688-8jhd5d-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/juice.mp3?raw=true",
                    "url": "https://soundcloud.com/daphniphyllum/juice",
                    "favorited": "false"
                },
                {
                    "name": "Future Song By Adg",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000283151345-26v9p9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/future-song-by-adg.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/future-song-by-adg",
                    "favorited": "false"
                },
                {
                    "name": "D Real X Lavera Fantasy Ii",
                    "artist": "4Theconcept",
                    "cover": "https://i1.sndcdn.com/artworks-Fr3rFU6HG4KsbCL5-Mgn0tA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/d-real-x-lavera-fantasy-ii.mp3?raw=true",
                    "url": "https://soundcloud.com/4theconcept/d-real-x-lavera-fantasy-ii",
                    "favorited": "false"
                },
                {
                    "name": "New Game Op Full Sakura",
                    "artist": "User 44047632",
                    "cover": "https://i1.sndcdn.com/artworks-000175206243-x9tc39-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/new-game-op-full-sakura.mp3?raw=true",
                    "url": "https://soundcloud.com/user-44047632/new-game-op-full-sakura",
                    "favorited": "false"
                },
                {
                    "name": "Kevyaw The Mighty",
                    "artist": "Botwizzle",
                    "cover": "https://i1.sndcdn.com/artworks-oLubXU3KvwFTtLmU-qWziGg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kevyaw-the-mighty.mp3?raw=true",
                    "url": "https://soundcloud.com/botwizzle/kevyaw-the-mighty",
                    "favorited": "false"
                },
                {
                    "name": "Who Are You",
                    "artist": "Alex Oddly",
                    "cover": "https://i1.sndcdn.com/artworks-VvM2IpvEhGy1hjKf-pk5v6w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/who-are-you.mp3?raw=true",
                    "url": "https://soundcloud.com/alex-oddly/who-are-you",
                    "favorited": "false"
                },
                {
                    "name": "Move You Booty",
                    "artist": "Prodpoob",
                    "cover": "https://i1.sndcdn.com/artworks-v0J3dyPzqmlDRnT8-VSncOA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/move-you-booty.mp3?raw=true",
                    "url": "https://soundcloud.com/prodpoob/move-you-booty",
                    "favorited": "false"
                },
                {
                    "name": "Summer High Mariode Remix",
                    "artist": "Mari0De",
                    "cover": "https://i1.sndcdn.com/artworks-000406390113-p31cff-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/summer-high-mariode-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/mari0de/summer-high-mariode-remix",
                    "favorited": "false"
                },
                {
                    "name": "Woah W Factal",
                    "artist": "Hakii",
                    "cover": "https://i1.sndcdn.com/artworks-000296952969-039o7p-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/woah-w-factal.mp3?raw=true",
                    "url": "https://soundcloud.com/hakii/woah-w-factal",
                    "favorited": "false"
                },
                {
                    "name": "Waa",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/waa.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/waa",
                    "favorited": "false"
                },
                {
                    "name": "Tiny Session",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tiny-session.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/tiny-session",
                    "favorited": "false"
                },
                {
                    "name": "E Girls Are Ruining My Life W Savage Gap",
                    "artist": "Corpse_Husband",
                    "cover": "https://i1.sndcdn.com/artworks-koTWinojIz2FO7fY-TdLOhQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/e-girls-are-ruining-my-life-w-savage-gap.mp3?raw=true",
                    "url": "https://soundcloud.com/corpse_husband/e-girls-are-ruining-my-life-w-savage-gap",
                    "favorited": "false"
                },
                {
                    "name": "Cool Beats By Ash",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000241177528-hq1syn-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cool-beats-by-ash.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/cool-beats-by-ash",
                    "favorited": "false"
                },
                {
                    "name": "Deep House 5 Minute Scratch Mixfaydz",
                    "artist": "Djfaydz",
                    "cover": "https://i1.sndcdn.com/artworks-000221198882-4jjedv-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/deep-house-5-minute-scratch-mixfaydz.mp3?raw=true",
                    "url": "https://soundcloud.com/djfaydz/deep-house-5-minute-scratch-mixfaydz",
                    "favorited": "false"
                },
                {
                    "name": "Ayane Compulsive Nekoo",
                    "artist": "Puree Gem",
                    "cover": "https://i1.sndcdn.com/artworks-000513527754-1eumin-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ayane-compulsive-nekoo.mp3?raw=true",
                    "url": "https://soundcloud.com/puree-gem/ayane-compulsive-nekoo",
                    "favorited": "false"
                },
                {
                    "name": "Kiiish0T",
                    "artist": "Joshpanii",
                    "cover": "https://i1.sndcdn.com/artworks-000181812438-z1tg2l-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kiiish0t.mp3?raw=true",
                    "url": "https://soundcloud.com/joshpanii/kiiish0t",
                    "favorited": "false"
                },
                {
                    "name": "Hudson Lee Verzache Fix Me",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000234263160-8hjaad-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hudson-lee-verzache-fix-me.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/hudson-lee-verzache-fix-me",
                    "favorited": "false"
                },
                {
                    "name": "Chilli Will Summer Days",
                    "artist": "User 304005133 494915018",
                    "cover": "https://i1.sndcdn.com/artworks-meBjdZ9P2Em2LhQf-CKcQaQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chilli-will-summer-days.mp3?raw=true",
                    "url": "https://soundcloud.com/user-304005133-494915018/chilli-will-summer-days",
                    "favorited": "false"
                },
                {
                    "name": "Riding Horse Day",
                    "artist": "Creide13",
                    "cover": "https://i1.sndcdn.com/artworks-000347243751-dien5a-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/riding-horse-day.mp3?raw=true",
                    "url": "https://soundcloud.com/creide13/riding-horse-day",
                    "favorited": "false"
                },
                {
                    "name": "Demez Final Game",
                    "artist": "Gmafiarecords",
                    "cover": "https://i1.sndcdn.com/artworks-000652049854-y6hftc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/demez-final-game.mp3?raw=true",
                    "url": "https://soundcloud.com/gmafiarecords/demez-final-game",
                    "favorited": "false"
                },
                {
                    "name": "Evade From Outerspace Flight Day 89",
                    "artist": "Saturn_Sun",
                    "cover": "https://i1.sndcdn.com/artworks-000261434072-1djyn2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/evade-from-outerspace-flight-day-89.mp3?raw=true",
                    "url": "https://soundcloud.com/saturn_sun/evade-from-outerspace-flight-day-89",
                    "favorited": "false"
                },
                {
                    "name": "01 Koi No Orchestra",
                    "artist": "Leo M Marchadier",
                    "cover": "https://i1.sndcdn.com/artworks-000026319706-zb4oq7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/01-koi-no-orchestra.mp3?raw=true",
                    "url": "https://soundcloud.com/leo-m-marchadier/01-koi-no-orchestra",
                    "favorited": "false"
                },
                {
                    "name": "Best Epic Super Smash Bros Trap Hip Hop Beat Remix Mix",
                    "artist": "Thunderxero360",
                    "cover": "https://i1.sndcdn.com/artworks-000108687066-35eci6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/best-epic-super-smash-bros-trap-hip-hop-beat-remix-mix.mp3?raw=true",
                    "url": "https://soundcloud.com/thunderxero360/best-epic-super-smash-bros-trap-hip-hop-beat-remix-mix",
                    "favorited": "false"
                },
                {
                    "name": "Fashionweek",
                    "artist": "Itsdifferent",
                    "cover": "https://i1.sndcdn.com/artworks-000228561244-2054vr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fashionweek.mp3?raw=true",
                    "url": "https://soundcloud.com/itsdifferent/fashionweek",
                    "favorited": "false"
                },
                {
                    "name": "Resident Evil Outbreak Main",
                    "artist": "Vinsfrog",
                    "cover": "https://i1.sndcdn.com/artworks-000017218472-7p9vpo-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/resident-evil-outbreak-main.mp3?raw=true",
                    "url": "https://soundcloud.com/vinsfrog/resident-evil-outbreak-main",
                    "favorited": "false"
                },
                {
                    "name": "6Ix9Ineandbelledelphineremix",
                    "artist": "Smalitz",
                    "cover": "https://i1.sndcdn.com/artworks-yMLzrjKe587n2EgE-UnUKNw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/6ix9ineandbelledelphineremix.mp3?raw=true",
                    "url": "https://soundcloud.com/smalitz/6ix9ineandbelledelphineremix",
                    "favorited": "false"
                },
                {
                    "name": "Lost In Circles",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000241177006-mqorq1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lost-in-circles.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/lost-in-circles",
                    "favorited": "false"
                },
                {
                    "name": "Neon Genesis Evangelion Ost Thanatos",
                    "artist": "Prince Luigi",
                    "cover": "https://i1.sndcdn.com/artworks-000098729169-qv7qfi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/neon-genesis-evangelion-ost-thanatos.mp3?raw=true",
                    "url": "https://soundcloud.com/prince-luigi/neon-genesis-evangelion-ost-thanatos",
                    "favorited": "false"
                },
                {
                    "name": "Moon_Bay83",
                    "artist": "Riverwave",
                    "cover": "https://i1.sndcdn.com/artworks-XuCUbEb5FAEOpFY7-Siycyw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moon_bay83.mp3?raw=true",
                    "url": "https://soundcloud.com/riverwave/moon_bay83",
                    "favorited": "false"
                },
                {
                    "name": "Zef Goema Megamix",
                    "artist": "Narchbeats",
                    "cover": "https://i1.sndcdn.com/artworks-6eJoyrUuylyy34Ui-qW7fNA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/zef-goema-megamix.mp3?raw=true",
                    "url": "https://soundcloud.com/narchbeats/zef-goema-megamix",
                    "favorited": "false"
                },
                {
                    "name": "East",
                    "artist": "Ritchrd",
                    "cover": "https://i1.sndcdn.com/artworks-000032903998-02ck6j-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/east.mp3?raw=true",
                    "url": "https://soundcloud.com/ritchrd/east",
                    "favorited": "false"
                },
                {
                    "name": "Corporate Japan",
                    "artist": "Birocratic",
                    "cover": "https://i1.sndcdn.com/artworks-000213432402-uwbjxw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/corporate-japan.mp3?raw=true",
                    "url": "https://soundcloud.com/birocratic/corporate-japan",
                    "favorited": "false"
                },
                {
                    "name": "Ebisu Nights Master",
                    "artist": "Barbwalters",
                    "cover": "https://i1.sndcdn.com/artworks-TZthEDJZB7NnFLI4-SSSiRg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ebisu-nights-master.mp3?raw=true",
                    "url": "https://soundcloud.com/barbwalters/ebisu-nights-master",
                    "favorited": "false"
                },
                {
                    "name": "Speedrun",
                    "artist": "User 422796732",
                    "cover": "https://i1.sndcdn.com/artworks-LcEXl6T5Hfhwr3kZ-yOAyOQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/speedrun.mp3?raw=true",
                    "url": "https://soundcloud.com/user-422796732/speedrun",
                    "favorited": "false"
                },
                {
                    "name": "The Medic Hold Up",
                    "artist": "Themedic905",
                    "cover": "https://i1.sndcdn.com/artworks-000191654499-g3hl0f-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-medic-hold-up.mp3?raw=true",
                    "url": "https://soundcloud.com/themedic905/the-medic-hold-up",
                    "favorited": "false"
                },
                {
                    "name": "High",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/high.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/high",
                    "favorited": "false"
                },
                {
                    "name": "Gent Jawns Reconcile",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000306937326-uyz04e-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gent-jawns-reconcile.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/gent-jawns-reconcile",
                    "favorited": "false"
                },
                {
                    "name": "Tfw_2016",
                    "artist": "Tree_Palm",
                    "cover": "https://i1.sndcdn.com/artworks-6TUYqXVZA0VOyh1G-Gi1LwA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tfw_2016.mp3?raw=true",
                    "url": "https://soundcloud.com/tree_palm/tfw_2016",
                    "favorited": "false"
                },
                {
                    "name": "Im On A Move",
                    "artist": "Berrymane",
                    "cover": "https://i1.sndcdn.com/artworks-000516075189-oxppgj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/im-on-a-move.mp3?raw=true",
                    "url": "https://soundcloud.com/berrymane/im-on-a-move",
                    "favorited": "false"
                },
                {
                    "name": "Ily",
                    "artist": "Rogiermuller",
                    "cover": "https://i1.sndcdn.com/artworks-000211941373-9tzdcd-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ily.mp3?raw=true",
                    "url": "https://soundcloud.com/rogiermuller/ily",
                    "favorited": "false"
                },
                {
                    "name": "Marshmello Alone",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000162687343-n94y86-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/marshmello-alone.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/marshmello-alone",
                    "favorited": "false"
                },
                {
                    "name": "Aura",
                    "artist": "Heyitsmegee",
                    "cover": "https://i1.sndcdn.com/artworks-000236269869-pblgvw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aura.mp3?raw=true",
                    "url": "https://soundcloud.com/heyitsmegee/aura",
                    "favorited": "false"
                },
                {
                    "name": "Martingarrix Summerdays Haywyreremix",
                    "artist": "Haywyre",
                    "cover": "https://i1.sndcdn.com/artworks-000552065085-lm2ls6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/martingarrix-summerdays-haywyreremix.mp3?raw=true",
                    "url": "https://soundcloud.com/haywyre/martingarrix-summerdays-haywyreremix",
                    "favorited": "false"
                },
                {
                    "name": "Tofuku Taipein3Kos Remix",
                    "artist": "Korewa_N3Ko",
                    "cover": "https://i1.sndcdn.com/artworks-000183241461-9u64di-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tofuku-taipein3kos-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/korewa_n3ko/tofuku-taipein3kos-remix",
                    "favorited": "false"
                },
                {
                    "name": "Mxtixn X Backwood Boy Pour Dat Phonk",
                    "artist": "Daru 4",
                    "cover": "https://i1.sndcdn.com/artworks-000326492166-h486ed-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mxtixn-x-backwood-boy-pour-dat-phonk.mp3?raw=true",
                    "url": "https://soundcloud.com/daru-4/mxtixn-x-backwood-boy-pour-dat-phonk",
                    "favorited": "false"
                },
                {
                    "name": "Shepherdess She2016",
                    "artist": "Porter Robinson",
                    "cover": "https://i1.sndcdn.com/artworks-xS7QKvYI98p5A4jo-5uLy2Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/shepherdess-she2016.mp3?raw=true",
                    "url": "https://soundcloud.com/porter-robinson/shepherdess-she2016",
                    "favorited": "false"
                },
                {
                    "name": "Zoot Sims Mixed Emotions",
                    "artist": "Yungmai",
                    "cover": "https://i1.sndcdn.com/artworks-sF9ifawEzQ75hkVj-GwvvxQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/zoot-sims-mixed-emotions.mp3?raw=true",
                    "url": "https://soundcloud.com/yungmai/zoot-sims-mixed-emotions",
                    "favorited": "false"
                },
                {
                    "name": "Childhood Memories Shut Away",
                    "artist": "User 909844975",
                    "cover": "https://i1.sndcdn.com/avatars-e0dxRuonWSemq9m1-zvoylw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/childhood-memories-shut-away.mp3?raw=true",
                    "url": "https://soundcloud.com/user-909844975/childhood-memories-shut-away",
                    "favorited": "false"
                },
                {
                    "name": "Mariya Takeuchi Shiawase No Monosashi Vantage Edit",
                    "artist": "Vantagenoise",
                    "cover": "https://i1.sndcdn.com/artworks-000598849685-8le9qq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mariya-takeuchi-shiawase-no-monosashi-vantage-edit.mp3?raw=true",
                    "url": "https://soundcloud.com/vantagenoise/mariya-takeuchi-shiawase-no-monosashi-vantage-edit",
                    "favorited": "false"
                },
                {
                    "name": "Timelapse",
                    "artist": "Jordan Elgie",
                    "cover": "https://i1.sndcdn.com/artworks-000111998321-6j2aix-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/timelapse.mp3?raw=true",
                    "url": "https://soundcloud.com/jordan-elgie/timelapse",
                    "favorited": "false"
                },
                {
                    "name": "Duumu Worst Part Of Heaven Feat Trove",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-fhY67qPqpr8LCxa2-520NuQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duumu-worst-part-of-heaven-feat-trove.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/duumu-worst-part-of-heaven-feat-trove",
                    "favorited": "false"
                },
                {
                    "name": "Lady Killa",
                    "artist": "Ooljee",
                    "cover": "https://i1.sndcdn.com/artworks-000359682243-y9snq3-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lady-killa.mp3?raw=true",
                    "url": "https://soundcloud.com/ooljee/lady-killa",
                    "favorited": "false"
                },
                {
                    "name": "Rndysvge Getbackbby Verzache Rework",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000172071167-y37443-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/rndysvge-getbackbby-verzache-rework.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/rndysvge-getbackbby-verzache-rework",
                    "favorited": "false"
                },
                {
                    "name": "Akira",
                    "artist": "Slappy",
                    "cover": "https://i1.sndcdn.com/artworks-eT8sn4Hry3edNeWk-EZmN7g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/akira.mp3?raw=true",
                    "url": "https://soundcloud.com/slappy/akira",
                    "favorited": "false"
                },
                {
                    "name": "Heaven",
                    "artist": "Spudmcqueen",
                    "cover": "https://i1.sndcdn.com/artworks-000356330280-lt4s63-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/heaven.mp3?raw=true",
                    "url": "https://soundcloud.com/spudmcqueen/heaven",
                    "favorited": "false"
                },
                {
                    "name": "Move",
                    "artist": "Kotu",
                    "cover": "https://i1.sndcdn.com/artworks-000326337999-3aeib0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/move.mp3?raw=true",
                    "url": "https://soundcloud.com/kotu/move",
                    "favorited": "false"
                },
                {
                    "name": "Bolide Nikki Chi Cologne",
                    "artist": "Bolide",
                    "cover": "https://i1.sndcdn.com/artworks-000266488928-zjr8yf-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bolide-nikki-chi-cologne.mp3?raw=true",
                    "url": "https://soundcloud.com/bolide/bolide-nikki-chi-cologne",
                    "favorited": "false"
                },
                {
                    "name": "Subtact Tunnel Vision",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000186417050-i4v4uh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/subtact-tunnel-vision.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/subtact-tunnel-vision",
                    "favorited": "false"
                },
                {
                    "name": "Seishun Buta Yarou Wa Bunny Girl Senpai No Yume Wo Minai Ending Fukashigi No Cartefull",
                    "artist": "Okfw",
                    "cover": "https://i1.sndcdn.com/artworks-000606986371-ebh2wq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-ending-fukashigi-no-cartefull.mp3?raw=true",
                    "url": "https://soundcloud.com/okfw/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-ending-fukashigi-no-cartefull",
                    "favorited": "false"
                },
                {
                    "name": "Ariana Grande Be Alright Kiiyuu Edit",
                    "artist": "Kii_Yuu",
                    "cover": "https://i1.sndcdn.com/artworks-s9EwK583bkExdQdh-sVswSg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ariana-grande-be-alright-kiiyuu-edit.mp3?raw=true",
                    "url": "https://soundcloud.com/kii_yuu/ariana-grande-be-alright-kiiyuu-edit",
                    "favorited": "false"
                },
                {
                    "name": "100 Production Mix 1",
                    "artist": "Thoughts 7",
                    "cover": "https://i1.sndcdn.com/artworks-3F10wCmfPIpAiDXH-SnQj8A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/100-production-mix-1.mp3?raw=true",
                    "url": "https://soundcloud.com/thoughts-7/100-production-mix-1",
                    "favorited": "false"
                },
                {
                    "name": "Moshino X Soulsweep Heartsick",
                    "artist": "Soulsweepmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000642955525-hfolp5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moshino-x-soulsweep-heartsick.mp3?raw=true",
                    "url": "https://soundcloud.com/soulsweepmusic/moshino-x-soulsweep-heartsick",
                    "favorited": "false"
                },
                {
                    "name": "A Mere Machine",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-000290740221-zsrrq9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/a-mere-machine.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/a-mere-machine",
                    "favorited": "false"
                },
                {
                    "name": "Wonderful Wonder",
                    "artist": "Bradamante_Fate",
                    "cover": "https://i1.sndcdn.com/artworks-000517860249-q9jpwv-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wonderful-wonder.mp3?raw=true",
                    "url": "https://soundcloud.com/bradamante_fate/wonderful-wonder",
                    "favorited": "false"
                },
                {
                    "name": "Chouzikugroove",
                    "artist": "Mikazukibigwave",
                    "cover": "https://i1.sndcdn.com/artworks-000265843283-72z293-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chouzikugroove.mp3?raw=true",
                    "url": "https://soundcloud.com/mikazukibigwave/chouzikugroove",
                    "favorited": "false"
                },
                {
                    "name": "Unfinished Business 2",
                    "artist": "Inteusnumber2",
                    "cover": "https://i1.sndcdn.com/artworks-JvS5KJJO9Rq0KaCS-rvfT3w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/unfinished-business-2.mp3?raw=true",
                    "url": "https://soundcloud.com/inteusnumber2/unfinished-business-2",
                    "favorited": "false"
                },
                {
                    "name": "Grynpyret I Forgive Ramzoid Remix",
                    "artist": "Ramzoid",
                    "cover": "https://i1.sndcdn.com/artworks-000136258890-ojrzza-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/grynpyret-i-forgive-ramzoid-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/ramzoid/grynpyret-i-forgive-ramzoid-remix",
                    "favorited": "false"
                },
                {
                    "name": "Late Night",
                    "artist": "Maestrexmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000170517772-thpvyr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/late-night.mp3?raw=true",
                    "url": "https://soundcloud.com/maestrexmusic/late-night",
                    "favorited": "false"
                },
                {
                    "name": "Flurry",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-000466055598-4m7n11-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/flurry.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/flurry",
                    "favorited": "false"
                },
                {
                    "name": "Amagami Ss Kimi No Mama De",
                    "artist": "User 741462991",
                    "cover": "https://i1.sndcdn.com/avatars-000300374263-mp0nz5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/amagami-ss-kimi-no-mama-de.mp3?raw=true",
                    "url": "https://soundcloud.com/user-741462991/amagami-ss-kimi-no-mama-de",
                    "favorited": "false"
                },
                {
                    "name": "Midnight Walk",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-000200188470-pku5w8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/midnight-walk.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/midnight-walk",
                    "favorited": "false"
                },
                {
                    "name": "Doe",
                    "artist": "Tofiemusic",
                    "cover": "https://i1.sndcdn.com/artworks-qkt5zdSYNuzxq8aN-xVjNPA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/doe.mp3?raw=true",
                    "url": "https://soundcloud.com/tofiemusic/doe",
                    "favorited": "false"
                },
                {
                    "name": "Dawnbreaker",
                    "artist": "Metrik",
                    "cover": "https://i1.sndcdn.com/artworks-000412118706-lta7wk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dawnbreaker.mp3?raw=true",
                    "url": "https://soundcloud.com/metrik/dawnbreaker",
                    "favorited": "false"
                },
                {
                    "name": "Rkenbib",
                    "artist": "Cani308",
                    "cover": "https://i1.sndcdn.com/artworks-Sam6NL4ryxCmqMr7-JTIuoA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/rkenbib.mp3?raw=true",
                    "url": "https://soundcloud.com/cani308/rkenbib",
                    "favorited": "false"
                },
                {
                    "name": "Kakegurui Xx Op Kono Yubi Tomare Junna Full",
                    "artist": "Erriba Souper",
                    "cover": "https://i1.sndcdn.com/artworks-000556188225-1q6841-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kakegurui-xx-op-kono-yubi-tomare-junna-full.mp3?raw=true",
                    "url": "https://soundcloud.com/erriba-souper/kakegurui-xx-op-kono-yubi-tomare-junna-full",
                    "favorited": "false"
                },
                {
                    "name": "Want You Bad",
                    "artist": "Itsreallyredhands",
                    "cover": "https://i1.sndcdn.com/artworks-000389509455-csfyy5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/want-you-bad.mp3?raw=true",
                    "url": "https://soundcloud.com/itsreallyredhands/want-you-bad",
                    "favorited": "false"
                },
                {
                    "name": "Duck Song Ft Jamil",
                    "artist": "Elizatwinkies",
                    "cover": "https://i1.sndcdn.com/artworks-000664680823-9qxhln-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duck-song-ft-jamil.mp3?raw=true",
                    "url": "https://soundcloud.com/elizatwinkies/duck-song-ft-jamil",
                    "favorited": "false"
                },
                {
                    "name": "Mynerva Passion Fruit 1",
                    "artist": "Nightowlcollective",
                    "cover": "https://i1.sndcdn.com/artworks-000141885908-zcldnp-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mynerva-passion-fruit-1.mp3?raw=true",
                    "url": "https://soundcloud.com/nightowlcollective/mynerva-passion-fruit-1",
                    "favorited": "false"
                },
                {
                    "name": "Woodstock Feat Whosane",
                    "artist": "Narchbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000397335465-gjak8d-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/woodstock-feat-whosane.mp3?raw=true",
                    "url": "https://soundcloud.com/narchbeats/woodstock-feat-whosane",
                    "favorited": "false"
                },
                {
                    "name": "Vapor Rei",
                    "artist": "Djgumbii",
                    "cover": "https://i1.sndcdn.com/artworks-000104253498-s3c1sc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vapor-rei.mp3?raw=true",
                    "url": "https://soundcloud.com/djgumbii/vapor-rei",
                    "favorited": "false"
                },
                {
                    "name": "Travis Domain Instrumental",
                    "artist": "Trashz3Nt",
                    "cover": "https://i1.sndcdn.com/artworks-OTx76TRNEyp0UzCh-lxzWng-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/travis-domain-instrumental.mp3?raw=true",
                    "url": "https://soundcloud.com/trashz3nt/travis-domain-instrumental",
                    "favorited": "false"
                },
                {
                    "name": "Moshi Moshi Outro",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000154029122-gcu7o8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moshi-moshi-outro.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/moshi-moshi-outro",
                    "favorited": "false"
                },
                {
                    "name": "Musickizuna Ai Again Moe Shop",
                    "artist": "Chara 2070269",
                    "cover": "https://i1.sndcdn.com/artworks-cWIbJROAsb4tR2gG-mURmkw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/musickizuna-ai-again-moe-shop.mp3?raw=true",
                    "url": "https://soundcloud.com/chara-2070269/musickizuna-ai-again-moe-shop",
                    "favorited": "false"
                },
                {
                    "name": "Daredevil",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-000670012297-blxm49-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/daredevil.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/daredevil",
                    "favorited": "false"
                },
                {
                    "name": "22 Jaq World Orca",
                    "artist": "Sexytoadsandfrogsfriendcircle",
                    "cover": "https://i1.sndcdn.com/artworks-mKslJdt90oTyC6Hk-aRgbYg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/22-jaq-world-orca.mp3?raw=true",
                    "url": "https://soundcloud.com/sexytoadsandfrogsfriendcircle/22-jaq-world-orca",
                    "favorited": "false"
                },
                {
                    "name": "Ridenvibe 1",
                    "artist": "Sappy94",
                    "cover": "https://i1.sndcdn.com/artworks-000250072858-fhdk2k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ridenvibe-1.mp3?raw=true",
                    "url": "https://soundcloud.com/sappy94/ridenvibe-1",
                    "favorited": "false"
                },
                {
                    "name": "Lokan Antigravity",
                    "artist": "Xander Singh",
                    "cover": "https://i1.sndcdn.com/artworks-000377867238-zzgffd-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lokan-antigravity.mp3?raw=true",
                    "url": "https://soundcloud.com/xander-singh/lokan-antigravity",
                    "favorited": "false"
                },
                {
                    "name": "Aero Chord Drop It",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000232165443-ccsgow-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aero-chord-drop-it.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/aero-chord-drop-it",
                    "favorited": "false"
                },
                {
                    "name": "Money Moves",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-000359128947-moj0sh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/money-moves.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/money-moves",
                    "favorited": "false"
                },
                {
                    "name": "Dream And Bass",
                    "artist": "P Sus",
                    "cover": "https://i1.sndcdn.com/artworks-GjZZHD1uOHx9stCE-JlXV0Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dream-and-bass.mp3?raw=true",
                    "url": "https://soundcloud.com/p-sus/dream-and-bass",
                    "favorited": "false"
                },
                {
                    "name": "Steve Scott",
                    "artist": "Natsu Fuji",
                    "cover": "https://i1.sndcdn.com/artworks-QFhYylPZYESIScv4-8ODlZg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/steve-scott.mp3?raw=true",
                    "url": "https://soundcloud.com/natsu-fuji/steve-scott",
                    "favorited": "false"
                },
                {
                    "name": "Just Call Me Macross A Study Of Selfish High Heels",
                    "artist": "Admung",
                    "cover": "https://i1.sndcdn.com/artworks-000142036203-cytua2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/just-call-me-macross-a-study-of-selfish-high-heels.mp3?raw=true",
                    "url": "https://soundcloud.com/admung/just-call-me-macross-a-study-of-selfish-high-heels",
                    "favorited": "false"
                },
                {
                    "name": "Deadbeats",
                    "artist": "Ryogaa",
                    "cover": "https://i1.sndcdn.com/artworks-rz7izkl6CLyV4sen-xSPVHw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/deadbeats.mp3?raw=true",
                    "url": "https://soundcloud.com/ryogaa/deadbeats",
                    "favorited": "false"
                },
                {
                    "name": "Beach Episode",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-pdwzKxm1N50Meyn2-twiePw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/beach-episode.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/beach-episode",
                    "favorited": "false"
                },
                {
                    "name": "Introvert 1",
                    "artist": "Puree Gem",
                    "cover": "https://i1.sndcdn.com/artworks-000541033125-s67v7f-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/introvert-1.mp3?raw=true",
                    "url": "https://soundcloud.com/puree-gem/introvert-1",
                    "favorited": "false"
                },
                {
                    "name": "Dancing",
                    "artist": "Kimochiiviibes",
                    "cover": "https://i1.sndcdn.com/artworks-000129548366-nl3r84-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dancing.mp3?raw=true",
                    "url": "https://soundcloud.com/kimochiiviibes/dancing",
                    "favorited": "false"
                },
                {
                    "name": "Xo Tour Love Lif3 Last",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-000261164963-vjqd4o-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/xo-tour-love-lif3-last.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/xo-tour-love-lif3-last",
                    "favorited": "false"
                },
                {
                    "name": "Galaxy",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-6Dg643ti9GnhFtys-IX8nPA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/galaxy.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/galaxy",
                    "favorited": "false"
                },
                {
                    "name": "Crush",
                    "artist": "Maxoelectronic",
                    "cover": "https://i1.sndcdn.com/artworks-000121248574-glhiu9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crush.mp3?raw=true",
                    "url": "https://soundcloud.com/maxoelectronic/crush",
                    "favorited": "false"
                },
                {
                    "name": "Haarper Growth Stunt",
                    "artist": "User 587078677",
                    "cover": "https://i1.sndcdn.com/artworks-HVz6qvGfkAtx2vgQ-HuPRkA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/haarper-growth-stunt.mp3?raw=true",
                    "url": "https://soundcloud.com/user-587078677/haarper-growth-stunt",
                    "favorited": "false"
                },
                {
                    "name": "Her",
                    "artist": "Nemuiiiiiii 404",
                    "cover": "https://i1.sndcdn.com/artworks-VXvFupu2icNzYUIx-VzSHZg-large.png",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/her.mp3?raw=true",
                    "url": "https://soundcloud.com/nemuiiiiiii-404/her",
                    "favorited": "false"
                },
                {
                    "name": "Eureka",
                    "artist": "Jazzyryuuji",
                    "cover": "https://i1.sndcdn.com/artworks-jLBVJknQFJHCIg0t-cCGXyA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/eureka.mp3?raw=true",
                    "url": "https://soundcloud.com/jazzyryuuji/eureka",
                    "favorited": "false"
                },
                {
                    "name": "Milklips",
                    "artist": "Sizhin",
                    "cover": "https://i1.sndcdn.com/artworks-000209082672-y6tts7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/milklips.mp3?raw=true",
                    "url": "https://soundcloud.com/sizhin/milklips",
                    "favorited": "false"
                },
                {
                    "name": "Cross Like Jordan",
                    "artist": "Yungtie",
                    "cover": "https://i1.sndcdn.com/artworks-000357598947-i8s8s7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cross-like-jordan.mp3?raw=true",
                    "url": "https://soundcloud.com/yungtie/cross-like-jordan",
                    "favorited": "false"
                },
                {
                    "name": "Breezin",
                    "artist": "",
                    "cover": "https://i1.sndcdn.com/artworks-000669590455-hwv0ti-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/breezin.mp3?raw=true",
                    "url": "https://soundcloud.com/",
                    "favorited": "false"
                },
                {
                    "name": "Grow Fonder Pogo",
                    "artist": "Pogomix",
                    "cover": "https://i1.sndcdn.com/artworks-000202897016-eirrzg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/grow-fonder-pogo.mp3?raw=true",
                    "url": "https://soundcloud.com/pogomix/grow-fonder-pogo",
                    "favorited": "false"
                },
                {
                    "name": "Monday",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/monday.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/monday",
                    "favorited": "false"
                },
                {
                    "name": "Forty Five",
                    "artist": "Inteus666",
                    "cover": "https://i1.sndcdn.com/artworks-gvmvPnw1DfK1lFik-4YhCUw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/forty-five.mp3?raw=true",
                    "url": "https://soundcloud.com/inteus666/forty-five",
                    "favorited": "false"
                },
                {
                    "name": "Experiment 6022",
                    "artist": "Tsunderelaboratoriesincorporated",
                    "cover": "https://i1.sndcdn.com/artworks-000307470132-aytrdb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/experiment-6022.mp3?raw=true",
                    "url": "https://soundcloud.com/tsunderelaboratoriesincorporated/experiment-6022",
                    "favorited": "false"
                },
                {
                    "name": "Golden Era Birthday Special",
                    "artist": "Katebi",
                    "cover": "https://i1.sndcdn.com/artworks-000587401928-tye4yl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/golden-era-birthday-special.mp3?raw=true",
                    "url": "https://soundcloud.com/katebi/golden-era-birthday-special",
                    "favorited": "false"
                },
                {
                    "name": "Thatguybt4 Purple Rose Genshin Impact Lisa Voice Remix",
                    "artist": "Thatguybt4",
                    "cover": "https://i1.sndcdn.com/artworks-3N3yzF78XFLHKKyF-fb0yrA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/thatguybt4-purple-rose-genshin-impact-lisa-voice-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/thatguybt4/thatguybt4-purple-rose-genshin-impact-lisa-voice-remix",
                    "favorited": "false"
                },
                {
                    "name": "That One Christmas Song From Last Year",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-PqZAQfOgCaOLliSh-7aCYzA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/that-one-christmas-song-from-last-year.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/that-one-christmas-song-from-last-year",
                    "favorited": "false"
                },
                {
                    "name": "Vibe",
                    "artist": "Cookiee Kawaii",
                    "cover": "https://i1.sndcdn.com/artworks-T004pw6czypw4Vvl-flfYnA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vibe.mp3?raw=true",
                    "url": "https://soundcloud.com/cookiee-kawaii/vibe",
                    "favorited": "false"
                },
                {
                    "name": "01 Easy Love",
                    "artist": "Zara Azu",
                    "cover": "https://i1.sndcdn.com/artworks-Xz4pCeD8Q43BRLz1-fE5XxQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/01-easy-love.mp3?raw=true",
                    "url": "https://soundcloud.com/zara-azu/01-easy-love",
                    "favorited": "false"
                },
                {
                    "name": "Funky Tora",
                    "artist": "Greylo",
                    "cover": "https://i1.sndcdn.com/artworks-uDJVXy50ZPqzFozz-5vUfng-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/funky-tora.mp3?raw=true",
                    "url": "https://soundcloud.com/greylo/funky-tora",
                    "favorited": "false"
                },
                {
                    "name": "Duumu Re",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000217802641-ew7t17-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duumu-re",
                    "url": "https://soundcloud.com/monstercat/duumu-re",
                    "favorited": "false"
                },
                {
                    "name": "Journey",
                    "artist": "Dreamscapecollective",
                    "cover": "https://i1.sndcdn.com/artworks-000228538962-cpnpaq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/journey.mp3?raw=true",
                    "url": "https://soundcloud.com/dreamscapecollective/journey",
                    "favorited": "false"
                },
                {
                    "name": "Maggie X Nyan Summertime Arrange Ver",
                    "artist": "Starlingedm",
                    "cover": "https://i1.sndcdn.com/artworks-000642649729-rtdnj5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/maggie-x-nyan-summertime-arrange-ver.mp3?raw=true",
                    "url": "https://soundcloud.com/starlingedm/maggie-x-nyan-summertime-arrange-ver",
                    "favorited": "false"
                },
                {
                    "name": "Freddie Dredd All Alone Slowed Reverb",
                    "artist": "User 484282939",
                    "cover": "https://i1.sndcdn.com/artworks-0tXlmkRSOkVY7c99-1L6HJw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/freddie-dredd-all-alone-slowed-reverb.mp3?raw=true",
                    "url": "https://soundcloud.com/user-484282939/freddie-dredd-all-alone-slowed-reverb",
                    "favorited": "false"
                },
                {
                    "name": "Desperado Slowed Pitched",
                    "artist": "Someone 872656359",
                    "cover": "https://i1.sndcdn.com/artworks-oRKbzy4KyHCNolVm-Px5Ivg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/desperado-slowed-pitched.mp3?raw=true",
                    "url": "https://soundcloud.com/someone-872656359/desperado-slowed-pitched",
                    "favorited": "false"
                },
                {
                    "name": "Urbanflyer2",
                    "artist": "Kissmenerdygirl",
                    "cover": "https://i1.sndcdn.com/artworks-bSpOdfptqzNk4RT6-XmHRxg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/urbanflyer2.mp3?raw=true",
                    "url": "https://soundcloud.com/kissmenerdygirl/urbanflyer2",
                    "favorited": "false"
                },
                {
                    "name": "Hyper Bass Wakaran Girl Flex 1",
                    "artist": "Wakarangirl",
                    "cover": "https://i1.sndcdn.com/artworks-o7Vz6KRlDFcZPbn4-8iVh3A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hyper-bass-wakaran-girl-flex-1.mp3?raw=true",
                    "url": "https://soundcloud.com/wakarangirl/hyper-bass-wakaran-girl-flex-1",
                    "favorited": "false"
                },
                {
                    "name": "Allmyfriends",
                    "artist": "Synthion",
                    "cover": "https://i1.sndcdn.com/artworks-000664326346-fv4mi1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/allmyfriends.mp3?raw=true",
                    "url": "https://soundcloud.com/synthion/allmyfriends",
                    "favorited": "false"
                },
                {
                    "name": "Whatfeelsright",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000234572297-4lc8i5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/whatfeelsright.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/whatfeelsright",
                    "favorited": "false"
                },
                {
                    "name": "Double On Genre Dnb Lounge Ft Diveo",
                    "artist": "Ethanlinnn",
                    "cover": "https://i1.sndcdn.com/artworks-000121492145-72e8hk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/double-on-genre-dnb-lounge-ft-diveo.mp3?raw=true",
                    "url": "https://soundcloud.com/ethanlinnn/double-on-genre-dnb-lounge-ft-diveo",
                    "favorited": "false"
                },
                {
                    "name": "06 Natsu No Nichi Ni Youkoso",
                    "artist": "Artemijko",
                    "cover": "https://i1.sndcdn.com/artworks-000129446896-2srsci-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/06-natsu-no-nichi-ni-youkoso.mp3?raw=true",
                    "url": "https://soundcloud.com/artemijko/06-natsu-no-nichi-ni-youkoso",
                    "favorited": "false"
                },
                {
                    "name": "Imagination",
                    "artist": "Similar Outskirts",
                    "cover": "https://i1.sndcdn.com/artworks-000638117248-cvk59m-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/imagination.mp3?raw=true",
                    "url": "https://soundcloud.com/similar-outskirts/imagination",
                    "favorited": "false"
                },
                {
                    "name": "Uknowme Bootleg V6",
                    "artist": "Chodeeater",
                    "cover": "https://i1.sndcdn.com/avatars-DgpCUHym4s1CUTb9-i2Mkfg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/uknowme-bootleg-v6.mp3?raw=true",
                    "url": "https://soundcloud.com/chodeeater/uknowme-bootleg-v6",
                    "favorited": "false"
                },
                {
                    "name": "Dick Sweat On My Wrist",
                    "artist": "Bootymunch",
                    "cover": "https://i1.sndcdn.com/artworks-000227508125-2a6zjg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dick-sweat-on-my-wrist.mp3?raw=true",
                    "url": "https://soundcloud.com/bootymunch/dick-sweat-on-my-wrist",
                    "favorited": "false"
                },
                {
                    "name": "Evilmane Generation Z Prod",
                    "artist": "Evilmane666",
                    "cover": "https://i1.sndcdn.com/artworks-000660706471-trhhhc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/evilmane-generation-z-prod.mp3?raw=true",
                    "url": "https://soundcloud.com/evilmane666/evilmane-generation-z-prod",
                    "favorited": "false"
                },
                {
                    "name": "Tokyomachine",
                    "artist": "Theonlypixel19",
                    "cover": "https://i1.sndcdn.com/artworks-TRN6u0O4xn29foKE-4dIDKw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tokyomachine.mp3?raw=true",
                    "url": "https://soundcloud.com/theonlypixel19/tokyomachine",
                    "favorited": "false"
                },
                {
                    "name": "Crush",
                    "artist": "Mc_Pote",
                    "cover": "https://i1.sndcdn.com/artworks-000243923655-za0ar2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crush.mp3?raw=true",
                    "url": "https://soundcloud.com/mc_pote/crush",
                    "favorited": "false"
                },
                {
                    "name": "Fm17314 Sugar Radio",
                    "artist": "Plastic Ank",
                    "cover": "https://i1.sndcdn.com/artworks-7TyUM7aj74mYQloe-kyybgQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fm17314-sugar-radio.mp3?raw=true",
                    "url": "https://soundcloud.com/plastic-ank/fm17314-sugar-radio",
                    "favorited": "false"
                },
                {
                    "name": "5Nbi6Ipb9Hsa",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-TuZduxGTxBg5C0ej-jAiyMQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/5nbi6ipb9hsa.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/5nbi6ipb9hsa",
                    "favorited": "false"
                },
                {
                    "name": "Miracle Love",
                    "artist": "User 304005133 494915018",
                    "cover": "https://i1.sndcdn.com/artworks-VRmGi9vUBZG0WzpQ-rTXXqw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/miracle-love.mp3?raw=true",
                    "url": "https://soundcloud.com/user-304005133-494915018/miracle-love",
                    "favorited": "false"
                },
                {
                    "name": "Fransis Derelle Craymak Ember Feat Hvdes",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-cfkPy0ALZqiyRmEQ-uirCAQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fransis-derelle-craymak-ember-feat-hvdes.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/fransis-derelle-craymak-ember-feat-hvdes",
                    "favorited": "false"
                },
                {
                    "name": "Drippin",
                    "artist": "Gvvap",
                    "cover": "https://i1.sndcdn.com/artworks-tvpXL0h2sWAtIcgx-I1AH9g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/drippin.mp3?raw=true",
                    "url": "https://soundcloud.com/gvvap/drippin",
                    "favorited": "false"
                },
                {
                    "name": "Re Zero Memory Snow Ova Relive",
                    "artist": "T0Kisaki",
                    "cover": "https://i1.sndcdn.com/artworks-000480348708-il6uf4-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/re-zero-memory-snow-ova-relive.mp3?raw=true",
                    "url": "https://soundcloud.com/t0kisaki/re-zero-memory-snow-ova-relive",
                    "favorited": "false"
                },
                {
                    "name": "Adress It",
                    "artist": "Lpbpoody",
                    "cover": "https://i1.sndcdn.com/artworks-000621571879-9zzzjh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/adress-it.mp3?raw=true",
                    "url": "https://soundcloud.com/lpbpoody/adress-it",
                    "favorited": "false"
                },
                {
                    "name": "I Fall In Love Too Easily",
                    "artist": "Alembicmusic",
                    "cover": "https://i1.sndcdn.com/artworks-jZtDqvYcM4t8itiL-jb6gWQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/i-fall-in-love-too-easily.mp3?raw=true",
                    "url": "https://soundcloud.com/alembicmusic/i-fall-in-love-too-easily",
                    "favorited": "false"
                },
                {
                    "name": "Aika Cherry Cheeks",
                    "artist": "Moecollective",
                    "cover": "https://i1.sndcdn.com/artworks-000149797022-c4lc2c-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aika-cherry-cheeks.mp3?raw=true",
                    "url": "https://soundcloud.com/moecollective/aika-cherry-cheeks",
                    "favorited": "false"
                },
                {
                    "name": "Sunset",
                    "artist": "Bailleygilchrist",
                    "cover": "https://i1.sndcdn.com/artworks-000248679383-frnxjn-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sunset.mp3?raw=true",
                    "url": "https://soundcloud.com/bailleygilchrist/sunset",
                    "favorited": "false"
                },
                {
                    "name": "Run It Up666 Follower Special",
                    "artist": "Groufs",
                    "cover": "https://i1.sndcdn.com/artworks-000276480800-jr1olg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/run-it-up666-follower-special.mp3?raw=true",
                    "url": "https://soundcloud.com/groufs/run-it-up666-follower-special",
                    "favorited": "false"
                },
                {
                    "name": "Go To Work Adg Ft Spongebob",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000268164431-qf0nh8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/go-to-work-adg-ft-spongebob.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/go-to-work-adg-ft-spongebob",
                    "favorited": "false"
                },
                {
                    "name": "Sunset Paradise",
                    "artist": "Aboywithaballoon",
                    "cover": "https://i1.sndcdn.com/artworks-grS8SEAmHczy90GA-S6qtjQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sunset-paradise.mp3?raw=true",
                    "url": "https://soundcloud.com/aboywithaballoon/sunset-paradise",
                    "favorited": "false"
                },
                {
                    "name": "Maldamour",
                    "artist": "Ujbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000369317499-r5dmh7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/maldamour.mp3?raw=true",
                    "url": "https://soundcloud.com/ujbeats/maldamour",
                    "favorited": "false"
                },
                {
                    "name": "Ghostface Playa Swaggin At The",
                    "artist": "Pbhbdxhv53Qu",
                    "cover": "https://i1.sndcdn.com/artworks-rmKVZ3GN0yy0kXSL-zzrh8g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ghostface-playa-swaggin-at-the.mp3?raw=true",
                    "url": "https://soundcloud.com/pbhbdxhv53qu/ghostface-playa-swaggin-at-the",
                    "favorited": "false"
                },
                {
                    "name": "Renai Circulation",
                    "artist": "Oyruka",
                    "cover": "https://i1.sndcdn.com/avatars-000079322024-58insm-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/renai-circulation.mp3?raw=true",
                    "url": "https://soundcloud.com/oyruka/renai-circulation",
                    "favorited": "false"
                },
                {
                    "name": "Duumu Take Me Away",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000296441817-wm1oc0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duumu-take-me-away.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/duumu-take-me-away",
                    "favorited": "false"
                },
                {
                    "name": "Haarper Drop It Like Its Hot",
                    "artist": "Pbhbdxhv53Qu",
                    "cover": "https://i1.sndcdn.com/artworks-dtW9v4rOfaLXlzN8-7Pa45w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/haarper-drop-it-like-its-hot.mp3?raw=true",
                    "url": "https://soundcloud.com/pbhbdxhv53qu/haarper-drop-it-like-its-hot",
                    "favorited": "false"
                },
                {
                    "name": "Tenma",
                    "artist": "Lordsun1",
                    "cover": "https://i1.sndcdn.com/artworks-000440522307-7gzlnz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tenma.mp3?raw=true",
                    "url": "https://soundcloud.com/lordsun1/tenma",
                    "favorited": "false"
                },
                {
                    "name": "Moving On Ft Eileen",
                    "artist": "Anipai",
                    "cover": "https://i1.sndcdn.com/artworks-1P6bAOfxme4be5d2-ziMbUw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moving-on-ft-eileen.mp3?raw=true",
                    "url": "https://soundcloud.com/anipai/moving-on-ft-eileen",
                    "favorited": "false"
                },
                {
                    "name": "Sleep It Off Leon Chang",
                    "artist": "Roach 315369320",
                    "cover": "https://i1.sndcdn.com/artworks-gs61uhJ369DtaS4u-0Szrwg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sleep-it-off-leon-chang.mp3?raw=true",
                    "url": "https://soundcloud.com/roach-315369320/sleep-it-off-leon-chang",
                    "favorited": "false"
                },
                {
                    "name": "Continue",
                    "artist": "The_Eluzai",
                    "cover": "https://i1.sndcdn.com/artworks-tcyPeysTfpcqtZv8-upoI6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/continue.mp3?raw=true",
                    "url": "https://soundcloud.com/the_eluzai/continue",
                    "favorited": "false"
                },
                {
                    "name": "Grant Are We Still Young",
                    "artist": "Grantsongs",
                    "cover": "https://i1.sndcdn.com/artworks-000224494934-ap4s68-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/grant-are-we-still-young.mp3?raw=true",
                    "url": "https://soundcloud.com/grantsongs/grant-are-we-still-young",
                    "favorited": "false"
                },
                {
                    "name": "Spongebob Electric Zoo Bolide Remix",
                    "artist": "Bolide",
                    "cover": "https://i1.sndcdn.com/artworks-000572742338-tko9zb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/spongebob-electric-zoo-bolide-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/bolide/spongebob-electric-zoo-bolide-remix",
                    "favorited": "false"
                },
                {
                    "name": "Jeff N Andy",
                    "artist": "Andrewapplepie",
                    "cover": "https://i1.sndcdn.com/artworks-000167788373-a9y5un-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jeff-n-andy.mp3?raw=true",
                    "url": "https://soundcloud.com/andrewapplepie/jeff-n-andy",
                    "favorited": "false"
                },
                {
                    "name": "Fiend Worldwide",
                    "artist": "Katebi",
                    "cover": "https://i1.sndcdn.com/artworks-Y0syXXvuiHXLye4D-1p3Wbw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fiend-worldwide.mp3?raw=true",
                    "url": "https://soundcloud.com/katebi/fiend-worldwide",
                    "favorited": "false"
                },
                {
                    "name": "Soudiere Okay Hoe Dont Worry Bout A G Feat Evan De Clou",
                    "artist": "Iamokho",
                    "cover": "https://i1.sndcdn.com/artworks-000184164694-x47k7g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/soudiere-okay-hoe-dont-worry-bout-a-g-feat-evan-de-clou.mp3?raw=true",
                    "url": "https://soundcloud.com/iamokho/soudiere-okay-hoe-dont-worry-bout-a-g-feat-evan-de-clou",
                    "favorited": "false"
                },
                {
                    "name": "Conro All Me",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000232165609-vl2ww3-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/conro-all-me.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/conro-all-me",
                    "favorited": "false"
                },
                {
                    "name": "Lost Childs Echo",
                    "artist": "Amboneater",
                    "cover": "https://i1.sndcdn.com/artworks-000259545401-q9oo9l-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lost-childs-echo.mp3?raw=true",
                    "url": "https://soundcloud.com/amboneater/lost-childs-echo",
                    "favorited": "false"
                },
                {
                    "name": "Endless And Artificial By City Girl",
                    "artist": "Drcymlr",
                    "cover": "https://i1.sndcdn.com/artworks-000554586141-iy1vva-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/endless-and-artificial-by-city-girl.mp3?raw=true",
                    "url": "https://soundcloud.com/drcymlr/endless-and-artificial-by-city-girl",
                    "favorited": "false"
                },
                {
                    "name": "Grlfrnd",
                    "artist": "Vxlkyrie",
                    "cover": "https://i1.sndcdn.com/artworks-000138687807-3t5u4v-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/grlfrnd.mp3?raw=true",
                    "url": "https://soundcloud.com/vxlkyrie/grlfrnd",
                    "favorited": "false"
                },
                {
                    "name": "Cobalt",
                    "artist": "Koan Sound",
                    "cover": "https://i1.sndcdn.com/artworks-000440881611-v59kjh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cobalt.mp3?raw=true",
                    "url": "https://soundcloud.com/koan-sound/cobalt",
                    "favorited": "false"
                },
                {
                    "name": "Kubota",
                    "artist": "Taj Pierre",
                    "cover": "https://i1.sndcdn.com/artworks-RDg7wzpLSfRRywVW-uDyxew-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kubota.mp3?raw=true",
                    "url": "https://soundcloud.com/taj-pierre/kubota",
                    "favorited": "false"
                },
                {
                    "name": "Lemonade Unreleased",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lemonade-unreleased.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/lemonade-unreleased",
                    "favorited": "false"
                },
                {
                    "name": "S 1",
                    "artist": "Noble Reblended",
                    "cover": "https://i1.sndcdn.com/artworks-000259731017-g2slbu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/s-1.mp3?raw=true",
                    "url": "https://soundcloud.com/noble-reblended/s-1",
                    "favorited": "false"
                },
                {
                    "name": "The Pet Girl Of Sakurasou Op",
                    "artist": "Fathia Mohamud 437258206",
                    "cover": "https://i1.sndcdn.com/artworks-000542418276-js6kok-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-pet-girl-of-sakurasou-op.mp3?raw=true",
                    "url": "https://soundcloud.com/fathia-mohamud-437258206/the-pet-girl-of-sakurasou-op",
                    "favorited": "false"
                },
                {
                    "name": "Bubbleteanxc",
                    "artist": "Juunana",
                    "cover": "https://i1.sndcdn.com/avatars-000211011145-kuhp4u-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bubbleteanxc.mp3?raw=true",
                    "url": "https://soundcloud.com/juunana/bubbleteanxc",
                    "favorited": "false"
                },
                {
                    "name": "Everest",
                    "artist": "Imkotori",
                    "cover": "https://i1.sndcdn.com/artworks-Ip5GeqyRrezMRYOY-5bQUjA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/everest.mp3?raw=true",
                    "url": "https://soundcloud.com/imkotori/everest",
                    "favorited": "false"
                },
                {
                    "name": "Hey Dont Be Sad",
                    "artist": "Kknk",
                    "cover": "https://i1.sndcdn.com/artworks-Yhuz0x86zVyZCyLV-7l8YeQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hey-dont-be-sad.mp3?raw=true",
                    "url": "https://soundcloud.com/kknk/hey-dont-be-sad",
                    "favorited": "false"
                },
                {
                    "name": "Cute Confession Scene",
                    "artist": "Lyccenni",
                    "cover": "https://i1.sndcdn.com/artworks-000215701893-zoqtfw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cute-confession-scene.mp3?raw=true",
                    "url": "https://soundcloud.com/lyccenni/cute-confession-scene",
                    "favorited": "false"
                },
                {
                    "name": "Jamming But Its America With Lil Jhon Going Gangnam Circulation Style",
                    "artist": "Puree Gem",
                    "cover": "https://i1.sndcdn.com/artworks-V0wFactz0INin5QI-GSYyRQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jamming-but-its-america-with-lil-jhon-going-gangnam-circulation-style.mp3?raw=true",
                    "url": "https://soundcloud.com/puree-gem/jamming-but-its-america-with-lil-jhon-going-gangnam-circulation-style",
                    "favorited": "false"
                },
                {
                    "name": "The Pet Girl Of Sakurasou",
                    "artist": "Doragonsamurai",
                    "cover": "https://i1.sndcdn.com/artworks-000122826812-0f7ic9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-pet-girl-of-sakurasou.mp3?raw=true",
                    "url": "https://soundcloud.com/doragonsamurai/the-pet-girl-of-sakurasou",
                    "favorited": "false"
                },
                {
                    "name": "Down",
                    "artist": "Allhousenation",
                    "cover": "https://i1.sndcdn.com/artworks-000190568268-nu0zef-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/down.mp3?raw=true",
                    "url": "https://soundcloud.com/allhousenation/down",
                    "favorited": "false"
                },
                {
                    "name": "Mahou Shoujo Funk Workout",
                    "artist": "Eleventea",
                    "cover": "https://i1.sndcdn.com/artworks-000160803843-sayfdb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mahou-shoujo-funk-workout.mp3?raw=true",
                    "url": "https://soundcloud.com/eleventea/mahou-shoujo-funk-workout",
                    "favorited": "false"
                },
                {
                    "name": "Love Space Tatsuro Yamashita Akaris Future Mix",
                    "artist": "User 595321022",
                    "cover": "https://i1.sndcdn.com/artworks-2Y0sO0I5tJxXBwBI-1kyOHQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/love-space-tatsuro-yamashita-akaris-future-mix.mp3?raw=true",
                    "url": "https://soundcloud.com/user-595321022/love-space-tatsuro-yamashita-akaris-future-mix",
                    "favorited": "false"
                },
                {
                    "name": "Fwd3Egw546Bb",
                    "artist": "Catlovekoshian",
                    "cover": "https://i1.sndcdn.com/artworks-mofABUtzAlTKN9rZ-8zWmyQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fwd3egw546bb.mp3?raw=true",
                    "url": "https://soundcloud.com/catlovekoshian/fwd3egw546bb",
                    "favorited": "false"
                },
                {
                    "name": "Livin On The Line W Blanco",
                    "artist": "Squidiotic",
                    "cover": "https://i1.sndcdn.com/artworks-000603059461-uio6aa-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/livin-on-the-line-w-blanco.mp3?raw=true",
                    "url": "https://soundcloud.com/squidiotic/livin-on-the-line-w-blanco",
                    "favorited": "false"
                },
                {
                    "name": "Da Phonk Killa Ii",
                    "artist": "Saotomamore",
                    "cover": "https://i1.sndcdn.com/artworks-Q76BounyfYSjeaKl-l5rcjg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/da-phonk-killa-ii.mp3?raw=true",
                    "url": "https://soundcloud.com/saotomamore/da-phonk-killa-ii",
                    "favorited": "false"
                },
                {
                    "name": "4 W Lucasrap Prod Elvis",
                    "artist": "Blxckie",
                    "cover": "https://i1.sndcdn.com/artworks-o2tbZFAHOdG61ut2-tF9EQw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/4-w-lucasrap-prod-elvis.mp3?raw=true",
                    "url": "https://soundcloud.com/blxckie/4-w-lucasrap-prod-elvis",
                    "favorited": "false"
                },
                {
                    "name": "Knapsack Dazed",
                    "artist": "Fanservicecollective",
                    "cover": "https://i1.sndcdn.com/artworks-000228074827-hl0329-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/knapsack-dazed.mp3?raw=true",
                    "url": "https://soundcloud.com/fanservicecollective/knapsack-dazed",
                    "favorited": "false"
                },
                {
                    "name": "The Cyka Blyat Song",
                    "artist": "Therussiantv",
                    "cover": "https://i1.sndcdn.com/artworks-000149105157-2bl9yb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-cyka-blyat-song.mp3?raw=true",
                    "url": "https://soundcloud.com/therussiantv/the-cyka-blyat-song",
                    "favorited": "false"
                },
                {
                    "name": "Kawaii Chill Mori Calliope Excuse Me But Could You Please Rip Project Royal Remix",
                    "artist": "Projectroyal",
                    "cover": "https://i1.sndcdn.com/artworks-W9a2qy9Ag3IvK0bF-ZrIYRQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kawaii-chill-mori-calliope-excuse-me-but-could-you-please-rip-project-royal-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/projectroyal/kawaii-chill-mori-calliope-excuse-me-but-could-you-please-rip-project-royal-remix",
                    "favorited": "false"
                },
                {
                    "name": "Gorillaz Feel Good Inc Vamp Remix",
                    "artist": "Djyungvampire13",
                    "cover": "https://i1.sndcdn.com/artworks-000307009146-eb4lsc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gorillaz-feel-good-inc-vamp-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/djyungvampire13/gorillaz-feel-good-inc-vamp-remix",
                    "favorited": "false"
                },
                {
                    "name": "Sunburst",
                    "artist": "Kaivaan",
                    "cover": "https://i1.sndcdn.com/artworks-OLjT4Jym05UzJLbJ-ZKFEVA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sunburst.mp3?raw=true",
                    "url": "https://soundcloud.com/kaivaan/sunburst",
                    "favorited": "false"
                },
                {
                    "name": "Imaginaryexpress",
                    "artist": "Ujico",
                    "cover": "https://i1.sndcdn.com/artworks-EZ0bMPBKbGkYLPY2-8fNQcQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/imaginaryexpress.mp3?raw=true",
                    "url": "https://soundcloud.com/ujico/imaginaryexpress",
                    "favorited": "false"
                },
                {
                    "name": "Inugami Korone Rap God Of Hyrule Prod Miyuri",
                    "artist": "Itsmiyuridesu",
                    "cover": "https://i1.sndcdn.com/artworks-Opp9DVdMc60gXJRz-mSJMcw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/inugami-korone-rap-god-of-hyrule-prod-miyuri.mp3?raw=true",
                    "url": "https://soundcloud.com/itsmiyuridesu/inugami-korone-rap-god-of-hyrule-prod-miyuri",
                    "favorited": "false"
                },
                {
                    "name": "Califormula",
                    "artist": "Tarroofficial",
                    "cover": "https://i1.sndcdn.com/artworks-000146006976-yhzl9l-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/califormula.mp3?raw=true",
                    "url": "https://soundcloud.com/tarroofficial/califormula",
                    "favorited": "false"
                },
                {
                    "name": "Tia Deal With The Devil Kakegurui Op",
                    "artist": "Nactojka",
                    "cover": "https://i1.sndcdn.com/artworks-000673525021-44270l-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tia-deal-with-the-devil-kakegurui-op.mp3?raw=true",
                    "url": "https://soundcloud.com/nactojka/tia-deal-with-the-devil-kakegurui-op",
                    "favorited": "false"
                },
                {
                    "name": "Waifu",
                    "artist": "One_Eyedking",
                    "cover": "https://i1.sndcdn.com/artworks-izunvlNtkRTuuWIW-Q3ny7w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/waifu.mp3?raw=true",
                    "url": "https://soundcloud.com/one_eyedking/waifu",
                    "favorited": "false"
                },
                {
                    "name": "D 7 Beautiful",
                    "artist": "User 909844975",
                    "cover": "https://i1.sndcdn.com/avatars-e0dxRuonWSemq9m1-zvoylw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/d-7-beautiful.mp3?raw=true",
                    "url": "https://soundcloud.com/user-909844975/d-7-beautiful",
                    "favorited": "false"
                },
                {
                    "name": "Trains",
                    "artist": "Altitvde",
                    "cover": "https://i1.sndcdn.com/artworks-000129677667-exqq1z-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/trains.mp3?raw=true",
                    "url": "https://soundcloud.com/altitvde/trains",
                    "favorited": "false"
                },
                {
                    "name": "Android Apartment X Future Girlfriend Love Doesnt Know What Distance Is 9K Thank You 3",
                    "artist": "Android Apartment",
                    "cover": "https://i1.sndcdn.com/artworks-000186086526-dphfzg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/android-apartment-x-future-girlfriend-love-doesnt-know-what-distance-is-9k-thank-you-3.mp3?raw=true",
                    "url": "https://soundcloud.com/android-apartment/android-apartment-x-future-girlfriend-love-doesnt-know-what-distance-is-9k-thank-you-3",
                    "favorited": "false"
                },
                {
                    "name": "Cobalt Attack",
                    "artist": "Imkotori",
                    "cover": "https://i1.sndcdn.com/artworks-8JyWP29hnmm0uypg-pi3mJg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cobalt-attack.mp3?raw=true",
                    "url": "https://soundcloud.com/imkotori/cobalt-attack",
                    "favorited": "false"
                },
                {
                    "name": "You Make Me Go With Rob Gasser And Miyoki",
                    "artist": "Insan3Lik3",
                    "cover": "https://i1.sndcdn.com/artworks-000089097620-o614mw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/you-make-me-go-with-rob-gasser-and-miyoki.mp3?raw=true",
                    "url": "https://soundcloud.com/insan3lik3/you-make-me-go-with-rob-gasser-and-miyoki",
                    "favorited": "false"
                },
                {
                    "name": "Ilm Makai 2",
                    "artist": "Tofupop",
                    "cover": "https://i1.sndcdn.com/artworks-000238954793-21wnr0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ilm-makai-2.mp3?raw=true",
                    "url": "https://soundcloud.com/tofupop/ilm-makai-2",
                    "favorited": "false"
                },
                {
                    "name": "Forzahorizon4 Sunrise Complete",
                    "artist": "Ahmedrift",
                    "cover": "https://i1.sndcdn.com/artworks-000405566100-5lroxa-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/forzahorizon4-sunrise-complete.mp3?raw=true",
                    "url": "https://soundcloud.com/ahmedrift/forzahorizon4-sunrise-complete",
                    "favorited": "false"
                },
                {
                    "name": "Cafe Midnight",
                    "artist": "Leiwaan",
                    "cover": "https://i1.sndcdn.com/artworks-p4uzqojN532zAYtB-VLLEWA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cafe-midnight.mp3?raw=true",
                    "url": "https://soundcloud.com/leiwaan/cafe-midnight",
                    "favorited": "false"
                },
                {
                    "name": "Keep Moving",
                    "artist": "Waiai",
                    "cover": "https://i1.sndcdn.com/artworks-xwPKlmupmfc1d9hW-ZuFYoQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/keep-moving.mp3?raw=true",
                    "url": "https://soundcloud.com/waiai/keep-moving",
                    "favorited": "false"
                },
                {
                    "name": "Heart Gear Self Mastered",
                    "artist": "Midnightbound",
                    "cover": "https://i1.sndcdn.com/artworks-000577507175-1n01xs-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/heart-gear-self-mastered.mp3?raw=true",
                    "url": "https://soundcloud.com/midnightbound/heart-gear-self-mastered",
                    "favorited": "false"
                },
                {
                    "name": "Shaii",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-000518668305-32m13m-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/shaii.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/shaii",
                    "favorited": "false"
                },
                {
                    "name": "Groovin Magic 1",
                    "artist": "Hyy 3",
                    "cover": "https://i1.sndcdn.com/artworks-000182305336-5yixyp-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/groovin-magic-1.mp3?raw=true",
                    "url": "https://soundcloud.com/hyy-3/groovin-magic-1",
                    "favorited": "false"
                },
                {
                    "name": "Galimatias Alina Baraz Fantasy Ramzoid Bootleg",
                    "artist": "Ramzoid",
                    "cover": "https://i1.sndcdn.com/artworks-000136374492-zpsfoc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/galimatias-alina-baraz-fantasy-ramzoid-bootleg.mp3?raw=true",
                    "url": "https://soundcloud.com/ramzoid/galimatias-alina-baraz-fantasy-ramzoid-bootleg",
                    "favorited": "false"
                },
                {
                    "name": "W I N N E R",
                    "artist": "Samuel Von Borsted Castro",
                    "cover": "https://i1.sndcdn.com/artworks-TmhFJi4OzyyhCWRK-ODLJ8g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/w-i-n-n-e-r.mp3?raw=true",
                    "url": "https://soundcloud.com/samuel-von-borsted-castro/w-i-n-n-e-r",
                    "favorited": "false"
                },
                {
                    "name": "Shopkeeper",
                    "artist": "Joshuamorse",
                    "cover": "https://i1.sndcdn.com/artworks-RRXGwWsYy77ZJK56-7LNHbw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/shopkeeper.mp3?raw=true",
                    "url": "https://soundcloud.com/joshuamorse/shopkeeper",
                    "favorited": "false"
                },
                {
                    "name": "Tropical Sprite",
                    "artist": "Puarbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000455539953-j71uh9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tropical-sprite.mp3?raw=true",
                    "url": "https://soundcloud.com/puarbeats/tropical-sprite",
                    "favorited": "false"
                },
                {
                    "name": "Blind_Faith",
                    "artist": "Haywyre",
                    "cover": "https://i1.sndcdn.com/artworks-000450008541-syuwo1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/blind_faith.mp3?raw=true",
                    "url": "https://soundcloud.com/haywyre/blind_faith",
                    "favorited": "false"
                },
                {
                    "name": "Bvck",
                    "artist": "Shotar",
                    "cover": "https://i1.sndcdn.com/artworks-000503326242-xk2ziw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bvck.mp3?raw=true",
                    "url": "https://soundcloud.com/shotar/bvck",
                    "favorited": "false"
                },
                {
                    "name": "The Best Experience Ever By Ash",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000241178200-lx8l4c-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-best-experience-ever-by-ash.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/the-best-experience-ever-by-ash",
                    "favorited": "false"
                },
                {
                    "name": "Gwnsk9Flui5J",
                    "artist": "Simeugosto",
                    "cover": "https://i1.sndcdn.com/artworks-000510920472-425bjk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gwnsk9flui5j.mp3?raw=true",
                    "url": "https://soundcloud.com/simeugosto/gwnsk9flui5j",
                    "favorited": "false"
                },
                {
                    "name": "Xfdadulthood Ep Coming",
                    "artist": "",
                    "cover": "https://i1.sndcdn.com/artworks-xh794fwLj00IQcGD-sPLYQg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/xfdadulthood-ep-coming.mp3?raw=true",
                    "url": "https://soundcloud.com/",
                    "favorited": "false"
                },
                {
                    "name": "Bartender Waifu",
                    "artist": "Flamanted",
                    "cover": "https://i1.sndcdn.com/artworks-000249385994-f82cl4-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bartender-waifu.mp3?raw=true",
                    "url": "https://soundcloud.com/flamanted/bartender-waifu",
                    "favorited": "false"
                },
                {
                    "name": "Complications",
                    "artist": "Choppa Dread Second Page",
                    "cover": "https://i1.sndcdn.com/artworks-1XxNij9XtGm5zkUi-tH2wJA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/complications.mp3?raw=true",
                    "url": "https://soundcloud.com/choppa-dread-second-page/complications",
                    "favorited": "false"
                },
                {
                    "name": "Fool Power Glove Mercenary",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-LxWGP7o0KKSvWPY9-gyPkCQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fool-power-glove-mercenary.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/fool-power-glove-mercenary",
                    "favorited": "false"
                },
                {
                    "name": "Jun Hayakawa With Atsuki Yoshida Song Of The Ancients",
                    "artist": "User5461766",
                    "cover": "https://i1.sndcdn.com/artworks-000282055250-x9k6vk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jun-hayakawa-with-atsuki-yoshida-song-of-the-ancients.mp3?raw=true",
                    "url": "https://soundcloud.com/user5461766/jun-hayakawa-with-atsuki-yoshida-song-of-the-ancients",
                    "favorited": "false"
                },
                {
                    "name": "Kmnz Augmentation",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000516899883-odhttj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kmnz-augmentation.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/kmnz-augmentation",
                    "favorited": "false"
                },
                {
                    "name": "Aether",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-wTkuPhwL4Lb3lDAa-ei00pg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aether.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/aether",
                    "favorited": "false"
                },
                {
                    "name": "Aces To Aces Stay With Me",
                    "artist": "Aji_P",
                    "cover": "https://i1.sndcdn.com/artworks-000264874817-yvx2dm-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aces-to-aces-stay-with-me.mp3?raw=true",
                    "url": "https://soundcloud.com/aji_p/aces-to-aces-stay-with-me",
                    "favorited": "false"
                },
                {
                    "name": "Departure",
                    "artist": "Teo 8",
                    "cover": "https://i1.sndcdn.com/artworks-000144300062-yecffq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/departure.mp3?raw=true",
                    "url": "https://soundcloud.com/teo-8/departure",
                    "favorited": "false"
                },
                {
                    "name": "Tutenstein",
                    "artist": "Prodwex",
                    "cover": "https://i1.sndcdn.com/artworks-uAyHZiVdRdXRwo0Q-FhbzdA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tutenstein.mp3?raw=true",
                    "url": "https://soundcloud.com/prodwex/tutenstein",
                    "favorited": "false"
                },
                {
                    "name": "Drugg",
                    "artist": "Chodeeater",
                    "cover": "https://i1.sndcdn.com/artworks-000597374984-8pxxhs-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/drugg.mp3?raw=true",
                    "url": "https://soundcloud.com/chodeeater/drugg",
                    "favorited": "false"
                },
                {
                    "name": "Yuzu",
                    "artist": "Tofiemusic",
                    "cover": "https://i1.sndcdn.com/artworks-000336969252-m2rn2q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yuzu.mp3?raw=true",
                    "url": "https://soundcloud.com/tofiemusic/yuzu",
                    "favorited": "false"
                },
                {
                    "name": "Major Lazer Lean On Kream Remix",
                    "artist": "Liquid_Lab",
                    "cover": "https://i1.sndcdn.com/artworks-000113856920-cd849r-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/major-lazer-lean-on-kream-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/liquid_lab/major-lazer-lean-on-kream-remix",
                    "favorited": "false"
                },
                {
                    "name": "Wingman Style Mk2",
                    "artist": "Ohnowearefucked",
                    "cover": "https://i1.sndcdn.com/artworks-zuboBvAiwRpklykd-KJAYMA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wingman-style-mk2.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnowearefucked/wingman-style-mk2",
                    "favorited": "false"
                },
                {
                    "name": "Close Your Eyes",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-zIyGUynMYuBJ9dDe-sGFi9g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/close-your-eyes.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/close-your-eyes",
                    "favorited": "false"
                },
                {
                    "name": "Strawberry",
                    "artist": "Jeff Kaale",
                    "cover": "https://i1.sndcdn.com/artworks-000146223018-gka2eu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/strawberry.mp3?raw=true",
                    "url": "https://soundcloud.com/jeff-kaale/strawberry",
                    "favorited": "false"
                },
                {
                    "name": "Let You Know",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-000648070333-zugelk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/let-you-know.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/let-you-know",
                    "favorited": "false"
                },
                {
                    "name": "Daechwita",
                    "artist": "Bangtan",
                    "cover": "https://i1.sndcdn.com/artworks-g0UMfoWyxYZuJrXs-sVJqHw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/daechwita.mp3?raw=true",
                    "url": "https://soundcloud.com/bangtan/daechwita",
                    "favorited": "false"
                },
                {
                    "name": "Aspect",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-000516018099-qkrklc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aspect.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/aspect",
                    "favorited": "false"
                },
                {
                    "name": "Charlotte Bravely You Lia Op",
                    "artist": "Gaby Ruiz 30",
                    "cover": "https://i1.sndcdn.com/artworks-000127185988-k42r18-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/charlotte-bravely-you-lia-op.mp3?raw=true",
                    "url": "https://soundcloud.com/gaby-ruiz-30/charlotte-bravely-you-lia-op",
                    "favorited": "false"
                },
                {
                    "name": "Allisee",
                    "artist": "Vonstorm",
                    "cover": "https://i1.sndcdn.com/artworks-000321817292-mv2jra-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/allisee.mp3?raw=true",
                    "url": "https://soundcloud.com/vonstorm/allisee",
                    "favorited": "false"
                },
                {
                    "name": "Like You",
                    "artist": "Fusq",
                    "cover": "https://i1.sndcdn.com/artworks-000400261191-fmmtom-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/like-you.mp3?raw=true",
                    "url": "https://soundcloud.com/fusq/like-you",
                    "favorited": "false"
                },
                {
                    "name": "Whos Gonna Call Ya ",
                    "artist": "Nelward",
                    "cover": "https://i1.sndcdn.com/artworks-xAjLEkeMO21JFQGU-UhoEXQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/whos-gonna-call-ya-",
                    "url": "https://soundcloud.com/nelward/whos-gonna-call-ya-",
                    "favorited": "false"
                },
                {
                    "name": "Connection",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/connection.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/connection",
                    "favorited": "false"
                },
                {
                    "name": "Kuuro Dont Stop",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-2ku8uQ4KyV1CdM8V-RuuKEQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kuuro-dont-stop.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/kuuro-dont-stop",
                    "favorited": "false"
                },
                {
                    "name": "Greyl Planetarium",
                    "artist": "John Stamos 813877480",
                    "cover": "https://i1.sndcdn.com/avatars-000397483845-yuf8t3-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/greyl-planetarium.mp3?raw=true",
                    "url": "https://soundcloud.com/john-stamos-813877480/greyl-planetarium",
                    "favorited": "false"
                },
                {
                    "name": "Duumu Forward",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000369574614-mlc64k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duumu-forward.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/duumu-forward",
                    "favorited": "false"
                },
                {
                    "name": "Forever Kawaii",
                    "artist": "Nemuiiiiiii 404",
                    "cover": "https://i1.sndcdn.com/artworks-mB4yreqM41DmVpQm-UQiz7w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/forever-kawaii.mp3?raw=true",
                    "url": "https://soundcloud.com/nemuiiiiiii-404/forever-kawaii",
                    "favorited": "false"
                },
                {
                    "name": "Madretsma",
                    "artist": "Lars Dietrich",
                    "cover": "https://i1.sndcdn.com/artworks-000465176154-6mxzqb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/madretsma.mp3?raw=true",
                    "url": "https://soundcloud.com/lars-dietrich/madretsma",
                    "favorited": "false"
                },
                {
                    "name": "Dreamland Singularity Mutrix",
                    "artist": "Singularity",
                    "cover": "https://i1.sndcdn.com/artworks-000073261113-6veswt-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dreamland-singularity-mutrix.mp3?raw=true",
                    "url": "https://soundcloud.com/singularity/dreamland-singularity-mutrix",
                    "favorited": "false"
                },
                {
                    "name": "Dont Rush Feat Prod Patrick Pryor",
                    "artist": "Ricwilsonisme",
                    "cover": "https://i1.sndcdn.com/artworks-000349856004-w0k5go-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dont-rush-feat-prod-patrick-pryor.mp3?raw=true",
                    "url": "https://soundcloud.com/ricwilsonisme/dont-rush-feat-prod-patrick-pryor",
                    "favorited": "false"
                },
                {
                    "name": "Air Port",
                    "artist": "Yossshy",
                    "cover": "https://i1.sndcdn.com/artworks-w7VxjDPYkjl3ar94-fTdioA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/air-port.mp3?raw=true",
                    "url": "https://soundcloud.com/yossshy/air-port",
                    "favorited": "false"
                },
                {
                    "name": "Time Pause",
                    "artist": "Season Team",
                    "cover": "https://i1.sndcdn.com/artworks-000215710063-p7d1qg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/time-pause.mp3?raw=true",
                    "url": "https://soundcloud.com/season-team/time-pause",
                    "favorited": "false"
                },
                {
                    "name": "Adaptation",
                    "artist": "Kuuaden",
                    "cover": "https://i1.sndcdn.com/artworks-000652145014-quyttc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/adaptation.mp3?raw=true",
                    "url": "https://soundcloud.com/kuuaden/adaptation",
                    "favorited": "false"
                },
                {
                    "name": "Lets Get Lit",
                    "artist": "Moshemechant",
                    "cover": "https://i1.sndcdn.com/artworks-000603061837-yv37lh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lets-get-lit.mp3?raw=true",
                    "url": "https://soundcloud.com/moshemechant/lets-get-lit",
                    "favorited": "false"
                },
                {
                    "name": "Fusq Perfume X Moe Shop Superstar W Hentai Dude",
                    "artist": "Doven3",
                    "cover": "https://i1.sndcdn.com/artworks-G941409dC3DwtD2r-D8bb6A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fusq-perfume-x-moe-shop-superstar-w-hentai-dude.mp3?raw=true",
                    "url": "https://soundcloud.com/doven3/fusq-perfume-x-moe-shop-superstar-w-hentai-dude",
                    "favorited": "false"
                },
                {
                    "name": "Backwhen Racks 2",
                    "artist": "Chillchildren",
                    "cover": "https://i1.sndcdn.com/artworks-000216101533-av7j1r-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/backwhen-racks-2.mp3?raw=true",
                    "url": "https://soundcloud.com/chillchildren/backwhen-racks-2",
                    "favorited": "false"
                },
                {
                    "name": "Lil Peep Ft Xxxtentacion Falling Down",
                    "artist": "Lil_Peep",
                    "cover": "https://i1.sndcdn.com/artworks-000407556927-308w8o-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lil-peep-ft-xxxtentacion-falling-down.mp3?raw=true",
                    "url": "https://soundcloud.com/lil_peep/lil-peep-ft-xxxtentacion-falling-down",
                    "favorited": "false"
                },
                {
                    "name": "Blueberry",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000176453198-s4oc9t-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/blueberry.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/blueberry",
                    "favorited": "false"
                },
                {
                    "name": "K On",
                    "artist": "Iamxheero",
                    "cover": "https://i1.sndcdn.com/artworks-SzukBBHeyLiBQ0oe-fHXhtA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/k-on.mp3?raw=true",
                    "url": "https://soundcloud.com/iamxheero/k-on",
                    "favorited": "false"
                },
                {
                    "name": "Toys",
                    "artist": "Sylcmyk",
                    "cover": "https://i1.sndcdn.com/avatars-000295523597-cu1sdg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/toys.mp3?raw=true",
                    "url": "https://soundcloud.com/sylcmyk/toys",
                    "favorited": "false"
                },
                {
                    "name": "Main Heroine",
                    "artist": "Cutegirlsdoingcutethings",
                    "cover": "https://i1.sndcdn.com/artworks-000302193405-avnzgh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/main-heroine.mp3?raw=true",
                    "url": "https://soundcloud.com/cutegirlsdoingcutethings/main-heroine",
                    "favorited": "false"
                },
                {
                    "name": "Wonder Pop",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-W7kkv8LxGP6Aeoqn-j7dZoA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wonder-pop.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/wonder-pop",
                    "favorited": "false"
                },
                {
                    "name": "Standalone",
                    "artist": "Hal Honke",
                    "cover": "https://i1.sndcdn.com/artworks-Nv5jxIcWDJcyev4d-jwBZ3Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/standalone.mp3?raw=true",
                    "url": "https://soundcloud.com/hal-honke/standalone",
                    "favorited": "false"
                },
                {
                    "name": "Aire Colorfc Lilium X7",
                    "artist": "Aire9803",
                    "cover": "https://i1.sndcdn.com/artworks-1cqYSsvyEohHI9oC-91v9gA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aire-colorfc-lilium-x7.mp3?raw=true",
                    "url": "https://soundcloud.com/aire9803/aire-colorfc-lilium-x7",
                    "favorited": "false"
                },
                {
                    "name": "Supremo",
                    "artist": "Pogomix",
                    "cover": "https://i1.sndcdn.com/artworks-sWvMoe2DsrliVsdt-8HjTVg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/supremo.mp3?raw=true",
                    "url": "https://soundcloud.com/pogomix/supremo",
                    "favorited": "false"
                },
                {
                    "name": "The Ultimate Kanna Groove",
                    "artist": "Discandy",
                    "cover": "https://i1.sndcdn.com/artworks-000246873452-hpca9j-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-ultimate-kanna-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/discandy/the-ultimate-kanna-groove",
                    "favorited": "false"
                },
                {
                    "name": "Just Found",
                    "artist": "User 380990491",
                    "cover": "https://i1.sndcdn.com/artworks-j1XjOkLFSl7Deytz-9YZnGg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/just-found.mp3?raw=true",
                    "url": "https://soundcloud.com/user-380990491/just-found",
                    "favorited": "false"
                },
                {
                    "name": "Latte",
                    "artist": "Tsunderetwintails",
                    "cover": "https://i1.sndcdn.com/artworks-000433312569-e7l7fo-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/latte.mp3?raw=true",
                    "url": "https://soundcloud.com/tsunderetwintails/latte",
                    "favorited": "false"
                },
                {
                    "name": "Hot Milk",
                    "artist": "Ujico",
                    "cover": "https://i1.sndcdn.com/artworks-000193989796-kdhn3k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hot-milk.mp3?raw=true",
                    "url": "https://soundcloud.com/ujico/hot-milk",
                    "favorited": "false"
                },
                {
                    "name": "Elevation_Of_Love",
                    "artist": "So",
                    "cover": "https://i1.sndcdn.com/artworks-000476781627-644nfm-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/elevation_of_love.mp3?raw=true",
                    "url": "https://soundcloud.com/so",
                    "favorited": "false"
                },
                {
                    "name": "Jojo Part 2 Battle Tendency 2",
                    "artist": "Dorchas Anvis",
                    "cover": "https://i1.sndcdn.com/artworks-7z0hCfZhaQz4lvU9-TD79dQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jojo-part-2-battle-tendency-2.mp3?raw=true",
                    "url": "https://soundcloud.com/dorchas-anvis/jojo-part-2-battle-tendency-2",
                    "favorited": "false"
                },
                {
                    "name": "Maskedheart Piano Only",
                    "artist": "Iamveryrandom",
                    "cover": "https://i1.sndcdn.com/avatars-000474072579-ygr2gq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/maskedheart-piano-only.mp3?raw=true",
                    "url": "https://soundcloud.com/iamveryrandom/maskedheart-piano-only",
                    "favorited": "false"
                },
                {
                    "name": "Springtime Of Life2019 Rework",
                    "artist": "Reo_0207",
                    "cover": "https://i1.sndcdn.com/artworks-000515530911-mw1t3w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/springtime-of-life2019-rework.mp3?raw=true",
                    "url": "https://soundcloud.com/reo_0207/springtime-of-life2019-rework",
                    "favorited": "false"
                },
                {
                    "name": "Coastal Highway",
                    "artist": "Glitchdroids",
                    "cover": "https://i1.sndcdn.com/artworks-rbwDesjnjWz0UZ0n-DUuxNA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/coastal-highway.mp3?raw=true",
                    "url": "https://soundcloud.com/glitchdroids/coastal-highway",
                    "favorited": "false"
                },
                {
                    "name": "Street Love Wanipai",
                    "artist": "Sakurauwu",
                    "cover": "https://i1.sndcdn.com/artworks-lDMTU1LQyb9bLdBz-nH14KA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/street-love-wanipai.mp3?raw=true",
                    "url": "https://soundcloud.com/sakurauwu/street-love-wanipai",
                    "favorited": "false"
                },
                {
                    "name": "Tik Tok Meme Rap Lyrics Mr Sandman Remix",
                    "artist": "User 760616098",
                    "cover": "https://i1.sndcdn.com/avatars-000682403618-p0ycpa-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tik-tok-meme-rap-lyrics-mr-sandman-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/user-760616098/tik-tok-meme-rap-lyrics-mr-sandman-remix",
                    "favorited": "false"
                },
                {
                    "name": "Departure",
                    "artist": "Unerose",
                    "cover": "https://i1.sndcdn.com/artworks-KnhkwJkgGcPMzpdj-iyLLoQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/departure.mp3?raw=true",
                    "url": "https://soundcloud.com/unerose/departure",
                    "favorited": "false"
                },
                {
                    "name": "Myonmyonmyonmyonmyonmyon",
                    "artist": "Jesse Hunter 8",
                    "cover": "https://i1.sndcdn.com/avatars-000064247935-2ll2xl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/myonmyonmyonmyonmyonmyon.mp3?raw=true",
                    "url": "https://soundcloud.com/jesse-hunter-8/myonmyonmyonmyonmyonmyon",
                    "favorited": "false"
                },
                {
                    "name": "Some Dumbass Shit Vol 3",
                    "artist": "Kloudbug",
                    "cover": "https://i1.sndcdn.com/artworks-000670444507-cclfz7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/some-dumbass-shit-vol-3.mp3?raw=true",
                    "url": "https://soundcloud.com/kloudbug/some-dumbass-shit-vol-3",
                    "favorited": "false"
                },
                {
                    "name": "Moregarlicinmycup",
                    "artist": "Vonstorm",
                    "cover": "https://i1.sndcdn.com/artworks-000257148251-i5ns93-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moregarlicinmycup.mp3?raw=true",
                    "url": "https://soundcloud.com/vonstorm/moregarlicinmycup",
                    "favorited": "false"
                },
                {
                    "name": "Calliope Mori Excuse My Rudeness But Could You Please Rip Roschen Remix",
                    "artist": "Roschentk",
                    "cover": "https://i1.sndcdn.com/avatars-kl1jQoNuOMky9P2B-zXOLtw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/calliope-mori-excuse-my-rudeness-but-could-you-please-rip-roschen-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/roschentk/calliope-mori-excuse-my-rudeness-but-could-you-please-rip-roschen-remix",
                    "favorited": "false"
                },
                {
                    "name": "Nightcola 1",
                    "artist": "",
                    "cover": "https://i1.sndcdn.com/artworks-000393304317-n3go4w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/nightcola-1.mp3?raw=true",
                    "url": "https://soundcloud.com/",

                    "favorited": "false"
                },
                {
                    "name": "Girlfriend Haywyre Remix 1",
                    "artist": "Charlieputh",
                    "cover": "https://i1.sndcdn.com/artworks-uaAJCWqhUYoy6qvx-JNQBRA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/girlfriend-haywyre-remix-1.mp3?raw=true",
                    "url": "https://soundcloud.com/charlieputh/girlfriend-haywyre-remix-1",
                    "favorited": "false"
                },
                {
                    "name": "Mick Gordon The Only Thing They Fear Is You Doom Eternal Ost",
                    "artist": "Ipurdurtle",
                    "cover": "https://i1.sndcdn.com/artworks-000669093034-4w4g6m-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mick-gordon-the-only-thing-they-fear-is-you-doom-eternal-ost.mp3?raw=true",
                    "url": "https://soundcloud.com/ipurdurtle/mick-gordon-the-only-thing-they-fear-is-you-doom-eternal-ost",
                    "favorited": "false"
                },
                {
                    "name": "Brasil",
                    "artist": "Sh1Ruett0",
                    "cover": "https://i1.sndcdn.com/artworks-2WlnEgnXZTvI1qai-wG7Hyw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/brasil.mp3?raw=true",
                    "url": "https://soundcloud.com/sh1ruett0/brasil",
                    "favorited": "false"
                },
                {
                    "name": "So Long",
                    "artist": "Eveline Eevee",
                    "cover": "https://i1.sndcdn.com/artworks-000462202998-bdm6xi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/so-long.mp3?raw=true",
                    "url": "https://soundcloud.com/eveline-eevee/so-long",
                    "favorited": "false"
                },
                {
                    "name": "Melting",
                    "artist": "D41N",
                    "cover": "https://i1.sndcdn.com/artworks-000202732170-w0a753-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/melting.mp3?raw=true",
                    "url": "https://soundcloud.com/d41n/melting",
                    "favorited": "false"
                },
                {
                    "name": "Sithu Aye Moonrise I",
                    "artist": "Shyguysounds",
                    "cover": "https://i1.sndcdn.com/artworks-000271211540-9ofn50-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sithu-aye-moonrise-i.mp3?raw=true",
                    "url": "https://soundcloud.com/shyguysounds/sithu-aye-moonrise-i",
                    "favorited": "false"
                },
                {
                    "name": "Jpom Far Away",
                    "artist": "Koyuki Cafe",
                    "cover": "https://i1.sndcdn.com/artworks-000154265452-tcgcpe-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jpom-far-away.mp3?raw=true",
                    "url": "https://soundcloud.com/koyuki-cafe/jpom-far-away",
                    "favorited": "false"
                },
                {
                    "name": "Suiito",
                    "artist": "Fusq",
                    "cover": "https://i1.sndcdn.com/artworks-000134356859-jtw0so-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/suiito.mp3?raw=true",
                    "url": "https://soundcloud.com/fusq/suiito",
                    "favorited": "false"
                },
                {
                    "name": "Digital Qt",
                    "artist": "Discandy",
                    "cover": "https://i1.sndcdn.com/artworks-000549577038-relkj9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/digital-qt.mp3?raw=true",
                    "url": "https://soundcloud.com/discandy/digital-qt",
                    "favorited": "false"
                },
                {
                    "name": "Courtesy",
                    "artist": "Club2Tokyo",
                    "cover": "https://i1.sndcdn.com/artworks-wAW1UGmPvxu6YVmb-HN2mug-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/courtesy.mp3?raw=true",
                    "url": "https://soundcloud.com/club2tokyo/courtesy",
                    "favorited": "false"
                },
                {
                    "name": "Wavy",
                    "artist": "Akiromusic",
                    "cover": "https://i1.sndcdn.com/artworks-000213513040-qj634n-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wavy.mp3?raw=true",
                    "url": "https://soundcloud.com/akiromusic/wavy",
                    "favorited": "false"
                },
                {
                    "name": "M E G A Relaxed",
                    "artist": "Earthboyadvance",
                    "cover": "https://i1.sndcdn.com/artworks-WnyID1vEtIaQ8CGR-VU75fg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/m-e-g-a-relaxed.mp3?raw=true",
                    "url": "https://soundcloud.com/earthboyadvance/m-e-g-a-relaxed",
                    "favorited": "false"
                },
                {
                    "name": "In My Brain",
                    "artist": "Inteus666",
                    "cover": "https://i1.sndcdn.com/artworks-000315995286-a2l680-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/in-my-brain.mp3?raw=true",
                    "url": "https://soundcloud.com/inteus666/in-my-brain",
                    "favorited": "false"
                },
                {
                    "name": "Fefe Feat Nicki Minaj",
                    "artist": "Scumgang6Ix9Ine",
                    "cover": "https://i1.sndcdn.com/artworks-000376457088-fexpmd-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fefe-feat-nicki-minaj.mp3?raw=true",
                    "url": "https://soundcloud.com/scumgang6ix9ine/fefe-feat-nicki-minaj",
                    "favorited": "false"
                },
                {
                    "name": "Ghibli House",
                    "artist": "Bluesatellite",
                    "cover": "https://i1.sndcdn.com/artworks-000164845596-4rh4xj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ghibli-house.mp3?raw=true",
                    "url": "https://soundcloud.com/bluesatellite/ghibli-house",
                    "favorited": "false"
                },
                {
                    "name": "Junyii Ep 2018",
                    "artist": "Chillchildren",
                    "cover": "https://i1.sndcdn.com/artworks-000357155919-4o54ds-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/junyii-ep-2018.mp3?raw=true",
                    "url": "https://soundcloud.com/chillchildren/junyii-ep-2018",
                    "favorited": "false"
                },
                {
                    "name": "Moonless Night",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-000452316942-ytnl1i-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moonless-night.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/moonless-night",
                    "favorited": "false"
                },
                {
                    "name": "The City Plot",
                    "artist": "Kknk",
                    "cover": "https://i1.sndcdn.com/artworks-f8oHWizM7Lp3798b-52IVeQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-city-plot.mp3?raw=true",
                    "url": "https://soundcloud.com/kknk/the-city-plot",
                    "favorited": "false"
                },
                {
                    "name": "If Youre Night Running Say So Tripleq",
                    "artist": "Ouiouibaguette",
                    "cover": "https://i1.sndcdn.com/artworks-J8voaGI31hstkRGz-1N3JFg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/if-youre-night-running-say-so-tripleq.mp3?raw=true",
                    "url": "https://soundcloud.com/ouiouibaguette/if-youre-night-running-say-so-tripleq",
                    "favorited": "false"
                },
                {
                    "name": "Gojii R U S S E L B U C K Heart Mender Tenkitsune Remix",
                    "artist": "Hyperpoprecords",
                    "cover": "https://i1.sndcdn.com/artworks-000193628980-cxb23e-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gojii-r-u-s-s-e-l-b-u-c-k-heart-mender-tenkitsune-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/hyperpoprecords/gojii-r-u-s-s-e-l-b-u-c-k-heart-mender-tenkitsune-remix",
                    "favorited": "false"
                },
                {
                    "name": "Shijoshugi Adtruck Full Ver",
                    "artist": "Wolfbin",
                    "cover": "https://i1.sndcdn.com/artworks-jdUD1GInz7syyyya-laBMBA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/shijoshugi-adtruck-full-ver.mp3?raw=true",
                    "url": "https://soundcloud.com/wolfbin/shijoshugi-adtruck-full-ver",
                    "favorited": "false"
                },
                {
                    "name": "I Beat My Cock To Mario",
                    "artist": "Dxsbond",
                    "cover": "https://i1.sndcdn.com/artworks-HQgCNXmc3eI6JayL-u0nCug-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/i-beat-my-cock-to-mario.mp3?raw=true",
                    "url": "https://soundcloud.com/dxsbond/i-beat-my-cock-to-mario",
                    "favorited": "false"
                },
                {
                    "name": "Mysticwave And Waterfall Final Fantasy Mq 2021",
                    "artist": "Rukunetsu",
                    "cover": "https://i1.sndcdn.com/artworks-0u5iMKw2VHUBNgt1-EpEseA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mysticwave-and-waterfall-final-fantasy-mq-2021.mp3?raw=true",
                    "url": "https://soundcloud.com/rukunetsu/mysticwave-and-waterfall-final-fantasy-mq-2021",
                    "favorited": "false"
                },
                {
                    "name": "Indoor Song",
                    "artist": "Tsunderetwintails",
                    "cover": "https://i1.sndcdn.com/artworks-YDjPfdmNyPTarFsS-DcxYDw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/indoor-song.mp3?raw=true",
                    "url": "https://soundcloud.com/tsunderetwintails/indoor-song",
                    "favorited": "false"
                },
                {
                    "name": "Festival",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000243150558-5iacmo-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/festival.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/festival",
                    "favorited": "false"
                },
                {
                    "name": "Duumu Illuminate",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000217802636-ksyqz3-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duumu-illuminate.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/duumu-illuminate",
                    "favorited": "false"
                },
                {
                    "name": "Captor Sakura 1",
                    "artist": "Lordsun1",
                    "cover": "https://i1.sndcdn.com/artworks-000175708789-epk8j6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/captor-sakura-1.mp3?raw=true",
                    "url": "https://soundcloud.com/lordsun1/captor-sakura-1",
                    "favorited": "false"
                },
                {
                    "name": "Soupfinal",
                    "artist": "Verymell0H",
                    "cover": "https://i1.sndcdn.com/avatars-AWcrbNSiV1R1m1ty-zUhWaA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/soupfinal.mp3?raw=true",
                    "url": "https://soundcloud.com/verymell0h/soupfinal",
                    "favorited": "false"
                },
                {
                    "name": "Gelato",
                    "artist": "Crime Tech",
                    "cover": "https://i1.sndcdn.com/artworks-000354697464-67mkac-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gelato.mp3?raw=true",
                    "url": "https://soundcloud.com/crime-tech/gelato",
                    "favorited": "false"
                },
                {
                    "name": "Yasuha Fly Day Chinatown Remix",
                    "artist": "Knightym8",
                    "cover": "https://i1.sndcdn.com/artworks-Mirhp6vdnzoBcD1c-u87m2g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yasuha-fly-day-chinatown-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/knightym8/yasuha-fly-day-chinatown-remix",
                    "favorited": "false"
                },
                {
                    "name": "Doki Doki Literature Club Ost Your Reality Credits",
                    "artist": "User 892096870",
                    "cover": "https://i1.sndcdn.com/artworks-000288632567-c1y67m-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/doki-doki-literature-club-ost-your-reality-credits.mp3?raw=true",
                    "url": "https://soundcloud.com/user-892096870/doki-doki-literature-club-ost-your-reality-credits",
                    "favorited": "false"
                },
                {
                    "name": "Bloodcode X Cosmicosmo Paradise Plaza Featuring Tofuku Tenkitsune Remix",
                    "artist": "Tenkitsunemusic",
                    "cover": "https://i1.sndcdn.com/artworks-000218171844-m5ydn4-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bloodcode-x-cosmicosmo-paradise-plaza-featuring-tofuku-tenkitsune-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/tenkitsunemusic/bloodcode-x-cosmicosmo-paradise-plaza-featuring-tofuku-tenkitsune-remix",
                    "favorited": "false"
                },
                {
                    "name": "Moneko",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-du8Ygn0TJyYH33ji-I2iNag-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moneko.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/moneko",
                    "favorited": "false"
                },
                {
                    "name": "Xs Project Vs Konnekt Cocaine",
                    "artist": "Xsproject",
                    "cover": "https://i1.sndcdn.com/artworks-000020753153-jgv6ed-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/xs-project-vs-konnekt-cocaine.mp3?raw=true",
                    "url": "https://soundcloud.com/xsproject/xs-project-vs-konnekt-cocaine",
                    "favorited": "false"
                },
                {
                    "name": "Vanguard",
                    "artist": "Midnightbound",
                    "cover": "https://i1.sndcdn.com/artworks-000611548690-xk2m77-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vanguard.mp3?raw=true",
                    "url": "https://soundcloud.com/midnightbound/vanguard",
                    "favorited": "false"
                },
                {
                    "name": "Terror N Boujee",
                    "artist": "Absolute Terror",
                    "cover": "https://i1.sndcdn.com/artworks-000207178163-1d24mb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/terror-n-boujee.mp3?raw=true",
                    "url": "https://soundcloud.com/absolute-terror/terror-n-boujee",
                    "favorited": "false"
                },
                {
                    "name": "Nazo No Kanojo X 12 Koi No",
                    "artist": "Takasakisensei",
                    "cover": "https://i1.sndcdn.com/artworks-000059754810-kc34mh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/nazo-no-kanojo-x-12-koi-no.mp3?raw=true",
                    "url": "https://soundcloud.com/takasakisensei/nazo-no-kanojo-x-12-koi-no",
                    "favorited": "false"
                },
                {
                    "name": "Forever My Dream Girl",
                    "artist": "Taj Pierre",
                    "cover": "https://i1.sndcdn.com/artworks-QAeJoS7RV7q1UN0X-YIIDoQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/forever-my-dream-girl.mp3?raw=true",
                    "url": "https://soundcloud.com/taj-pierre/forever-my-dream-girl",
                    "favorited": "false"
                },
                {
                    "name": "Duffy Mercy Unes T Zhou Remix",
                    "artist": "Itsaxam",
                    "cover": "https://i1.sndcdn.com/artworks-000383769693-s0gcrg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/duffy-mercy-unes-t-zhou-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/itsaxam/duffy-mercy-unes-t-zhou-remix",
                    "favorited": "false"
                },
                {
                    "name": "Seks The Soundtrack N163",
                    "artist": "Plrusek Chan",
                    "cover": "https://i1.sndcdn.com/avatars-696S9hQ7Gy0GzsPL-L8RVZw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/seks-the-soundtrack-n163.mp3?raw=true",
                    "url": "https://soundcloud.com/plrusek-chan/seks-the-soundtrack-n163",
                    "favorited": "false"
                },
                {
                    "name": "Souuntclout Dollrz Disstrak Wyung Paizuri Prodkokonutts",
                    "artist": "Lustshaker",
                    "cover": "https://i1.sndcdn.com/artworks-000407128107-gttnyj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/souuntclout-dollrz-disstrak-wyung-paizuri-prodkokonutts.mp3?raw=true",
                    "url": "https://soundcloud.com/lustshaker/souuntclout-dollrz-disstrak-wyung-paizuri-prodkokonutts",
                    "favorited": "false"
                },
                {
                    "name": "Broccoli Confetti",
                    "artist": "Frostrific",
                    "cover": "https://i1.sndcdn.com/artworks-000565262633-aavfug-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/broccoli-confetti.mp3?raw=true",
                    "url": "https://soundcloud.com/frostrific/broccoli-confetti",
                    "favorited": "false"
                },
                {
                    "name": "Chocolate Groove",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-000302052900-mssadc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chocolate-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/chocolate-groove",
                    "favorited": "false"
                },
                {
                    "name": "Save Me Remix",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-iV0D3dC6PP3dKFjB-TgXyvQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/save-me-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/save-me-remix",
                    "favorited": "false"
                },
                {
                    "name": "D4L9Ybptm7Oa",
                    "artist": "Sakurauwu",
                    "cover": "https://i1.sndcdn.com/artworks-1gMELD7AQcLpFWRt-JqzM5A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/d4l9ybptm7oa.mp3?raw=true",
                    "url": "https://soundcloud.com/sakurauwu/d4l9ybptm7oa",
                    "favorited": "false"
                },
                {
                    "name": "Greyl Planetarium",
                    "artist": "Discolithe",
                    "cover": "https://i1.sndcdn.com/artworks-000490046271-5uyrrb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/greyl-planetarium.mp3?raw=true",
                    "url": "https://soundcloud.com/discolithe/greyl-planetarium",
                    "favorited": "false"
                },
                {
                    "name": "Demons In My Soul",
                    "artist": "Youngpirelli",
                    "cover": "https://i1.sndcdn.com/artworks-Yfz6MEm2eG3E3g3X-MrdbuQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/demons-in-my-soul.mp3?raw=true",
                    "url": "https://soundcloud.com/youngpirelli/demons-in-my-soul",
                    "favorited": "false"
                },
                {
                    "name": "The Wonders Of The Emerald Woods",
                    "artist": "Karl Brueggemann",
                    "cover": "https://i1.sndcdn.com/artworks-hYY7pSjCxDrtNkUl-xx7Ytg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-wonders-of-the-emerald-woods.mp3?raw=true",
                    "url": "https://soundcloud.com/karl-brueggemann/the-wonders-of-the-emerald-woods",
                    "favorited": "false"
                },
                {
                    "name": "Dorinku",
                    "artist": "W Fu",
                    "cover": "https://i1.sndcdn.com/artworks-000135514824-qmsdeb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dorinku.mp3?raw=true",
                    "url": "https://soundcloud.com/w-fu/dorinku",
                    "favorited": "false"
                },
                {
                    "name": "Senseiplease Use Me Your Fuck Toy",
                    "artist": "Nemuiiiiiii 404",
                    "cover": "https://i1.sndcdn.com/artworks-000283036958-flcc6x-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/senseiplease-use-me-your-fuck-toy.mp3?raw=true",
                    "url": "https://soundcloud.com/nemuiiiiiii-404/senseiplease-use-me-your-fuck-toy",
                    "favorited": "false"
                },
                {
                    "name": "Diode",
                    "artist": "Happycolababy",
                    "cover": "https://i1.sndcdn.com/artworks-wxNamsaZdeM9PCGT-sea9qw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/diode.mp3?raw=true",
                    "url": "https://soundcloud.com/happycolababy/diode",
                    "favorited": "false"
                },
                {
                    "name": "Bedtime Stories",
                    "artist": "Nyonofficial",
                    "cover": "https://i1.sndcdn.com/artworks-000221359771-zzzko0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bedtime-stories.mp3?raw=true",
                    "url": "https://soundcloud.com/nyonofficial/bedtime-stories",
                    "favorited": "false"
                },
                {
                    "name": "Tokyo Chopp",
                    "artist": "Kore Wa Hentai",
                    "cover": "https://i1.sndcdn.com/artworks-000108523044-xk2w9j-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tokyo-chopp.mp3?raw=true",
                    "url": "https://soundcloud.com/kore-wa-hentai/tokyo-chopp",
                    "favorited": "false"
                },
                {
                    "name": "184A",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-dQBkn4baJ762MfAR-Vg7yGw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/184a.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/184a",
                    "favorited": "false"
                },
                {
                    "name": "Hng Android52 Edit",
                    "artist": "Android52",
                    "cover": "https://i1.sndcdn.com/artworks-000382367829-buayer-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hng-android52-edit.mp3?raw=true",
                    "url": "https://soundcloud.com/android52/hng-android52-edit",
                    "favorited": "false"
                },
                {
                    "name": "Knight",
                    "artist": "Die_Xteage666",
                    "cover": "https://i1.sndcdn.com/artworks-ojuWkPAcCi8Vzccn-iQymgg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/knight.mp3?raw=true",
                    "url": "https://soundcloud.com/die_xteage666/knight",
                    "favorited": "false"
                },
                {
                    "name": "Difficulties",
                    "artist": "Bringyourknapsack",
                    "cover": "https://i1.sndcdn.com/artworks-000575547935-ujbr4t-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/difficulties.mp3?raw=true",
                    "url": "https://soundcloud.com/bringyourknapsack/difficulties",
                    "favorited": "false"
                },
                {
                    "name": "Bars No Jutsu 1",
                    "artist": "User 44044298",
                    "cover": "https://i1.sndcdn.com/artworks-t4EgRCzE6EVF1ysP-1t7oTA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bars-no-jutsu-1.mp3?raw=true",
                    "url": "https://soundcloud.com/user-44044298/bars-no-jutsu-1",
                    "favorited": "false"
                },
                {
                    "name": "Cancer",
                    "artist": "Feeneyyy",
                    "cover": "https://i1.sndcdn.com/artworks-000226938505-tmf5u2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cancer.mp3?raw=true",
                    "url": "https://soundcloud.com/feeneyyy/cancer",
                    "favorited": "false"
                },
                {
                    "name": "Living Hell",
                    "artist": "Sappy94",
                    "cover": "https://i1.sndcdn.com/artworks-000593331462-5c3d7d-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/living-hell.mp3?raw=true",
                    "url": "https://soundcloud.com/sappy94/living-hell",
                    "favorited": "false"
                },
                {
                    "name": "Cringe Cat Remix",
                    "artist": "Shantyshark",
                    "cover": "https://i1.sndcdn.com/avatars-ywNJTxED8PqV7Z0Y-ZxICsQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cringe-cat-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/shantyshark/cringe-cat-remix",
                    "favorited": "false"
                },
                {
                    "name": "Jeddi Lucius S",
                    "artist": "Jeddiblessyou",
                    "cover": "https://i1.sndcdn.com/artworks-mAa264FBF9Cmrmiy-Zvw7OA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jeddi-lucius-s.mp3?raw=true",
                    "url": "https://soundcloud.com/jeddiblessyou/jeddi-lucius-s",
                    "favorited": "false"
                },
                {
                    "name": "Cat Says Meow",
                    "artist": "Enzo Capun 271692709",
                    "cover": "https://i1.sndcdn.com/artworks-otc6RW55VU6Edv54-p0Z1wA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cat-says-meow.mp3?raw=true",
                    "url": "https://soundcloud.com/enzo-capun-271692709/cat-says-meow",
                    "favorited": "false"
                },
                {
                    "name": "Take Care",
                    "artist": "P Sus",
                    "cover": "https://i1.sndcdn.com/artworks-P8LgzbXmUgGnwOHA-9MpVmA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/take-care.mp3?raw=true",
                    "url": "https://soundcloud.com/p-sus/take-care",
                    "favorited": "false"
                },
                {
                    "name": "Mondays",
                    "artist": "Frostrific",
                    "cover": "https://i1.sndcdn.com/artworks-000565262288-0ejbi5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mondays.mp3?raw=true",
                    "url": "https://soundcloud.com/frostrific/mondays",
                    "favorited": "false"
                },
                {
                    "name": "Trouble",
                    "artist": "Originate 1",
                    "cover": "https://i1.sndcdn.com/artworks-000505522872-4lp3gd-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/trouble.mp3?raw=true",
                    "url": "https://soundcloud.com/originate-1/trouble",
                    "favorited": "false"
                },
                {
                    "name": "Kiss In The City",
                    "artist": "Taj Pierre",
                    "cover": "https://i1.sndcdn.com/artworks-XGe3flEyYO9YcVzF-Gtc9kQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kiss-in-the-city.mp3?raw=true",
                    "url": "https://soundcloud.com/taj-pierre/kiss-in-the-city",
                    "favorited": "false"
                },
                {
                    "name": "Megumin Konosuba Ed Miraie Remix",
                    "artist": "Semimarii",
                    "cover": "https://i1.sndcdn.com/artworks-000555456939-12bec8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/megumin-konosuba-ed-miraie-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/semimarii/megumin-konosuba-ed-miraie-remix",
                    "favorited": "false"
                },
                {
                    "name": "Crawling",
                    "artist": "Ohnowearefucked",
                    "cover": "https://i1.sndcdn.com/artworks-d7UPfd8olQyalQs4-8zByOw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crawling.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnowearefucked/crawling",
                    "favorited": "false"
                },
                {
                    "name": "Hopex Earthquake Feat Ugo Melone",
                    "artist": "Bass Boost Hd",
                    "cover": "https://i1.sndcdn.com/artworks-000285491507-m89qup-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hopex-earthquake-feat-ugo-melone.mp3?raw=true",
                    "url": "https://soundcloud.com/bass-boost-hd/hopex-earthquake-feat-ugo-melone",
                    "favorited": "false"
                },
                {
                    "name": "Joey Trap Squidward Nose Www",
                    "artist": "Braceface_Niyya",
                    "cover": "https://i1.sndcdn.com/artworks-JXKTrTjZluQI9rTz-K9ZjxQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/joey-trap-squidward-nose-www.mp3?raw=true",
                    "url": "https://soundcloud.com/braceface_niyya/joey-trap-squidward-nose-www",
                    "favorited": "false"
                },
                {
                    "name": "Beach",
                    "artist": "Ollygon",
                    "cover": "https://i1.sndcdn.com/artworks-000334822761-l6eqvh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/beach.mp3?raw=true",
                    "url": "https://soundcloud.com/ollygon/beach",
                    "favorited": "false"
                },
                {
                    "name": "In The Rough",
                    "artist": "Puarbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000306990825-zbqye5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/in-the-rough.mp3?raw=true",
                    "url": "https://soundcloud.com/puarbeats/in-the-rough",
                    "favorited": "false"
                },
                {
                    "name": "Loop That I Messed Around With",
                    "artist": "D41N",
                    "cover": "https://i1.sndcdn.com/artworks-000319527708-wggzeq-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/loop-that-i-messed-around-with.mp3?raw=true",
                    "url": "https://soundcloud.com/d41n/loop-that-i-messed-around-with",
                    "favorited": "false"
                },
                {
                    "name": "Spicy Kotori Remix",
                    "artist": "Imkotori",
                    "cover": "https://i1.sndcdn.com/artworks-DbTwFfp1QNeQV3Fc-Sr03ag-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/spicy-kotori-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/imkotori/spicy-kotori-remix",
                    "favorited": "false"
                },
                {
                    "name": "Kaskade Will K Flip Reset",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-GN2UZVsEreLAm6VD-Lrdm4g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kaskade-will-k-flip-reset.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/kaskade-will-k-flip-reset",
                    "favorited": "false"
                },
                {
                    "name": "Airline",
                    "artist": "Lmo21",
                    "cover": "https://i1.sndcdn.com/artworks-000196344805-lkevwu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/airline.mp3?raw=true",
                    "url": "https://soundcloud.com/lmo21/airline",
                    "favorited": "false"
                },
                {
                    "name": "Action 2020 Remaster",
                    "artist": "Marsbar9",
                    "cover": "https://i1.sndcdn.com/artworks-XzSRXSja7p5ZZo9I-Rq6iXw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/action-2020-remaster.mp3?raw=true",
                    "url": "https://soundcloud.com/marsbar9/action-2020-remaster",
                    "favorited": "false"
                },
                {
                    "name": "Sweet Medicine 20000 Meilen",
                    "artist": "Sweet Medicine",
                    "cover": "https://i1.sndcdn.com/artworks-000676359874-4rs8yl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sweet-medicine-20000-meilen.mp3?raw=true",
                    "url": "https://soundcloud.com/sweet-medicine/sweet-medicine-20000-meilen",
                    "favorited": "false"
                },
                {
                    "name": "Cascade W Yung Anh",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000176453563-slha26-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cascade-w-yung-anh.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/cascade-w-yung-anh",
                    "favorited": "false"
                },
                {
                    "name": "Junko",
                    "artist": "Nicholas Paige 237293707",
                    "cover": "https://i1.sndcdn.com/artworks-MPXHrC5ilg3KhNoH-dtCs0g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/junko.mp3?raw=true",
                    "url": "https://soundcloud.com/nicholas-paige-237293707/junko",
                    "favorited": "false"
                },
                {
                    "name": "Take Me Home",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-000508634790-29j772-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/take-me-home.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/take-me-home",
                    "favorited": "false"
                },
                {
                    "name": "Dance Fusion2Dtm",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dance-fusion2dtm.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/dance-fusion2dtm",
                    "favorited": "false"
                },
                {
                    "name": "Wristsoflashy",
                    "artist": "Feeneyyy",
                    "cover": "https://i1.sndcdn.com/artworks-000431724240-9jgc06-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wristsoflashy.mp3?raw=true",
                    "url": "https://soundcloud.com/feeneyyy/wristsoflashy",
                    "favorited": "false"
                },
                {
                    "name": "Tapi Tapi",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000588221324-2sg8ug-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tapi-tapi.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/tapi-tapi",
                    "favorited": "false"
                },
                {
                    "name": "Lockeddown",
                    "artist": "Skylar_Allen",
                    "cover": "https://i1.sndcdn.com/artworks-SZ4TKQyfdyNTmx55-LlADzA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lockeddown.mp3?raw=true",
                    "url": "https://soundcloud.com/skylar_allen/lockeddown",
                    "favorited": "false"
                },
                {
                    "name": "Tell Em Bitchez",
                    "artist": "Backwoodboi",
                    "cover": "https://i1.sndcdn.com/artworks-000326089476-hwyqn7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tell-em-bitchez.mp3?raw=true",
                    "url": "https://soundcloud.com/backwoodboi/tell-em-bitchez",
                    "favorited": "false"
                },
                {
                    "name": "Russian Techno Hardbass Mix",
                    "artist": "Tom Whitehead 5",
                    "cover": "https://i1.sndcdn.com/avatars-000453654195-l3q6hu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/russian-techno-hardbass-mix.mp3?raw=true",
                    "url": "https://soundcloud.com/tom-whitehead-5/russian-techno-hardbass-mix",
                    "favorited": "false"
                },
                {
                    "name": "Icy Vindur",
                    "artist": "A Himitsu",
                    "cover": "https://i1.sndcdn.com/artworks-000095891208-2ooi28-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/icy-vindur.mp3?raw=true",
                    "url": "https://soundcloud.com/a-himitsu/icy-vindur",
                    "favorited": "false"
                },
                {
                    "name": "Akane",
                    "artist": "Android52",
                    "cover": "https://i1.sndcdn.com/artworks-000645595564-igjlty-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/akane.mp3?raw=true",
                    "url": "https://soundcloud.com/android52/akane",
                    "favorited": "false"
                },
                {
                    "name": "Wormrave Remix",
                    "artist": "Ayyyyitsbugcore",
                    "cover": "https://i1.sndcdn.com/artworks-ogFbgGkQ3H4EZrgn-ozH8Mg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wormrave-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/ayyyyitsbugcore/wormrave-remix",
                    "favorited": "false"
                },
                {
                    "name": "365A",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-lqGmxD8yjutYASsR-EtKRQQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/365a.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/365a",
                    "favorited": "false"
                },
                {
                    "name": "Childish",
                    "artist": "Unknownfornow",
                    "cover": "https://i1.sndcdn.com/artworks-000133913570-heou9r-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/childish.mp3?raw=true",
                    "url": "https://soundcloud.com/unknownfornow/childish",
                    "favorited": "false"
                },
                {
                    "name": "Broke N",
                    "artist": "Bearfoott",
                    "cover": "https://i1.sndcdn.com/artworks-000348447306-k7lgsi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/broke-n.mp3?raw=true",
                    "url": "https://soundcloud.com/bearfoott/broke-n",
                    "favorited": "false"
                },
                {
                    "name": "Holy Ghost",
                    "artist": "Kloudbug",
                    "cover": "https://i1.sndcdn.com/artworks-000372952713-erf1zf-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/holy-ghost.mp3?raw=true",
                    "url": "https://soundcloud.com/kloudbug/holy-ghost",
                    "favorited": "false"
                },
                {
                    "name": "I Know Where Im Going",
                    "artist": "Christianmk",
                    "cover": "https://i1.sndcdn.com/artworks-000372780177-mfmqgr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/i-know-where-im-going.mp3?raw=true",
                    "url": "https://soundcloud.com/christianmk/i-know-where-im-going",
                    "favorited": "false"
                },
                {
                    "name": "City Slickers",
                    "artist": "Panthurr",
                    "cover": "https://i1.sndcdn.com/artworks-000156178581-62epl2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/city-slickers.mp3?raw=true",
                    "url": "https://soundcloud.com/panthurr/city-slickers",
                    "favorited": "false"
                },
                {
                    "name": "Shatter Wsin",
                    "artist": "3Treflip",
                    "cover": "https://i1.sndcdn.com/artworks-ZaSlz5MPNrotGNvO-uRiKmg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/shatter-wsin.mp3?raw=true",
                    "url": "https://soundcloud.com/3treflip/shatter-wsin",
                    "favorited": "false"
                },
                {
                    "name": "Warzone",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-Q8JmyPnD554y4mS0-hzuCCw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/warzone.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/warzone",
                    "favorited": "false"
                },
                {
                    "name": "Droptek Back 2 U",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-BBYhY1x3y8CTJ1fE-UYo2SA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/droptek-back-2-u.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/droptek-back-2-u",
                    "favorited": "false"
                },
                {
                    "name": "When Im Space Luluco",
                    "artist": "Shinoya",
                    "cover": "https://i1.sndcdn.com/artworks-000173018617-2f31zv-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/when-im-space-luluco.mp3?raw=true",
                    "url": "https://soundcloud.com/shinoya/when-im-space-luluco",
                    "favorited": "false"
                },
                {
                    "name": "Fatb Hyukbae",
                    "artist": "Fatb1",
                    "cover": "https://i1.sndcdn.com/artworks-000352780266-cbbbog-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fatb-hyukbae.mp3?raw=true",
                    "url": "https://soundcloud.com/fatb1/fatb-hyukbae",
                    "favorited": "false"
                },
                {
                    "name": "Coffee Instrumental",
                    "artist": "Acestoaces",
                    "cover": "https://i1.sndcdn.com/artworks-000209610742-0084fa-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/coffee-instrumental.mp3?raw=true",
                    "url": "https://soundcloud.com/acestoaces/coffee-instrumental",
                    "favorited": "false"
                },
                {
                    "name": "1000 Playas",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-yYZyXlRlypyTPyCC-G3tzNQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/1000-playas.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/1000-playas",
                    "favorited": "false"
                },
                {
                    "name": "Major 7Th",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/major-7th.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/major-7th",
                    "favorited": "false"
                },
                {
                    "name": "Gems W Sin",
                    "artist": "Puarbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000325206916-m5xwer-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gems-w-sin.mp3?raw=true",
                    "url": "https://soundcloud.com/puarbeats/gems-w-sin",
                    "favorited": "false"
                },
                {
                    "name": "Level",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000243149832-jt193u-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/level.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/level",
                    "favorited": "false"
                },
                {
                    "name": "Louis The Child Its Strange Ramzoid Remix",
                    "artist": "Ramzoid",
                    "cover": "https://i1.sndcdn.com/artworks-000150260362-g4on4k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/louis-the-child-its-strange-ramzoid-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/ramzoid/louis-the-child-its-strange-ramzoid-remix",
                    "favorited": "false"
                },
                {
                    "name": "Gracidea",
                    "artist": "Yitakulxiv",
                    "cover": "https://i1.sndcdn.com/artworks-sbleKbRV0rvuL6wd-nDUU1Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gracidea.mp3?raw=true",
                    "url": "https://soundcloud.com/yitakulxiv/gracidea",
                    "favorited": "false"
                },
                {
                    "name": "Let Me Take You Back",
                    "artist": "User 28144023",
                    "cover": "https://i1.sndcdn.com/artworks-000260640836-3a7psj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/let-me-take-you-back.mp3?raw=true",
                    "url": "https://soundcloud.com/user-28144023/let-me-take-you-back",
                    "favorited": "false"
                },
                {
                    "name": "Scavenger",
                    "artist": "Sheltr666",
                    "cover": "https://i1.sndcdn.com/artworks-000312026124-u01wb6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/scavenger.mp3?raw=true",
                    "url": "https://soundcloud.com/sheltr666/scavenger",
                    "favorited": "false"
                },
                {
                    "name": "Closerthanyou",
                    "artist": "Williamblack",
                    "cover": "https://i1.sndcdn.com/artworks-TGbQGRd7snyg3OyP-RDt7xA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/closerthanyou.mp3?raw=true",
                    "url": "https://soundcloud.com/williamblack/closerthanyou",
                    "favorited": "false"
                },
                {
                    "name": "Triple Six",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-mmlH4chJSg3MD8Ky-5nbhxg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/triple-six.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/triple-six",
                    "favorited": "false"
                },
                {
                    "name": "Alone",
                    "artist": "Tsakari",
                    "cover": "https://i1.sndcdn.com/artworks-000134171781-rdr66l-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/alone.mp3?raw=true",
                    "url": "https://soundcloud.com/tsakari/alone",
                    "favorited": "false"
                },
                {
                    "name": "Count It",
                    "artist": "Motatnz",
                    "cover": "https://i1.sndcdn.com/artworks-000240660166-d0wkoe-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/count-it.mp3?raw=true",
                    "url": "https://soundcloud.com/motatnz/count-it",
                    "favorited": "false"
                },
                {
                    "name": "Di",
                    "artist": "Trnxlty",
                    "cover": "https://i1.sndcdn.com/artworks-nzcTrw2mKsncME6q-Uvvohg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/di",
                    "url": "https://soundcloud.com/trnxlty/di",
                    "favorited": "false"
                },
                {
                    "name": "Corona",
                    "artist": "Divine",
                    "cover": "https://i1.sndcdn.com/artworks-000351043866-fgy49f-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/corona.mp3?raw=true",
                    "url": "https://soundcloud.com/divine/corona",
                    "favorited": "false"
                },
                {
                    "name": "Fifth",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fifth.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/fifth",
                    "favorited": "false"
                },
                {
                    "name": "Afterlifeep",
                    "artist": "Youngpirelli",
                    "cover": "https://i1.sndcdn.com/artworks-000235136062-k0sslx-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/afterlifeep.mp3?raw=true",
                    "url": "https://soundcloud.com/youngpirelli/afterlifeep",
                    "favorited": "false"
                },
                {
                    "name": "Techhouse Loopsbeat",
                    "artist": "Treemagic",
                    "cover": "https://i1.sndcdn.com/artworks-000202506826-n55n0h-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/techhouse-loopsbeat.mp3?raw=true",
                    "url": "https://soundcloud.com/treemagic/techhouse-loopsbeat",
                    "favorited": "false"
                },
                {
                    "name": "Cherry Blossom Girl",
                    "artist": "Nanidato",
                    "cover": "https://i1.sndcdn.com/artworks-000144360189-4s8qqu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cherry-blossom-girl.mp3?raw=true",
                    "url": "https://soundcloud.com/nanidato/cherry-blossom-girl",
                    "favorited": "false"
                },
                {
                    "name": "Beginning",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000176453417-l2dpx5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/beginning.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/beginning",
                    "favorited": "false"
                },
                {
                    "name": "Vqs1Iy2S9Tq7",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-RIpP5iFnRtBGzXSN-ODzx9Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vqs1iy2s9tq7.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/vqs1iy2s9tq7",
                    "favorited": "false"
                },
                {
                    "name": "Ultra Senpai Supreme",
                    "artist": "Itssaltysweet",
                    "cover": "https://i1.sndcdn.com/artworks-000261592046-0wpgjr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ultra-senpai-supreme.mp3?raw=true",
                    "url": "https://soundcloud.com/itssaltysweet/ultra-senpai-supreme",
                    "favorited": "false"
                },
                {
                    "name": "Icarian Beam",
                    "artist": "Imkotori",
                    "cover": "https://i1.sndcdn.com/artworks-fpvopOz2oyM1Q5tx-ChUlgg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/icarian-beam.mp3?raw=true",
                    "url": "https://soundcloud.com/imkotori/icarian-beam",
                    "favorited": "false"
                },
                {
                    "name": "Mazare Monika Santucci Thats On You",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-mqrQDRoC5a1u39oC-Z0Stsw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mazare-monika-santucci-thats-on-you.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/mazare-monika-santucci-thats-on-you",
                    "favorited": "false"
                },
                {
                    "name": "Danelle Chairs Rmx",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-000360875964-2cw7q6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/danelle-chairs-rmx.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/danelle-chairs-rmx",
                    "favorited": "false"
                },
                {
                    "name": "Best Part",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/best-part.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/best-part",
                    "favorited": "false"
                },
                {
                    "name": "Wonder Egg Priority",
                    "artist": "Mogg812",
                    "cover": "https://i1.sndcdn.com/artworks-yYRs7cNevChzWfvH-H9cXkg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wonder-egg-priority.mp3?raw=true",
                    "url": "https://soundcloud.com/mogg812/wonder-egg-priority",
                    "favorited": "false"
                },
                {
                    "name": "Fun Run",
                    "artist": "Scottsemanski",
                    "cover": "https://i1.sndcdn.com/artworks-sMdPKkXwdhCdZJ1D-py4Uog-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fun-run.mp3?raw=true",
                    "url": "https://soundcloud.com/scottsemanski/fun-run",
                    "favorited": "false"
                },
                {
                    "name": "Dj Snake Ultra Miami 2016 Live",
                    "artist": "Djsnake",
                    "cover": "https://i1.sndcdn.com/artworks-000153653151-coatvb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dj-snake-ultra-miami-2016-live.mp3?raw=true",
                    "url": "https://soundcloud.com/djsnake/dj-snake-ultra-miami-2016-live",
                    "favorited": "false"
                },
                {
                    "name": "Roblox Type Beat",
                    "artist": "Imyo",
                    "cover": "https://i1.sndcdn.com/artworks-1HP2fN4Ni8o0Q6IL-wtm3zw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/roblox-type-beat.mp3?raw=true",
                    "url": "https://soundcloud.com/imyo",
                    "favorited": "false"
                },
                {
                    "name": "Dance In The Memories English",
                    "artist": "User 402170686",
                    "cover": "https://i1.sndcdn.com/artworks-bAyJqNweR2LBHDj6-XR8ysw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dance-in-the-memories-english.mp3?raw=true",
                    "url": "https://soundcloud.com/user-402170686/dance-in-the-memories-english",
                    "favorited": "false"
                },
                {
                    "name": "Bishojo",
                    "artist": "Barradeen",
                    "cover": "https://i1.sndcdn.com/artworks-kZ7Yp6LZNlqQ2PwP-Mdpxyg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bishojo.mp3?raw=true",
                    "url": "https://soundcloud.com/barradeen/bishojo",
                    "favorited": "false"
                },
                {
                    "name": "Approaching Light Little Busters Ost",
                    "artist": "Lockndots",
                    "cover": "https://i1.sndcdn.com/artworks-000038128379-bkzp79-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/approaching-light-little-busters-ost.mp3?raw=true",
                    "url": "https://soundcloud.com/lockndots/approaching-light-little-busters-ost",
                    "favorited": "false"
                },
                {
                    "name": "Haywyre Storyteller Cofresi Remix",
                    "artist": "Cofresimusic",
                    "cover": "https://i1.sndcdn.com/artworks-000602518009-ovvpk2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/haywyre-storyteller-cofresi-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/cofresimusic/haywyre-storyteller-cofresi-remix",
                    "favorited": "false"
                },
                {
                    "name": "Tezatalks Love Koyo Remix",
                    "artist": "Xander Singh",
                    "cover": "https://i1.sndcdn.com/artworks-000377867250-klbqsg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tezatalks-love-koyo-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/xander-singh/tezatalks-love-koyo-remix",
                    "favorited": "false"
                },
                {
                    "name": "Kagamine Rin Moonlight Stage After 10 Years Self ",
                    "artist": "Nohki_O",
                    "cover": "https://i1.sndcdn.com/artworks-000648167170-vzg48k-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kagamine-rin-moonlight-stage-after-10-years-self-",
                    "url": "https://soundcloud.com/nohki_o/kagamine-rin-moonlight-stage-after-10-years-self-",
                    "favorited": "false"
                },
                {
                    "name": "Childish Twintails",
                    "artist": "Rotolotto",
                    "cover": "https://i1.sndcdn.com/artworks-000096796250-22aqof-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/childish-twintails.mp3?raw=true",
                    "url": "https://soundcloud.com/rotolotto/childish-twintails",
                    "favorited": "false"
                },
                {
                    "name": "Kuiters Bubbles",
                    "artist": "Surrealrecordings",
                    "cover": "https://i1.sndcdn.com/artworks-000140370764-xfils0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kuiters-bubbles.mp3?raw=true",
                    "url": "https://soundcloud.com/surrealrecordings/kuiters-bubbles",
                    "favorited": "false"
                },
                {
                    "name": "Sexygroove",
                    "artist": "Club2Tokyo",
                    "cover": "https://i1.sndcdn.com/artworks-W8xP9mJAGPVeUn90-tlSWlA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sexygroove.mp3?raw=true",
                    "url": "https://soundcloud.com/club2tokyo/sexygroove",
                    "favorited": "false"
                },
                {
                    "name": "Strqo Ep Vol 2 Ft Varo Esss Beee And",
                    "artist": "Strqo",
                    "cover": "https://i1.sndcdn.com/artworks-47NrEf2kVEsnzfcS-WzU72Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/strqo-ep-vol-2-ft-varo-esss-beee-and.mp3?raw=true",
                    "url": "https://soundcloud.com/strqo/strqo-ep-vol-2-ft-varo-esss-beee-and",
                    "favorited": "false"
                },
                {
                    "name": "Silently_Judging",
                    "artist": "Light Cruiser_Honolulu",
                    "cover": "https://i1.sndcdn.com/artworks-000365294475-6sihwk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/silently_judging.mp3?raw=true",
                    "url": "https://soundcloud.com/light-cruiser_honolulu/silently_judging",
                    "favorited": "false"
                },
                {
                    "name": "Love Is A War",
                    "artist": "Yungdojikko",
                    "cover": "https://i1.sndcdn.com/artworks-000279095972-2l8e78-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/love-is-a-war.mp3?raw=true",
                    "url": "https://soundcloud.com/yungdojikko/love-is-a-war",
                    "favorited": "false"
                },
                {
                    "name": "Runnin Up Ww Soudiere",
                    "artist": "Prodbyshao",
                    "cover": "https://i1.sndcdn.com/artworks-000297794484-1japo1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/runnin-up-ww-soudiere.mp3?raw=true",
                    "url": "https://soundcloud.com/prodbyshao/runnin-up-ww-soudiere",
                    "favorited": "false"
                },
                {
                    "name": "Epiphany",
                    "artist": "Julian_Avila",
                    "cover": "https://i1.sndcdn.com/artworks-000299912586-ld6xz8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/epiphany.mp3?raw=true",
                    "url": "https://soundcloud.com/julian_avila/epiphany",
                    "favorited": "false"
                },
                {
                    "name": "Cinnamons X Evening Cinema Summertime Plexi Edit",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-y4dgzTTsPzFYxLau-HO8Rug-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cinnamons-x-evening-cinema-summertime-plexi-edit.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/cinnamons-x-evening-cinema-summertime-plexi-edit",
                    "favorited": "false"
                },
                {
                    "name": "Alltta 20Syl Mr J Medeiros Connery Instrumental",
                    "artist": "20Syl",
                    "cover": "https://i1.sndcdn.com/artworks-000216363420-gkypao-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/alltta-20syl-mr-j-medeiros-connery-instrumental.mp3?raw=true",
                    "url": "https://soundcloud.com/20syl/alltta-20syl-mr-j-medeiros-connery-instrumental",
                    "favorited": "false"
                },
                {
                    "name": "The King Of Fighters Psycho Soldier Theme Oogimix M A R I Edit",
                    "artist": "Taj Pierre",
                    "cover": "https://i1.sndcdn.com/artworks-ho5YFbJFp5iRBCzE-Cz32JA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-king-of-fighters-psycho-soldier-theme-oogimix-m-a-r-i-edit.mp3?raw=true",
                    "url": "https://soundcloud.com/taj-pierre/the-king-of-fighters-psycho-soldier-theme-oogimix-m-a-r-i-edit",
                    "favorited": "false"
                },
                {
                    "name": "Wonder Wonder Shark Illenium Remix 1",
                    "artist": "Illeniumofficial",
                    "cover": "https://i1.sndcdn.com/artworks-000094845967-6wb79s-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wonder-wonder-shark-illenium-remix-1.mp3?raw=true",
                    "url": "https://soundcloud.com/illeniumofficial/wonder-wonder-shark-illenium-remix-1",
                    "favorited": "false"
                },
                {
                    "name": "Rome In Silver Friends Feat Chae",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-SJj1n30ryKpLgtwL-NnXqQg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/rome-in-silver-friends-feat-chae.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/rome-in-silver-friends-feat-chae",
                    "favorited": "false"
                },
                {
                    "name": "Xfd 2021 M3",
                    "artist": "Ricora",
                    "cover": "https://i1.sndcdn.com/artworks-Ox6FqyROWocWmr5I-ewbdYw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/xfd-2021-m3.mp3?raw=true",
                    "url": "https://soundcloud.com/ricora/xfd-2021-m3",
                    "favorited": "false"
                },
                {
                    "name": "Xs Project Bochka Bass Kolbaser Original",
                    "artist": "Dawid M Dry 1",
                    "cover": "https://i1.sndcdn.com/artworks-000088736255-b07xyj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/xs-project-bochka-bass-kolbaser-original.mp3?raw=true",
                    "url": "https://soundcloud.com/dawid-m-dry-1/xs-project-bochka-bass-kolbaser-original",
                    "favorited": "false"
                },
                {
                    "name": "Clannad Town Flow Of Time",
                    "artist": "Deehirota",
                    "cover": "https://i1.sndcdn.com/avatars-ERS6bNIQeDOeLj2O-UhnUSg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/clannad-town-flow-of-time.mp3?raw=true",
                    "url": "https://soundcloud.com/deehirota/clannad-town-flow-of-time",
                    "favorited": "false"
                },
                {
                    "name": "Fuane",
                    "artist": "Mogg812",
                    "cover": "https://i1.sndcdn.com/artworks-m93BAO6uFyvBJfqe-fFbYcA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fuane.mp3?raw=true",
                    "url": "https://soundcloud.com/mogg812/fuane",
                    "favorited": "false"
                },
                {
                    "name": "Wavu Liad Anything",
                    "artist": "Spiritedlabel",
                    "cover": "https://i1.sndcdn.com/artworks-000561335913-sycrat-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wavu-liad-anything.mp3?raw=true",
                    "url": "https://soundcloud.com/spiritedlabel/wavu-liad-anything",
                    "favorited": "false"
                },
                {
                    "name": "Tekken Mobile Main Menu",
                    "artist": "Get Rekt 409138233",
                    "cover": "https://i1.sndcdn.com/artworks-000245811749-5okbka-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tekken-mobile-main-menu.mp3?raw=true",
                    "url": "https://soundcloud.com/get-rekt-409138233/tekken-mobile-main-menu",
                    "favorited": "false"
                },
                {
                    "name": "Ashamed",
                    "artist": "Nuclear808",
                    "cover": "https://i1.sndcdn.com/artworks-pQYBTJ9rPuADR0HG-ZfoIHg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ashamed.mp3?raw=true",
                    "url": "https://soundcloud.com/nuclear808/ashamed",
                    "favorited": "false"
                },
                {
                    "name": "Netrunner",
                    "artist": "Kaitoshoma",
                    "cover": "https://i1.sndcdn.com/artworks-8KtYy6yBru9hbXwH-S5Yd2A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/netrunner.mp3?raw=true",
                    "url": "https://soundcloud.com/kaitoshoma/netrunner",
                    "favorited": "false"
                },
                {
                    "name": "3Pm",
                    "artist": "Tokyo Elvis",
                    "cover": "https://i1.sndcdn.com/artworks-9zzq1CNqpy6NKC1g-ynh5PQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/3pm.mp3?raw=true",
                    "url": "https://soundcloud.com/tokyo-elvis/3pm",
                    "favorited": "false"
                },
                {
                    "name": "The Eye Of Truth",
                    "artist": "Driver Beets",
                    "cover": "https://i1.sndcdn.com/artworks-000150594036-fi17ma-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-eye-of-truth.mp3?raw=true",
                    "url": "https://soundcloud.com/driver-beets/the-eye-of-truth",
                    "favorited": "false"
                },
                {
                    "name": "82 99 Fm 1",
                    "artist": "Macross 82 99",
                    "cover": "https://i1.sndcdn.com/artworks-000172244335-0u600a-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/82-99-fm-1.mp3?raw=true",
                    "url": "https://soundcloud.com/macross-82-99/82-99-fm-1",
                    "favorited": "false"
                },
                {
                    "name": "Anne Happy Groove",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anne-happy-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/anne-happy-groove",
                    "favorited": "false"
                },
                {
                    "name": "Kirby Your Enthusiasm",
                    "artist": "Patrick_Sus",
                    "cover": "https://i1.sndcdn.com/artworks-4YY1O4ry0svb8ixa-iIoTMA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kirby-your-enthusiasm.mp3?raw=true",
                    "url": "https://soundcloud.com/patrick_sus/kirby-your-enthusiasm",
                    "favorited": "false"
                },
                {
                    "name": "Vs Dj Subatomic Supernova",
                    "artist": "Fraisee Boi",
                    "cover": "https://i1.sndcdn.com/artworks-yNx6i1bzf1fZ2lS8-NCyLrQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vs-dj-subatomic-supernova.mp3?raw=true",
                    "url": "https://soundcloud.com/fraisee-boi/vs-dj-subatomic-supernova",
                    "favorited": "false"
                },
                {
                    "name": "Surrounded",
                    "artist": "Futurebassrecords",
                    "cover": "https://i1.sndcdn.com/artworks-000367761306-yrap96-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/surrounded.mp3?raw=true",
                    "url": "https://soundcloud.com/futurebassrecords/surrounded",
                    "favorited": "false"
                },
                {
                    "name": "Esa Narchbeats Blast Ftpendo Zawose",
                    "artist": "Narchbeats",
                    "cover": "https://i1.sndcdn.com/artworks-000216533545-3f4hg6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/esa-narchbeats-blast-ftpendo-zawose.mp3?raw=true",
                    "url": "https://soundcloud.com/narchbeats/esa-narchbeats-blast-ftpendo-zawose",
                    "favorited": "false"
                },
                {
                    "name": "Tiny Lofi",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tiny-lofi.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/tiny-lofi",
                    "favorited": "false"
                },
                {
                    "name": "Vibe Me Out",
                    "artist": "Sunraemusic",
                    "cover": "https://i1.sndcdn.com/artworks-hSELK3TTfuUmboTw-z4kRZA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vibe-me-out.mp3?raw=true",
                    "url": "https://soundcloud.com/sunraemusic/vibe-me-out",
                    "favorited": "false"
                },
                {
                    "name": "Forbidden Fruit Pt 2 W Gali",
                    "artist": "Inteus666",
                    "cover": "https://i1.sndcdn.com/artworks-000249685864-v5qpub-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/forbidden-fruit-pt-2-w-gali.mp3?raw=true",
                    "url": "https://soundcloud.com/inteus666/forbidden-fruit-pt-2-w-gali",
                    "favorited": "false"
                },
                {
                    "name": "Jaypo Atomic",
                    "artist": "Jacob Garpow",
                    "cover": "https://i1.sndcdn.com/artworks-0z69s2YI3SrNxDzB-g5GJtA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jaypo-atomic.mp3?raw=true",
                    "url": "https://soundcloud.com/jacob-garpow/jaypo-atomic",
                    "favorited": "false"
                },
                {
                    "name": "Cupid Review Two Point Zero",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-hh1ebjadTOILMBGt-YJh3Kw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cupid-review-two-point-zero.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/cupid-review-two-point-zero",
                    "favorited": "false"
                },
                {
                    "name": "I Gotta Serve W 1Ony Mud Puddles 18918",
                    "artist": "Draedaskimask",
                    "cover": "https://i1.sndcdn.com/artworks-000401505513-nsyrgw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/i-gotta-serve-w-1ony-mud-puddles-18918.mp3?raw=true",
                    "url": "https://soundcloud.com/draedaskimask/i-gotta-serve-w-1ony-mud-puddles-18918",
                    "favorited": "false"
                },
                {
                    "name": "Ghostface Playa X 4Our5Ive Valhalla",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-000641096086-je7ktg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ghostface-playa-x-4our5ive-valhalla.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/ghostface-playa-x-4our5ive-valhalla",
                    "favorited": "false"
                },
                {
                    "name": "Body",
                    "artist": "Megan Thee Stallion",
                    "cover": "https://i1.sndcdn.com/artworks-bzX5cJfAOrSqjCnT-Vj5U7A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/body.mp3?raw=true",
                    "url": "https://soundcloud.com/megan-thee-stallion/body",
                    "favorited": "false"
                },
                {
                    "name": "Haaaah Ooo Ooo Ooh",
                    "artist": "Ifyourereadingthishithere",
                    "cover": "https://i1.sndcdn.com/artworks-xhIJ3qBMgaJep77k-GgSkhQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/haaaah-ooo-ooo-ooh.mp3?raw=true",
                    "url": "https://soundcloud.com/ifyourereadingthishithere/haaaah-ooo-ooo-ooh",
                    "favorited": "false"
                },
                {
                    "name": "Def Pon Me Many Men",
                    "artist": "Caycaleb",
                    "cover": "https://i1.sndcdn.com/artworks-000412408746-snk0nx-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/def-pon-me-many-men.mp3?raw=true",
                    "url": "https://soundcloud.com/caycaleb/def-pon-me-many-men",
                    "favorited": "false"
                },
                {
                    "name": "Dragonmaid",
                    "artist": "4Theconcept",
                    "cover": "https://i1.sndcdn.com/artworks-000638020087-ii5ods-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dragonmaid.mp3?raw=true",
                    "url": "https://soundcloud.com/4theconcept/dragonmaid",
                    "favorited": "false"
                },
                {
                    "name": "Bits",
                    "artist": "Dcuttermusic",
                    "cover": "https://i1.sndcdn.com/artworks-000202386227-ecoeka-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bits.mp3?raw=true",
                    "url": "https://soundcloud.com/dcuttermusic/bits",
                    "favorited": "false"
                },
                {
                    "name": "Genshin Impact Qingce Apieceofonion Remix",
                    "artist": "Apieceofonion",
                    "cover": "https://i1.sndcdn.com/artworks-tFKHkS1LXrgzjjGL-wNxuSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/genshin-impact-qingce-apieceofonion-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/apieceofonion/genshin-impact-qingce-apieceofonion-remix",
                    "favorited": "false"
                },
                {
                    "name": "Faerie",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-3o1QtJKLJTI9Bfzp-RySuYQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/faerie.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/faerie",
                    "favorited": "false"
                },
                {
                    "name": "Gopnik",
                    "artist": "Djblyatman",
                    "cover": "https://i1.sndcdn.com/artworks-JcDk49cF2lObnNJU-UcGfBg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gopnik.mp3?raw=true",
                    "url": "https://soundcloud.com/djblyatman/gopnik",
                    "favorited": "false"
                },
                {
                    "name": "Moe Jazz Dreamer N3Kos Breakbeat Edit",
                    "artist": "Korewa_N3Ko",
                    "cover": "https://i1.sndcdn.com/artworks-000139521916-drt1hx-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/moe-jazz-dreamer-n3kos-breakbeat-edit.mp3?raw=true",
                    "url": "https://soundcloud.com/korewa_n3ko/moe-jazz-dreamer-n3kos-breakbeat-edit",
                    "favorited": "false"
                },
                {
                    "name": "Yesterday Cp31",
                    "artist": "Cp_31",
                    "cover": "https://i1.sndcdn.com/artworks-000123258433-63v92a-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yesterday-cp31.mp3?raw=true",
                    "url": "https://soundcloud.com/cp_31/yesterday-cp31",
                    "favorited": "false"
                },
                {
                    "name": "Cut Off",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cut-off.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/cut-off",
                    "favorited": "false"
                },
                {
                    "name": "Tonight Fin",
                    "artist": "User 940030393",
                    "cover": "https://i1.sndcdn.com/artworks-000659378680-wfh84s-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tonight-fin.mp3?raw=true",
                    "url": "https://soundcloud.com/user-940030393/tonight-fin",
                    "favorited": "false"
                },
                {
                    "name": "Wvlf X Uth Fruit Finn And Jake",
                    "artist": "Icon Tokyo",
                    "cover": "https://i1.sndcdn.com/artworks-000185743137-1rj4du-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wvlf-x-uth-fruit-finn-and-jake.mp3?raw=true",
                    "url": "https://soundcloud.com/icon-tokyo/wvlf-x-uth-fruit-finn-and-jake",
                    "favorited": "false"
                },
                {
                    "name": "Aisha Liarhardcore Flip",
                    "artist": "User 278546453",
                    "cover": "https://i1.sndcdn.com/artworks-2ysBMz8yeuKLgQ6f-NdjWAA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aisha-liarhardcore-flip.mp3?raw=true",
                    "url": "https://soundcloud.com/user-278546453/aisha-liarhardcore-flip",
                    "favorited": "false"
                },
                {
                    "name": "Blunts Bass Summer Edition",
                    "artist": "Bluntsnblondes",
                    "cover": "https://i1.sndcdn.com/artworks-000574902005-g5b54f-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/blunts-bass-summer-edition.mp3?raw=true",
                    "url": "https://soundcloud.com/bluntsnblondes/blunts-bass-summer-edition",
                    "favorited": "false"
                },
                {
                    "name": "Daydream",
                    "artist": "Pond Of Koi Fish",
                    "cover": "https://i1.sndcdn.com/artworks-000157793274-3v1avr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/daydream.mp3?raw=true",
                    "url": "https://soundcloud.com/pond-of-koi-fish/daydream",
                    "favorited": "false"
                },
                {
                    "name": "Ridin Swervin",
                    "artist": "Rinse Cycle",
                    "cover": "https://i1.sndcdn.com/artworks-000325602304-h1d9nc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ridin-swervin.mp3?raw=true",
                    "url": "https://soundcloud.com/rinse-cycle/ridin-swervin",
                    "favorited": "false"
                },
                {
                    "name": "Crystal Dolphin",
                    "artist": "Engelwoodmusic",
                    "cover": "https://i1.sndcdn.com/artworks-VIYgcqu57jIe01WH-8LNzYQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crystal-dolphin.mp3?raw=true",
                    "url": "https://soundcloud.com/engelwoodmusic/crystal-dolphin",
                    "favorited": "false"
                },
                {
                    "name": "Glue70 Casin",
                    "artist": "Puppetchardmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000172363829-hg3tge-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/glue70-casin.mp3?raw=true",
                    "url": "https://soundcloud.com/puppetchardmusic/glue70-casin",
                    "favorited": "false"
                },
                {
                    "name": "Itslikeihavearaincloudabovemyh",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-dbqocpcCeXy44Hyh-XXesUQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/itslikeihavearaincloudabovemyh.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/itslikeihavearaincloudabovemyh",
                    "favorited": "false"
                },
                {
                    "name": "Wap Feat Megan Thee Stallion",
                    "artist": "Iamcardib",
                    "cover": "https://i1.sndcdn.com/artworks-xRcHRzwpJGpfGt1d-wqhSGQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wap-feat-megan-thee-stallion.mp3?raw=true",
                    "url": "https://soundcloud.com/iamcardib/wap-feat-megan-thee-stallion",
                    "favorited": "false"
                },
                {
                    "name": "Loveyou",
                    "artist": "Discandy",
                    "cover": "https://i1.sndcdn.com/artworks-000129025868-6iy2h4-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/loveyou.mp3?raw=true",
                    "url": "https://soundcloud.com/discandy/loveyou",
                    "favorited": "false"
                },
                {
                    "name": "Bfg10000",
                    "artist": "Music From The Void",
                    "cover": "https://i1.sndcdn.com/artworks-k1mQDB4MX44Z9m3x-evaN5g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bfg10000.mp3?raw=true",
                    "url": "https://soundcloud.com/music-from-the-void/bfg10000",
                    "favorited": "false"
                },
                {
                    "name": "Leaves Fall",
                    "artist": "Sadkeyboardguy",
                    "cover": "https://i1.sndcdn.com/artworks-1rAbDXJSI0HYJQK3-MBBPOg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/leaves-fall.mp3?raw=true",
                    "url": "https://soundcloud.com/sadkeyboardguy/leaves-fall",
                    "favorited": "false"
                },
                {
                    "name": "Dr Dre The Next Episode San Holo Remix",
                    "artist": "Electricspark",
                    "cover": "https://i1.sndcdn.com/artworks-000097811063-3fv2dn-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dr-dre-the-next-episode-san-holo-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/electricspark/dr-dre-the-next-episode-san-holo-remix",
                    "favorited": "false"
                },
                {
                    "name": "Momentum",
                    "artist": "Biruhan",
                    "cover": "https://i1.sndcdn.com/artworks-XEPMGGICaGGKJ13w-WOzmBQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/momentum.mp3?raw=true",
                    "url": "https://soundcloud.com/biruhan/momentum",
                    "favorited": "false"
                },
                {
                    "name": "Sedan",
                    "artist": "User 124970572",
                    "cover": "https://i1.sndcdn.com/artworks-TudwTa4CBq9anm9u-GJYO2Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sedan.mp3?raw=true",
                    "url": "https://soundcloud.com/user-124970572/sedan",
                    "favorited": "false"
                },
                {
                    "name": "Vo Lost Umbrella",
                    "artist": "Saikocho",
                    "cover": "https://i1.sndcdn.com/artworks-pNDywa37KgGGk8ho-62znmA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vo-lost-umbrella.mp3?raw=true",
                    "url": "https://soundcloud.com/saikocho/vo-lost-umbrella",
                    "favorited": "false"
                },
                {
                    "name": "Groovin",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/groovin.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/groovin",
                    "favorited": "false"
                },
                {
                    "name": "Amagi Brilliant Park Full Op Lossless Audio",
                    "artist": "Flying Fairy",
                    "cover": "https://i1.sndcdn.com/artworks-000099678322-iq7s0a-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/amagi-brilliant-park-full-op-lossless-audio.mp3?raw=true",
                    "url": "https://soundcloud.com/flying-fairy/amagi-brilliant-park-full-op-lossless-audio",
                    "favorited": "false"
                },
                {
                    "name": "Smooth",
                    "artist": "Happycolababy",
                    "cover": "https://i1.sndcdn.com/artworks-WEEdvcD5K24ooo6A-z5ML8Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/smooth.mp3?raw=true",
                    "url": "https://soundcloud.com/happycolababy/smooth",
                    "favorited": "false"
                },
                {
                    "name": "New Non Non Biyori Disco Groove",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000131990145-xoa414-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/new-non-non-biyori-disco-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/new-non-non-biyori-disco-groove",
                    "favorited": "false"
                },
                {
                    "name": "Love Taste",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000163978455-m5bld7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/love-taste.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/love-taste",
                    "favorited": "false"
                },
                {
                    "name": "Welcome To Xd Baby",
                    "artist": "Yungdojikko",
                    "cover": "https://i1.sndcdn.com/artworks-000222365288-yhv9d1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/welcome-to-xd-baby.mp3?raw=true",
                    "url": "https://soundcloud.com/yungdojikko/welcome-to-xd-baby",
                    "favorited": "false"
                },
                {
                    "name": "Mipha Theme The Legend Of Zelda Breath Of The Wild",
                    "artist": "Dylan Cornella Barcelona",
                    "cover": "https://i1.sndcdn.com/artworks-000553387248-hdpmec-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mipha-theme-the-legend-of-zelda-breath-of-the-wild.mp3?raw=true",
                    "url": "https://soundcloud.com/dylan-cornella-barcelona/mipha-theme-the-legend-of-zelda-breath-of-the-wild",
                    "favorited": "false"
                },
                {
                    "name": "Evilmane Overrule Prod",
                    "artist": "Evilmane666",
                    "cover": "https://i1.sndcdn.com/artworks-000660706477-s39z74-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/evilmane-overrule-prod.mp3?raw=true",
                    "url": "https://soundcloud.com/evilmane666/evilmane-overrule-prod",
                    "favorited": "false"
                },
                {
                    "name": "Heartbreak No Disco",
                    "artist": "Yung Prince Charles",
                    "cover": "https://i1.sndcdn.com/artworks-5LfMSZmvrgk632My-vUbUEw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/heartbreak-no-disco.mp3?raw=true",
                    "url": "https://soundcloud.com/yung-prince-charles/heartbreak-no-disco",
                    "favorited": "false"
                },
                {
                    "name": "Secluded",
                    "artist": "Eveline Eevee",
                    "cover": "https://i1.sndcdn.com/artworks-000542618862-s4rhc9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/secluded.mp3?raw=true",
                    "url": "https://soundcloud.com/eveline-eevee/secluded",
                    "favorited": "false"
                },
                {
                    "name": "Syngergia Feat Melon",
                    "artist": "Puree Gem",
                    "cover": "https://i1.sndcdn.com/artworks-SxlseGjMlOLmtpnK-sUlUxA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/syngergia-feat-melon.mp3?raw=true",
                    "url": "https://soundcloud.com/puree-gem/syngergia-feat-melon",
                    "favorited": "false"
                },
                {
                    "name": "Midnight Sea",
                    "artist": "Puree Gem",
                    "cover": "https://i1.sndcdn.com/artworks-000373623483-8m0nfe-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/midnight-sea.mp3?raw=true",
                    "url": "https://soundcloud.com/puree-gem/midnight-sea",
                    "favorited": "false"
                },
                {
                    "name": "Insight",
                    "artist": "Haywyre",
                    "cover": "https://i1.sndcdn.com/artworks-000104360022-3sprma-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/insight.mp3?raw=true",
                    "url": "https://soundcloud.com/haywyre/insight",
                    "favorited": "false"
                },
                {
                    "name": "Ztqn4Ytrnqdd",
                    "artist": "Egormuf",
                    "cover": "https://i1.sndcdn.com/artworks-000530368029-f4eyzg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ztqn4ytrnqdd.mp3?raw=true",
                    "url": "https://soundcloud.com/egormuf/ztqn4ytrnqdd",
                    "favorited": "false"
                },
                {
                    "name": "Sleepyface",
                    "artist": "Birocratic",
                    "cover": "https://i1.sndcdn.com/artworks-000213428871-sfffan-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sleepyface.mp3?raw=true",
                    "url": "https://soundcloud.com/birocratic/sleepyface",
                    "favorited": "false"
                },
                {
                    "name": "Candy Spaceship",
                    "artist": "Ujico",
                    "cover": "https://i1.sndcdn.com/artworks-000475127199-4ib8ae-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/candy-spaceship.mp3?raw=true",
                    "url": "https://soundcloud.com/ujico/candy-spaceship",
                    "favorited": "false"
                },
                {
                    "name": "X4Tzztfjfxg9",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-sRDbvZuymzLesmW9-debJcQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/x4tzztfjfxg9.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/x4tzztfjfxg9",
                    "favorited": "false"
                },
                {
                    "name": "Love In The Midnight",
                    "artist": "Plastic Ank",
                    "cover": "https://i1.sndcdn.com/artworks-jh5vz5zjJyjcbvtS-k31fuA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/love-in-the-midnight.mp3?raw=true",
                    "url": "https://soundcloud.com/plastic-ank/love-in-the-midnight",
                    "favorited": "false"
                },
                {
                    "name": "Aki Chan",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-G6rMioGJaSgmi9B1-vme0YQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aki-chan.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/aki-chan",
                    "favorited": "false"
                },
                {
                    "name": "Daft Punk Porter Robinson Sad Machine Something About Us Mashup",
                    "artist": "Sahjoji",
                    "cover": "https://i1.sndcdn.com/artworks-000224698810-govxsu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/daft-punk-porter-robinson-sad-machine-something-about-us-mashup.mp3?raw=true",
                    "url": "https://soundcloud.com/sahjoji/daft-punk-porter-robinson-sad-machine-something-about-us-mashup",
                    "favorited": "false"
                },
                {
                    "name": "Touch",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/touch.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/touch",
                    "favorited": "false"
                },
                {
                    "name": "Cerise",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-c2KDL2ZDC9yihaJJ-J55P3g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cerise.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/cerise",
                    "favorited": "false"
                },
                {
                    "name": "Just Like Everyone Else 1",
                    "artist": "Inteus666",
                    "cover": "https://i1.sndcdn.com/artworks-000194729439-8ucau3-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/just-like-everyone-else-1.mp3?raw=true",
                    "url": "https://soundcloud.com/inteus666/just-like-everyone-else-1",
                    "favorited": "false"
                },
                {
                    "name": "Koven Stars Oliverse Remix",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-dOlUaTfBya4uKNSi-48cRjA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/koven-stars-oliverse-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/koven-stars-oliverse-remix",
                    "favorited": "false"
                },
                {
                    "name": "Whole Lotta Ass",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-4xaoJbComxpsN6e5-V00JBA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/whole-lotta-ass.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/whole-lotta-ass",
                    "favorited": "false"
                },
                {
                    "name": "Double Time",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/double-time.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/double-time",
                    "favorited": "false"
                },
                {
                    "name": "Hi Bich",
                    "artist": "Bhadbhabie",
                    "cover": "https://i1.sndcdn.com/artworks-000243696470-mff9x8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hi-bich.mp3?raw=true",
                    "url": "https://soundcloud.com/bhadbhabie/hi-bich",
                    "favorited": "false"
                },
                {
                    "name": "Vibe",
                    "artist": "Internet Boi",
                    "cover": "https://i1.sndcdn.com/artworks-000312570408-7dkn39-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/vibe.mp3?raw=true",
                    "url": "https://soundcloud.com/internet-boi/vibe",
                    "favorited": "false"
                },
                {
                    "name": "Meiko Nakahara Fantasy Rice Bear Remix",
                    "artist": "User 723244371 449905829",
                    "cover": "https://i1.sndcdn.com/artworks-000548427915-266eai-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/meiko-nakahara-fantasy-rice-bear-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/user-723244371-449905829/meiko-nakahara-fantasy-rice-bear-remix",
                    "favorited": "false"
                },
                {
                    "name": "Ii Desu Yo",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-pf8d7hFAmt6BFlR7-cpUOew-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ii-desu-yo.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/ii-desu-yo",
                    "favorited": "false"
                },
                {
                    "name": "San Holo Voices In My Head Last Island Remix",
                    "artist": "Lastisland",
                    "cover": "https://i1.sndcdn.com/artworks-000513598335-5rgw81-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/san-holo-voices-in-my-head-last-island-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/lastisland/san-holo-voices-in-my-head-last-island-remix",
                    "favorited": "false"
                },
                {
                    "name": "Full Colors",
                    "artist": "Korz Beats",
                    "cover": "https://i1.sndcdn.com/artworks-000658507963-v6z2rr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/full-colors.mp3?raw=true",
                    "url": "https://soundcloud.com/korz-beats/full-colors",
                    "favorited": "false"
                },
                {
                    "name": "Waiting For You In The Lobby",
                    "artist": "Okamimusician",
                    "cover": "https://i1.sndcdn.com/avatars-000738183643-o37qwx-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/waiting-for-you-in-the-lobby.mp3?raw=true",
                    "url": "https://soundcloud.com/okamimusician/waiting-for-you-in-the-lobby",
                    "favorited": "false"
                },
                {
                    "name": "Aivi Feat Quarkimo My Mothers Love",
                    "artist": "Waltzforluma",
                    "cover": "https://i1.sndcdn.com/artworks-Yk9uY3TueUt4cr2c-88Llrw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aivi-feat-quarkimo-my-mothers-love.mp3?raw=true",
                    "url": "https://soundcloud.com/waltzforluma/aivi-feat-quarkimo-my-mothers-love",
                    "favorited": "false"
                },
                {
                    "name": "Victory Fanfare",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/victory-fanfare.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/victory-fanfare",
                    "favorited": "false"
                },
                {
                    "name": "02 Ikasuze Positive Thinking",
                    "artist": "Artemijko",
                    "cover": "https://i1.sndcdn.com/artworks-000129446903-f91jj5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/02-ikasuze-positive-thinking.mp3?raw=true",
                    "url": "https://soundcloud.com/artemijko/02-ikasuze-positive-thinking",
                    "favorited": "false"
                },
                {
                    "name": "Stay Here Prod Verzache",
                    "artist": "Dominosmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000212073674-8ny72x-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/stay-here-prod-verzache.mp3?raw=true",
                    "url": "https://soundcloud.com/dominosmusic/stay-here-prod-verzache",
                    "favorited": "false"
                },
                {
                    "name": "Nana",
                    "artist": "Geoxor",
                    "cover": "https://i1.sndcdn.com/artworks-000538771974-gxrxdv-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/nana.mp3?raw=true",
                    "url": "https://soundcloud.com/geoxor/nana",
                    "favorited": "false"
                },
                {
                    "name": "Thatguybt4 Chefn Liyue Bump Genshin Impact Relaxing In Liyue Ost Remix",
                    "artist": "Thatguybt4",
                    "cover": "https://i1.sndcdn.com/artworks-NouBzAz7xgIAyXrm-OcjCiQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/thatguybt4-chefn-liyue-bump-genshin-impact-relaxing-in-liyue-ost-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/thatguybt4/thatguybt4-chefn-liyue-bump-genshin-impact-relaxing-in-liyue-ost-remix",
                    "favorited": "false"
                },
                {
                    "name": "2020 Genie Rager Rucker 80Bpm Final Gb Major",
                    "artist": "Engelwoodbeats",
                    "cover": "https://i1.sndcdn.com/artworks-eBFZs8zt6yBd4pvk-pMz7gg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/2020-genie-rager-rucker-80bpm-final-gb-major.mp3?raw=true",
                    "url": "https://soundcloud.com/engelwoodbeats/2020-genie-rager-rucker-80bpm-final-gb-major",
                    "favorited": "false"
                },
                {
                    "name": "High Speed Jazz",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/high-speed-jazz.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/high-speed-jazz",
                    "favorited": "false"
                },
                {
                    "name": "Mms For Breakfast W Inteus",
                    "artist": "Kloudbug",
                    "cover": "https://i1.sndcdn.com/artworks-000276373259-oq45bi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mms-for-breakfast-w-inteus.mp3?raw=true",
                    "url": "https://soundcloud.com/kloudbug/mms-for-breakfast-w-inteus",
                    "favorited": "false"
                },
                {
                    "name": "Joshiraku Ed Nippon Egao",
                    "artist": "Valentin Leguizamon",
                    "cover": "https://i1.sndcdn.com/artworks-000514007157-z1qnoc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/joshiraku-ed-nippon-egao.mp3?raw=true",
                    "url": "https://soundcloud.com/valentin-leguizamon/joshiraku-ed-nippon-egao",
                    "favorited": "false"
                },
                {
                    "name": "Bhad Bhabie Bestie Feat Kodak Black",
                    "artist": "Bhadbhabie",
                    "cover": "https://i1.sndcdn.com/artworks-000481148325-4mfeb6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bhad-bhabie-bestie-feat-kodak-black.mp3?raw=true",
                    "url": "https://soundcloud.com/bhadbhabie/bhad-bhabie-bestie-feat-kodak-black",
                    "favorited": "false"
                },
                {
                    "name": "Fool The Forgotten Dystopia 2077",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-HiSti172uwLg9eaJ-ZtOwvw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fool-the-forgotten-dystopia-2077.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/fool-the-forgotten-dystopia-2077",
                    "favorited": "false"
                },
                {
                    "name": "Kakegurui Soundtrack Yumeko Jabami Yumemi Yumemite Love Russian Roulette",
                    "artist": "User 13388108",
                    "cover": "https://i1.sndcdn.com/artworks-000313335522-mzo2x8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kakegurui-soundtrack-yumeko-jabami-yumemi-yumemite-love-russian-roulette.mp3?raw=true",
                    "url": "https://soundcloud.com/user-13388108/kakegurui-soundtrack-yumeko-jabami-yumemi-yumemite-love-russian-roulette",
                    "favorited": "false"
                },
                {
                    "name": "Lumeo79Jb8Zt",
                    "artist": "User 836522875",
                    "cover": "https://i1.sndcdn.com/artworks-EFnBDQ40afk6bfvP-f3aWzw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lumeo79jb8zt.mp3?raw=true",
                    "url": "https://soundcloud.com/user-836522875/lumeo79jb8zt",
                    "favorited": "false"
                },
                {
                    "name": "Birocratic Tonys Belated Breakfast",
                    "artist": "Birocratic",
                    "cover": "https://i1.sndcdn.com/artworks-000167120363-gbllue-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/birocratic-tonys-belated-breakfast.mp3?raw=true",
                    "url": "https://soundcloud.com/birocratic/birocratic-tonys-belated-breakfast",
                    "favorited": "false"
                },
                {
                    "name": "Blush Remix",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000235437397-gd9wca-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/blush-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/blush-remix",
                    "favorited": "false"
                },
                {
                    "name": "Rpg Music",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/rpg-music.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/rpg-music",
                    "favorited": "false"
                },
                {
                    "name": "Wrld By Design",
                    "artist": "Thewrld",
                    "cover": "https://i1.sndcdn.com/artworks-000174875483-dfgmzh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wrld-by-design.mp3?raw=true",
                    "url": "https://soundcloud.com/thewrld/wrld-by-design",
                    "favorited": "false"
                },
                {
                    "name": "Intersection",
                    "artist": "Nicksterguy",
                    "cover": "https://i1.sndcdn.com/artworks-DAiGhevEurXGXy58-tbQVeA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/intersection.mp3?raw=true",
                    "url": "https://soundcloud.com/nicksterguy/intersection",
                    "favorited": "false"
                },
                {
                    "name": "When The Rune Sparkles In September Remix",
                    "artist": "Antgry",
                    "cover": "https://i1.sndcdn.com/artworks-000288166211-402rlw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/when-the-rune-sparkles-in-september-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/antgry/when-the-rune-sparkles-in-september-remix",
                    "favorited": "false"
                },
                {
                    "name": "San Holo New Sky",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000149122182-ol7w4o-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/san-holo-new-sky.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/san-holo-new-sky",
                    "favorited": "false"
                },
                {
                    "name": "Ill Keep Coming",
                    "artist": "Lowroar",
                    "cover": "https://i1.sndcdn.com/artworks-000083905696-lju69f-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ill-keep-coming.mp3?raw=true",
                    "url": "https://soundcloud.com/lowroar/ill-keep-coming",
                    "favorited": "false"
                },
                {
                    "name": "Haywyre Do You Dont You",
                    "artist": "Haywyre",
                    "cover": "https://i1.sndcdn.com/artworks-000145480131-yerzic-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/haywyre-do-you-dont-you.mp3?raw=true",
                    "url": "https://soundcloud.com/haywyre/haywyre-do-you-dont-you",
                    "favorited": "false"
                },
                {
                    "name": "Crypt1K Fiend",
                    "artist": "User 925529289",
                    "cover": "https://i1.sndcdn.com/artworks-44CzkFULutobY0SO-LoWQxw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crypt1k-fiend.mp3?raw=true",
                    "url": "https://soundcloud.com/user-925529289/crypt1k-fiend",
                    "favorited": "false"
                },
                {
                    "name": "Tropical Night",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tropical-night.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/tropical-night",
                    "favorited": "false"
                },
                {
                    "name": "Fovla Eddie",
                    "artist": "Rizzich",
                    "cover": "https://i1.sndcdn.com/artworks-7Gvce5XnznzGVO0a-ODfNUg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fovla-eddie.mp3?raw=true",
                    "url": "https://soundcloud.com/rizzich/fovla-eddie",
                    "favorited": "false"
                },
                {
                    "name": "Cookieekawaii Vibe Part 2 Prod",
                    "artist": "Cookiee Kawaii",
                    "cover": "https://i1.sndcdn.com/artworks-000557524989-avf98u-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cookieekawaii-vibe-part-2-prod.mp3?raw=true",
                    "url": "https://soundcloud.com/cookiee-kawaii/cookieekawaii-vibe-part-2-prod",
                    "favorited": "false"
                },
                {
                    "name": "Coralmines Tom_Atom Mazetrap",
                    "artist": "Coral422",
                    "cover": "https://i1.sndcdn.com/artworks-000106209536-qvzc57-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/coralmines-tom_atom-mazetrap.mp3?raw=true",
                    "url": "https://soundcloud.com/coral422/coralmines-tom_atom-mazetrap",
                    "favorited": "false"
                },
                {
                    "name": "Yosuga No Sora Tsunagu Kizuna",
                    "artist": "Aoi Tori 3",
                    "cover": "https://i1.sndcdn.com/avatars-000039347337-iazl3n-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yosuga-no-sora-tsunagu-kizuna.mp3?raw=true",
                    "url": "https://soundcloud.com/aoi-tori-3/yosuga-no-sora-tsunagu-kizuna",
                    "favorited": "false"
                },
                {
                    "name": "Soulmate 1",
                    "artist": "Phonkcoticvibes",
                    "cover": "https://i1.sndcdn.com/artworks-000425098077-uncmww-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/soulmate-1.mp3?raw=true",
                    "url": "https://soundcloud.com/phonkcoticvibes/soulmate-1",
                    "favorited": "false"
                },
                {
                    "name": "Fightv2",
                    "artist": "Aests",
                    "cover": "https://i1.sndcdn.com/artworks-O0pamcGS1hjJrAfW-3VKyQQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fightv2.mp3?raw=true",
                    "url": "https://soundcloud.com/aests/fightv2",
                    "favorited": "false"
                },
                {
                    "name": "Takin Off W Inteus",
                    "artist": "Killmythic",
                    "cover": "https://i1.sndcdn.com/artworks-000537693336-2wpk69-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/takin-off-w-inteus.mp3?raw=true",
                    "url": "https://soundcloud.com/killmythic/takin-off-w-inteus",
                    "favorited": "false"
                },
                {
                    "name": "These Kinds Of Songs Are Always",
                    "artist": "Itssaltysweet",
                    "cover": "https://i1.sndcdn.com/artworks-000486544791-33h2dt-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/these-kinds-of-songs-are-always-",
                    "url": "https://soundcloud.com/itssaltysweet/these-kinds-of-songs-are-always-",
                    "favorited": "false"
                },
                {
                    "name": "Masked Wolf Astronaut In The Ocean",
                    "artist": "Themaskedwolf",
                    "cover": "https://i1.sndcdn.com/artworks-yt6CSuLZMiL9-0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/masked-wolf-astronaut-in-the-ocean.mp3?raw=true",
                    "url": "https://soundcloud.com/themaskedwolf/masked-wolf-astronaut-in-the-ocean",
                    "favorited": "false"
                },
                {
                    "name": "2017 Memes That Didnt Make It 1",
                    "artist": "Kore Wa Hentai",
                    "cover": "https://i1.sndcdn.com/artworks-000281950460-t1vzkb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/2017-memes-that-didnt-make-it-1.mp3?raw=true",
                    "url": "https://soundcloud.com/kore-wa-hentai/2017-memes-that-didnt-make-it-1",
                    "favorited": "false"
                },
                {
                    "name": "Caden Jester Cream Ghxst Remix",
                    "artist": "Ghxst",
                    "cover": "https://i1.sndcdn.com/artworks-000123485743-lafvy1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/caden-jester-cream-ghxst-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/ghxst/caden-jester-cream-ghxst-remix",
                    "favorited": "false"
                },
                {
                    "name": "Miku Best Girl",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-000507984579-un3boz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/miku-best-girl.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/miku-best-girl",
                    "favorited": "false"
                },
                {
                    "name": "Himajanai",
                    "artist": "Ceuren",
                    "cover": "https://i1.sndcdn.com/artworks-b7yTQubMJWBI911x-3cNdaA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/himajanai.mp3?raw=true",
                    "url": "https://soundcloud.com/ceuren/himajanai",
                    "favorited": "false"
                },
                {
                    "name": "Walking Dead Daryl Song 703 Easy Street Collapsable Hearts Club Negan Season 7 Episode 3",
                    "artist": "Mohamed Gamal 226",
                    "cover": "https://i1.sndcdn.com/artworks-000192519834-yiiy5b-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/walking-dead-daryl-song-703-easy-street-collapsable-hearts-club-negan-season-7-episode-3.mp3?raw=true",
                    "url": "https://soundcloud.com/mohamed-gamal-226/walking-dead-daryl-song-703-easy-street-collapsable-hearts-club-negan-season-7-episode-3",
                    "favorited": "false"
                },
                {
                    "name": "Kaosic Her Look",
                    "artist": "Kaosic",
                    "cover": "https://i1.sndcdn.com/artworks-000570645974-q0v1dz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kaosic-her-look.mp3?raw=true",
                    "url": "https://soundcloud.com/kaosic/kaosic-her-look",
                    "favorited": "false"
                },
                {
                    "name": "Banira",
                    "artist": "Peachwind",
                    "cover": "https://i1.sndcdn.com/artworks-000149281624-zcqfan-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/banira.mp3?raw=true",
                    "url": "https://soundcloud.com/peachwind/banira",
                    "favorited": "false"
                },
                {
                    "name": "Hyadain No Kakakata Katamoi",
                    "artist": "User 671644037",
                    "cover": "https://i1.sndcdn.com/artworks-000545747739-m89ay7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hyadain-no-kakakata-katamoi.mp3?raw=true",
                    "url": "https://soundcloud.com/user-671644037/hyadain-no-kakakata-katamoi",
                    "favorited": "false"
                },
                {
                    "name": "Untitled Beats",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/untitled-beats.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/untitled-beats",
                    "favorited": "false"
                },
                {
                    "name": "Goodbye Goodbye",
                    "artist": "Taramasca",
                    "cover": "https://i1.sndcdn.com/artworks-000146188064-1x1f8j-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/goodbye-goodbye.mp3?raw=true",
                    "url": "https://soundcloud.com/taramasca/goodbye-goodbye",
                    "favorited": "false"
                },
                {
                    "name": "Windy Night",
                    "artist": "Leila Wilson Woofle",
                    "cover": "https://i1.sndcdn.com/artworks-Az3rl0gxQJOz19rP-Th0jVQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/windy-night.mp3?raw=true",
                    "url": "https://soundcloud.com/leila-wilson-woofle/windy-night",
                    "favorited": "false"
                },
                {
                    "name": "Timid Soul X Psus Magic Echo",
                    "artist": "P Sus",
                    "cover": "https://i1.sndcdn.com/artworks-000109944123-iafiqi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/timid-soul-x-psus-magic-echo.mp3?raw=true",
                    "url": "https://soundcloud.com/p-sus/timid-soul-x-psus-magic-echo",
                    "favorited": "false"
                },
                {
                    "name": "Koven Your Pain The Prototypes",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-dOlUaTfBya4uKNSi-48cRjA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/koven-your-pain-the-prototypes.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/koven-your-pain-the-prototypes",
                    "favorited": "false"
                },
                {
                    "name": "Cosmic Nocturne",
                    "artist": "Seycara Orchestral",
                    "cover": "https://i1.sndcdn.com/artworks-YMxIJ86c3pyhoyts-9fOi0w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cosmic-nocturne.mp3?raw=true",
                    "url": "https://soundcloud.com/seycara-orchestral/cosmic-nocturne",
                    "favorited": "false"
                },
                {
                    "name": "Fusq Perfume",
                    "artist": "Enm",
                    "cover": "https://i1.sndcdn.com/artworks-000134192111-omy0hd-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/fusq-perfume.mp3?raw=true",
                    "url": "https://soundcloud.com/enm/fusq-perfume",
                    "favorited": "false"
                },
                {
                    "name": "H80Mpodhmyh8",
                    "artist": "Simeugosto",
                    "cover": "https://i1.sndcdn.com/artworks-000510920805-n4sm93-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/h80mpodhmyh8.mp3?raw=true",
                    "url": "https://soundcloud.com/simeugosto/h80mpodhmyh8",
                    "favorited": "false"
                },
                {
                    "name": "Light Up",
                    "artist": "Mrwaxmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000496252458-w2c805-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/light-up.mp3?raw=true",
                    "url": "https://soundcloud.com/mrwaxmusic/light-up",
                    "favorited": "false"
                },
                {
                    "name": "Solstice",
                    "artist": "Maestrexmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000143432111-ug87gy-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/solstice.mp3?raw=true",
                    "url": "https://soundcloud.com/maestrexmusic/solstice",
                    "favorited": "false"
                },
                {
                    "name": "Lady In The Sky",
                    "artist": "Taj Pierre",
                    "cover": "https://i1.sndcdn.com/artworks-JsrSmmiU9JbuwlV1-cfO4Xg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lady-in-the-sky.mp3?raw=true",
                    "url": "https://soundcloud.com/taj-pierre/lady-in-the-sky",
                    "favorited": "false"
                },
                {
                    "name": "The Sweetest Groove",
                    "artist": "Plexitofer",
                    "cover": "https://i1.sndcdn.com/artworks-000261359954-79lpzn-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-sweetest-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/plexitofer/the-sweetest-groove",
                    "favorited": "false"
                },
                {
                    "name": "Distant Places",
                    "artist": "Tanukimusic",
                    "cover": "https://i1.sndcdn.com/artworks-y1zwALvuDjr4q2fK-TGC62A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/distant-places.mp3?raw=true",
                    "url": "https://soundcloud.com/tanukimusic/distant-places",
                    "favorited": "false"
                },
                {
                    "name": "S7Hhby7Wbhri",
                    "artist": "Zplwhlj8Wmw3",
                    "cover": "https://i1.sndcdn.com/avatars-QUhrhxdlhY1ViKsI-iHedvg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/s7hhby7wbhri.mp3?raw=true",
                    "url": "https://soundcloud.com/zplwhlj8wmw3/s7hhby7wbhri",
                    "favorited": "false"
                },
                {
                    "name": "Me N U",
                    "artist": "Succducc",
                    "cover": "https://i1.sndcdn.com/artworks-000210702352-yinxfa-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/me-n-u.mp3?raw=true",
                    "url": "https://soundcloud.com/succducc/me-n-u",
                    "favorited": "false"
                },
                {
                    "name": "Kakegurui Ost Russian Roulette Of Love Jabami Yumeko Yumemite Yumemi",
                    "artist": "User 8445722",
                    "cover": "https://i1.sndcdn.com/artworks-000297240456-nunucs-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kakegurui-ost-russian-roulette-of-love-jabami-yumeko-yumemite-yumemi.mp3?raw=true",
                    "url": "https://soundcloud.com/user-8445722/kakegurui-ost-russian-roulette-of-love-jabami-yumeko-yumemite-yumemi",
                    "favorited": "false"
                },
                {
                    "name": "Anderson Paak Til Its Over",
                    "artist": "Goodsoupmusic",
                    "cover": "https://i1.sndcdn.com/avatars-000299071217-i856v9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anderson-paak-til-its-over.mp3?raw=true",
                    "url": "https://soundcloud.com/goodsoupmusic/anderson-paak-til-its-over",
                    "favorited": "false"
                },
                {
                    "name": "Legend Of Zelda Breath Of The Wild Revalis Theme Piano ",
                    "artist": "Ds_Music_Official",
                    "cover": "https://i1.sndcdn.com/artworks-000212376434-ld9k8r-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/legend-of-zelda-breath-of-the-wild-revalis-theme-piano-",
                    "url": "https://soundcloud.com/ds_music_official/legend-of-zelda-breath-of-the-wild-revalis-theme-piano-",
                    "favorited": "false"
                },
                {
                    "name": "5Sovayebjhxi",
                    "artist": "Saury315",
                    "cover": "https://i1.sndcdn.com/artworks-v0Udzx8C7Ayyp4rk-rBZeGQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/5sovayebjhxi.mp3?raw=true",
                    "url": "https://soundcloud.com/saury315/5sovayebjhxi",
                    "favorited": "false"
                },
                {
                    "name": "1234Five",
                    "artist": "Tsunderetwintails",
                    "cover": "https://i1.sndcdn.com/artworks-000433322733-b8eonc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/1234five.mp3?raw=true",
                    "url": "https://soundcloud.com/tsunderetwintails/1234five",
                    "favorited": "false"
                },
                {
                    "name": "Trifect Synthion Promenade",
                    "artist": "Trifectt",
                    "cover": "https://i1.sndcdn.com/artworks-000432137160-fv51e6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/trifect-synthion-promenade.mp3?raw=true",
                    "url": "https://soundcloud.com/trifectt/trifect-synthion-promenade",
                    "favorited": "false"
                },
                {
                    "name": "Zac Efrons Squeaky Surfboard Click Buy For Dl",
                    "artist": "Thugwaii",
                    "cover": "https://i1.sndcdn.com/artworks-000129028226-piex4g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/zac-efrons-squeaky-surfboard-click-buy-for-dl.mp3?raw=true",
                    "url": "https://soundcloud.com/thugwaii/zac-efrons-squeaky-surfboard-click-buy-for-dl",
                    "favorited": "false"
                },
                {
                    "name": "Summer 1",
                    "artist": "N Oa Reuploaded",
                    "cover": "https://i1.sndcdn.com/artworks-000308489415-qlh27x-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/summer-1.mp3?raw=true",
                    "url": "https://soundcloud.com/n-oa-reuploaded/summer-1",
                    "favorited": "false"
                },
                {
                    "name": "Kl2Iahkmoobc",
                    "artist": "User 836522875",
                    "cover": "https://i1.sndcdn.com/artworks-fdsPXZ0iXrncyoly-ERgR0A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kl2iahkmoobc.mp3?raw=true",
                    "url": "https://soundcloud.com/user-836522875/kl2iahkmoobc",
                    "favorited": "false"
                },
                {
                    "name": "Bounce Devi Deep House Remix",
                    "artist": "Deviofficial",
                    "cover": "https://i1.sndcdn.com/artworks-000086478917-5knqbf-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bounce-devi-deep-house-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/deviofficial/bounce-devi-deep-house-remix",
                    "favorited": "false"
                },
                {
                    "name": "Thanks For 200 3",
                    "artist": "Prodpoob",
                    "cover": "https://i1.sndcdn.com/artworks-UxQ5xRs0ylwdrcpp-ZWei3A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/thanks-for-200-3.mp3?raw=true",
                    "url": "https://soundcloud.com/prodpoob/thanks-for-200-3",
                    "favorited": "false"
                },
                {
                    "name": "Friends",
                    "artist": "Cutegirlsdoingcutethings",
                    "cover": "https://i1.sndcdn.com/artworks-heTvISq850a4Ge3U-9j6kmw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/friends.mp3?raw=true",
                    "url": "https://soundcloud.com/cutegirlsdoingcutethings/friends",
                    "favorited": "false"
                },
                {
                    "name": "Kamoe",
                    "artist": "Zxnx",
                    "cover": "https://i1.sndcdn.com/artworks-000598441733-ap0jvl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kamoe.mp3?raw=true",
                    "url": "https://soundcloud.com/zxnx/kamoe",
                    "favorited": "false"
                },
                {
                    "name": "Brb",
                    "artist": "Ycrm",
                    "cover": "https://i1.sndcdn.com/artworks-000237355520-p85q49-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/brb.mp3?raw=true",
                    "url": "https://soundcloud.com/ycrm/brb",
                    "favorited": "false"
                },
                {
                    "name": "Dj Ashlins House Mix",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000197096193-3u472z-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dj-ashlins-house-mix.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/dj-ashlins-house-mix",
                    "favorited": "false"
                },
                {
                    "name": "Youve Got Me Yung Bae",
                    "artist": "Aesthetic Dude",
                    "cover": "https://i1.sndcdn.com/artworks-000609087640-imuwex-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/youve-got-me-yung-bae.mp3?raw=true",
                    "url": "https://soundcloud.com/aesthetic-dude/youve-got-me-yung-bae",
                    "favorited": "false"
                },
                {
                    "name": "Silvarounds Devilish Drift",
                    "artist": "Silvarounds",
                    "cover": "https://i1.sndcdn.com/artworks-EokxPSygkHhYrCmF-0zRE8g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/silvarounds-devilish-drift.mp3?raw=true",
                    "url": "https://soundcloud.com/silvarounds/silvarounds-devilish-drift",
                    "favorited": "false"
                },
                {
                    "name": "Sky Blue That Girl",
                    "artist": "3T1A",
                    "cover": "https://i1.sndcdn.com/artworks-VrYBHPK0RdmF4eyS-xnStXA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sky-blue-that-girl.mp3?raw=true",
                    "url": "https://soundcloud.com/3t1a/sky-blue-that-girl",
                    "favorited": "false"
                },
                {
                    "name": "At The Lovers P O O L P A R T Y Night",
                    "artist": "Android Apartment",
                    "cover": "https://i1.sndcdn.com/artworks-000126777619-5thsin-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/at-the-lovers-p-o-o-l-p-a-r-t-y-night.mp3?raw=true",
                    "url": "https://soundcloud.com/android-apartment/at-the-lovers-p-o-o-l-p-a-r-t-y-night",
                    "favorited": "false"
                },
                {
                    "name": "D 8 Romance",
                    "artist": "User 909844975",
                    "cover": "https://i1.sndcdn.com/avatars-e0dxRuonWSemq9m1-zvoylw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/d-8-romance.mp3?raw=true",
                    "url": "https://soundcloud.com/user-909844975/d-8-romance",
                    "favorited": "false"
                },
                {
                    "name": "Dj Ashlins Electro Beams",
                    "artist": "Adgvlogs",
                    "cover": "https://i1.sndcdn.com/artworks-000195825592-l1q6ff-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dj-ashlins-electro-beams.mp3?raw=true",
                    "url": "https://soundcloud.com/adgvlogs/dj-ashlins-electro-beams",
                    "favorited": "false"
                },
                {
                    "name": "Anzious Currents",
                    "artist": "Anzious",
                    "cover": "https://i1.sndcdn.com/avatars-000323777127-64iic7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anzious-currents.mp3?raw=true",
                    "url": "https://soundcloud.com/anzious/anzious-currents",
                    "favorited": "false"
                },
                {
                    "name": "Russian Techno Kroshka Moya",
                    "artist": "Gionni Uno",
                    "cover": "https://i1.sndcdn.com/avatars-000013068709-cyv4ii-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/russian-techno-kroshka-moya.mp3?raw=true",
                    "url": "https://soundcloud.com/gionni-uno/russian-techno-kroshka-moya",
                    "favorited": "false"
                },
                {
                    "name": "Mmmhmm",
                    "artist": "Ohnowearefucked",
                    "cover": "https://i1.sndcdn.com/artworks-zuboBvAiwRpklykd-KJAYMA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mmmhmm.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnowearefucked/mmmhmm",
                    "favorited": "false"
                },
                {
                    "name": "Trip To Chinatown With Mogg 1",
                    "artist": "Anipai",
                    "cover": "https://i1.sndcdn.com/artworks-inZCrCx5RWVWyoLe-enG8qg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/trip-to-chinatown-with-mogg-1.mp3?raw=true",
                    "url": "https://soundcloud.com/anipai/trip-to-chinatown-with-mogg-1",
                    "favorited": "false"
                },
                {
                    "name": "A Day In The Park",
                    "artist": "Kryolitemusic",
                    "cover": "https://i1.sndcdn.com/artworks-M0k24IT3yPMHhZBz-jGqSIg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/a-day-in-the-park.mp3?raw=true",
                    "url": "https://soundcloud.com/kryolitemusic/a-day-in-the-park",
                    "favorited": "false"
                },
                {
                    "name": "Hardbass Mix Russian Techno",
                    "artist": "Richard_Reich",
                    "cover": "https://i1.sndcdn.com/avatars-000670042742-r7b9nm-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hardbass-mix-russian-techno.mp3?raw=true",
                    "url": "https://soundcloud.com/richard_reich/hardbass-mix-russian-techno",
                    "favorited": "false"
                },
                {
                    "name": "Awoo56709",
                    "artist": "Applesodamusic",
                    "cover": "https://i1.sndcdn.com/artworks-000267876824-luyjqn-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/awoo56709.mp3?raw=true",
                    "url": "https://soundcloud.com/applesodamusic/awoo56709",
                    "favorited": "false"
                },
                {
                    "name": "Final Fantasy 7 Victory Fanfare Holder Ephixa Remix",
                    "artist": "Puppetchardmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000167264137-gjci4i-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/final-fantasy-7-victory-fanfare-holder-ephixa-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/puppetchardmusic/final-fantasy-7-victory-fanfare-holder-ephixa-remix",
                    "favorited": "false"
                },
                {
                    "name": "The Brig Kotori Werewolf",
                    "artist": "Mostaddictivemusic",
                    "cover": "https://i1.sndcdn.com/artworks-ApV5GulS54gpPLma-qQlmcg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-brig-kotori-werewolf.mp3?raw=true",
                    "url": "https://soundcloud.com/mostaddictivemusic/the-brig-kotori-werewolf",
                    "favorited": "false"
                },
                {
                    "name": "Koven Light Up",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-dOlUaTfBya4uKNSi-48cRjA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/koven-light-up.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/koven-light-up",
                    "favorited": "false"
                },
                {
                    "name": "Take Me Back To Shinjuku",
                    "artist": "Groovy Godzilla",
                    "cover": "https://i1.sndcdn.com/artworks-EWPg79C0N0OpPunA-OlwIMw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/take-me-back-to-shinjuku.mp3?raw=true",
                    "url": "https://soundcloud.com/groovy-godzilla/take-me-back-to-shinjuku",
                    "favorited": "false"
                },
                {
                    "name": "Your Grill",
                    "artist": "Futuregirlfriendmusic",
                    "cover": "https://i1.sndcdn.com/artworks-000142709386-lhgz62-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/your-grill.mp3?raw=true",
                    "url": "https://soundcloud.com/futuregirlfriendmusic/your-grill",
                    "favorited": "false"
                },
                {
                    "name": "Saturn Your Sword",
                    "artist": "Saturn_Isfunk",
                    "cover": "https://i1.sndcdn.com/artworks-S5tBQiFph83rxk0i-UuQypg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/saturn-your-sword.mp3?raw=true",
                    "url": "https://soundcloud.com/saturn_isfunk/saturn-your-sword",
                    "favorited": "false"
                },
                {
                    "name": "Crying In My Room",
                    "artist": "Samuel Von Borsted Castro",
                    "cover": "https://i1.sndcdn.com/artworks-LK3TInP94VdqjT9w-fV4CXQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/crying-in-my-room.mp3?raw=true",
                    "url": "https://soundcloud.com/samuel-von-borsted-castro/crying-in-my-room",
                    "favorited": "false"
                },
                {
                    "name": "Virgins Club",
                    "artist": "Mcvirgins",
                    "cover": "https://i1.sndcdn.com/artworks-RPeY1CNUP0HwhvgY-8cLZsA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/virgins-club.mp3?raw=true",
                    "url": "https://soundcloud.com/mcvirgins/virgins-club",
                    "favorited": "false"
                },
                {
                    "name": "Spuke Le Metro",
                    "artist": "Bonsaicollct",
                    "cover": "https://i1.sndcdn.com/artworks-000415081545-ed3nqt-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/spuke-le-metro.mp3?raw=true",
                    "url": "https://soundcloud.com/bonsaicollct/spuke-le-metro",
                    "favorited": "false"
                },
                {
                    "name": "Mask Off Remix",
                    "artist": "Elijahyats",
                    "cover": "https://i1.sndcdn.com/artworks-000232982966-bnwt8a-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mask-off-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/elijahyats/mask-off-remix",
                    "favorited": "false"
                },
                {
                    "name": "Illenium Kerli Sound Of Walking Away",
                    "artist": "Illeniumofficial",
                    "cover": "https://i1.sndcdn.com/artworks-000219483422-zmwoay-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/illenium-kerli-sound-of-walking-away.mp3?raw=true",
                    "url": "https://soundcloud.com/illeniumofficial/illenium-kerli-sound-of-walking-away",
                    "favorited": "false"
                },
                {
                    "name": "Circles Dj Tony Remix",
                    "artist": "Tonyofficialza",
                    "cover": "https://i1.sndcdn.com/artworks-000184610589-fqc5y0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/circles-dj-tony-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/tonyofficialza/circles-dj-tony-remix",
                    "favorited": "false"
                },
                {
                    "name": "Dont Turn Around",
                    "artist": "Ghostfaceplaya",
                    "cover": "https://i1.sndcdn.com/artworks-mmlH4chJSg3MD8Ky-5nbhxg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dont-turn-around.mp3?raw=true",
                    "url": "https://soundcloud.com/ghostfaceplaya/dont-turn-around",
                    "favorited": "false"
                },
                {
                    "name": "Anime Things 1",
                    "artist": "L L 260099405",
                    "cover": "https://i1.sndcdn.com/artworks-000701477509-d0p0qz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anime-things-1.mp3?raw=true",
                    "url": "https://soundcloud.com/l-l-260099405/anime-things-1",
                    "favorited": "false"
                },
                {
                    "name": "Adjeymane X Soudiere The Lost Chapter Full Stream",
                    "artist": "Ohweup",
                    "cover": "https://i1.sndcdn.com/artworks-000239331612-5r7fcb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/adjeymane-x-soudiere-the-lost-chapter-full-stream.mp3?raw=true",
                    "url": "https://soundcloud.com/ohweup/adjeymane-x-soudiere-the-lost-chapter-full-stream",
                    "favorited": "false"
                },
                {
                    "name": "Chocolate Box",
                    "artist": "Dcuttermusic",
                    "cover": "https://i1.sndcdn.com/artworks-000152982258-398zn0-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chocolate-box.mp3?raw=true",
                    "url": "https://soundcloud.com/dcuttermusic/chocolate-box",
                    "favorited": "false"
                },
                {
                    "name": "Straight Out The Trap",
                    "artist": "Sappy94",
                    "cover": "https://i1.sndcdn.com/artworks-000259951922-pdwh09-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/straight-out-the-trap.mp3?raw=true",
                    "url": "https://soundcloud.com/sappy94/straight-out-the-trap",
                    "favorited": "false"
                },
                {
                    "name": "Mariya Takeuchi Plastic Love Night Tempo 100 Pure Remastered",
                    "artist": "Discolithe",
                    "cover": "https://i1.sndcdn.com/artworks-8aSDlHhKSOzzA4Co-b5lecQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mariya-takeuchi-plastic-love-night-tempo-100-pure-remastered.mp3?raw=true",
                    "url": "https://soundcloud.com/discolithe/mariya-takeuchi-plastic-love-night-tempo-100-pure-remastered",
                    "favorited": "false"
                },
                {
                    "name": "Dali Voodoo Gangs All Here",
                    "artist": "Dalivoodoo",
                    "cover": "https://i1.sndcdn.com/artworks-000196827099-h74a0o-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dali-voodoo-gangs-all-here.mp3?raw=true",
                    "url": "https://soundcloud.com/dalivoodoo/dali-voodoo-gangs-all-here",
                    "favorited": "false"
                },
                {
                    "name": "Little Kouhai",
                    "artist": "Pond Of Koi Fish",
                    "cover": "https://i1.sndcdn.com/artworks-000155555890-n6eygb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/little-kouhai.mp3?raw=true",
                    "url": "https://soundcloud.com/pond-of-koi-fish/little-kouhai",
                    "favorited": "false"
                },
                {
                    "name": "Bad Boujee",
                    "artist": "Imsynthion",
                    "cover": "https://i1.sndcdn.com/artworks-000642236776-vwnxqm-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bad-boujee.mp3?raw=true",
                    "url": "https://soundcloud.com/imsynthion/bad-boujee",
                    "favorited": "false"
                },
                {
                    "name": "Yakuza 0 Baka Mitai Dame Da Ne",
                    "artist": "Magnessium 977391769",
                    "cover": "https://i1.sndcdn.com/avatars-000686158269-moj9yg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yakuza-0-baka-mitai-dame-da-ne.mp3?raw=true",
                    "url": "https://soundcloud.com/magnessium-977391769/yakuza-0-baka-mitai-dame-da-ne",
                    "favorited": "false"
                },
                {
                    "name": "Considering It Porn Ads On Kissanime",
                    "artist": "Ohnoitskokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-1mmA7m7si4xKUyzI-A6G27w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/considering-it-porn-ads-on-kissanime.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnoitskokonoku/considering-it-porn-ads-on-kissanime",
                    "favorited": "false"
                },
                {
                    "name": "Wk9Lgozgsw9Z",
                    "artist": "Tanukimusic",
                    "cover": "https://i1.sndcdn.com/artworks-000367016967-50sl0m-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/wk9lgozgsw9z.mp3?raw=true",
                    "url": "https://soundcloud.com/tanukimusic/wk9lgozgsw9z",
                    "favorited": "false"
                },
                {
                    "name": "Chobits Let Me Be With You",
                    "artist": "Humbertochalate",
                    "cover": "https://i1.sndcdn.com/artworks-000018835731-dpzc12-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chobits-let-me-be-with-you.mp3?raw=true",
                    "url": "https://soundcloud.com/humbertochalate/chobits-let-me-be-with-you",
                    "favorited": "false"
                },
                {
                    "name": "Laszlo Interstellar",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000088638706-deqkec-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/laszlo-interstellar.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/laszlo-interstellar",
                    "favorited": "false"
                },
                {
                    "name": "Hold You Close Free Download",
                    "artist": "Powlymusic",
                    "cover": "https://i1.sndcdn.com/artworks-000197096759-s9swku-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hold-you-close-free-download.mp3?raw=true",
                    "url": "https://soundcloud.com/powlymusic/hold-you-close-free-download",
                    "favorited": "false"
                },
                {
                    "name": "Igotone",
                    "artist": "Alltta",
                    "cover": "https://i1.sndcdn.com/artworks-000260693369-317cm4-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/igotone.mp3?raw=true",
                    "url": "https://soundcloud.com/alltta/igotone",
                    "favorited": "false"
                },
                {
                    "name": "Happy Endings",
                    "artist": "Plexi Two",
                    "cover": "https://i1.sndcdn.com/artworks-000257952980-bi5whl-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/happy-endings.mp3?raw=true",
                    "url": "https://soundcloud.com/plexi-two/happy-endings",
                    "favorited": "false"
                },
                {
                    "name": "Hello New World",
                    "artist": "Kashiwade",
                    "cover": "https://i1.sndcdn.com/artworks-Sq6F6YKZQBapzw3S-B6kUvw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hello-new-world.mp3?raw=true",
                    "url": "https://soundcloud.com/kashiwade/hello-new-world",
                    "favorited": "false"
                },
                {
                    "name": "Chug Jug With You Loli ",
                    "artist": "User 485062349",
                    "cover": "https://i1.sndcdn.com/artworks-Q3SY4nAOE0lllXEn-zAmK3g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chug-jug-with-you-loli-",
                    "url": "https://soundcloud.com/user-485062349/chug-jug-with-you-loli-",
                    "favorited": "false"
                },
                {
                    "name": "Tri Paloski",
                    "artist": "User 605469068",
                    "cover": "https://i1.sndcdn.com/artworks-000208948143-hj2j2b-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tri-paloski.mp3?raw=true",
                    "url": "https://soundcloud.com/user-605469068/tri-paloski",
                    "favorited": "false"
                },
                {
                    "name": "Melancholy Trajectory",
                    "artist": "User 854701180",
                    "cover": "https://i1.sndcdn.com/artworks-miQ4qKv6AumGwglC-szHuRg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/melancholy-trajectory.mp3?raw=true",
                    "url": "https://soundcloud.com/user-854701180/melancholy-trajectory",
                    "favorited": "false"
                },
                {
                    "name": "Mrbrightside",
                    "artist": "Twofriendsremixes",
                    "cover": "https://i1.sndcdn.com/artworks-000192691693-p5n18s-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/mrbrightside.mp3?raw=true",
                    "url": "https://soundcloud.com/twofriendsremixes/mrbrightside",
                    "favorited": "false"
                },
                {
                    "name": "Camellia Feat Nanahira I Dont Care About Christmas Though",
                    "artist": "Sc Rl",
                    "cover": "https://i1.sndcdn.com/artworks-kkeznyiifnS3AmGB-V3FNFA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/camellia-feat-nanahira-i-dont-care-about-christmas-though.mp3?raw=true",
                    "url": "https://soundcloud.com/sc-rl/camellia-feat-nanahira-i-dont-care-about-christmas-though",
                    "favorited": "false"
                },
                {
                    "name": "Kancolle Wlil Yume",
                    "artist": "Palmtrees Shit",
                    "cover": "https://i1.sndcdn.com/artworks-000360041592-wco4kj-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kancolle-wlil-yume.mp3?raw=true",
                    "url": "https://soundcloud.com/palmtrees-shit/kancolle-wlil-yume",
                    "favorited": "false"
                },
                {
                    "name": "Future Funk City",
                    "artist": "Sh1Ruett0",
                    "cover": "https://i1.sndcdn.com/artworks-6rsohoKd1wlldY9x-iLtKuw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/future-funk-city.mp3?raw=true",
                    "url": "https://soundcloud.com/sh1ruett0/future-funk-city",
                    "favorited": "false"
                },
                {
                    "name": "Cowbell Paradise",
                    "artist": "Ksaider 296370765",
                    "cover": "https://i1.sndcdn.com/artworks-RqEOR4DKRxyXpvqA-44JQJA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cowbell-paradise.mp3?raw=true",
                    "url": "https://soundcloud.com/ksaider-296370765/cowbell-paradise",
                    "favorited": "false"
                },
                {
                    "name": "Alan Walker Faded Dj Tony Remix",
                    "artist": "Tonyofficialza",
                    "cover": "https://i1.sndcdn.com/artworks-000167777098-8lj8np-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/alan-walker-faded-dj-tony-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/tonyofficialza/alan-walker-faded-dj-tony-remix",
                    "favorited": "false"
                },
                {
                    "name": "Itseeezy Sunnys Groove",
                    "artist": "Orangesodabandit",
                    "cover": "https://i1.sndcdn.com/artworks-IDF9wUoDVVXIyZcV-Nwy2wA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/itseeezy-sunnys-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/orangesodabandit/itseeezy-sunnys-groove",
                    "favorited": "false"
                },
                {
                    "name": "Anzious Impulse",
                    "artist": "Fanservicecollective",
                    "cover": "https://i1.sndcdn.com/artworks-000156660223-31m0ri-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/anzious-impulse.mp3?raw=true",
                    "url": "https://soundcloud.com/fanservicecollective/anzious-impulse",
                    "favorited": "false"
                },
                {
                    "name": "At The Joint",
                    "artist": "Hecsuu",
                    "cover": "https://i1.sndcdn.com/artworks-tSb5HeI4rczga2Jh-HXW9Tw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/at-the-joint.mp3?raw=true",
                    "url": "https://soundcloud.com/hecsuu/at-the-joint",
                    "favorited": "false"
                },
                {
                    "name": "Lipstick",
                    "artist": "Pond Of Koi Fish",
                    "cover": "https://i1.sndcdn.com/artworks-000211966178-nka98t-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/lipstick.mp3?raw=true",
                    "url": "https://soundcloud.com/pond-of-koi-fish/lipstick",
                    "favorited": "false"
                },
                {
                    "name": "Find Me In The Cut",
                    "artist": "1Ony",
                    "cover": "https://i1.sndcdn.com/artworks-000289083164-b2w7vi-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/find-me-in-the-cut.mp3?raw=true",
                    "url": "https://soundcloud.com/1ony/find-me-in-the-cut",
                    "favorited": "false"
                },
                {
                    "name": "Cinnamon",
                    "artist": "Atonyn",
                    "cover": "https://i1.sndcdn.com/artworks-70NNa5MtcNXwXJJt-eH4iCQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/cinnamon.mp3?raw=true",
                    "url": "https://soundcloud.com/atonyn/cinnamon",
                    "favorited": "false"
                },
                {
                    "name": "For Your Safety",
                    "artist": "Christianmk",
                    "cover": "https://i1.sndcdn.com/artworks-000504691656-g0y7hw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/for-your-safety.mp3?raw=true",
                    "url": "https://soundcloud.com/christianmk/for-your-safety",
                    "favorited": "false"
                },
                {
                    "name": "Motions",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/motions.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/motions",
                    "favorited": "false"
                },
                {
                    "name": "Strawberry Station Everbody Gets One Zai Kowen Critical Grim Remix",
                    "artist": "Just_Grim",
                    "cover": "https://i1.sndcdn.com/artworks-ZTIWy5SrgfAmvEOV-0j5BDQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/strawberry-station-everbody-gets-one-zai-kowen-critical-grim-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/just_grim/strawberry-station-everbody-gets-one-zai-kowen-critical-grim-remix",
                    "favorited": "false"
                },
                {
                    "name": "A Certian Intrumental",
                    "artist": "Plexi Two",
                    "cover": "https://i1.sndcdn.com/artworks-000562513221-2vbc3l-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/a-certian-intrumental.mp3?raw=true",
                    "url": "https://soundcloud.com/plexi-two/a-certian-intrumental",
                    "favorited": "false"
                },
                {
                    "name": "Maaya Sakamoto Inori",
                    "artist": "Yotsuoo",
                    "cover": "https://i1.sndcdn.com/artworks-9VtLc5wER0OOvGlv-8O10wA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/maaya-sakamoto-inori.mp3?raw=true",
                    "url": "https://soundcloud.com/yotsuoo/maaya-sakamoto-inori",
                    "favorited": "false"
                },
                {
                    "name": "Sambalamento",
                    "artist": "Tera Kora",
                    "cover": "https://i1.sndcdn.com/artworks-000390358227-fnvzv6-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sambalamento.mp3?raw=true",
                    "url": "https://soundcloud.com/tera-kora/sambalamento",
                    "favorited": "false"
                },
                {
                    "name": "Sayu",
                    "artist": "Theunorthodoxproducer",
                    "cover": "https://i1.sndcdn.com/artworks-zYpPNcKCFst732zp-xTgJUA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sayu.mp3?raw=true",
                    "url": "https://soundcloud.com/theunorthodoxproducer/sayu",
                    "favorited": "false"
                },
                {
                    "name": "Chroma",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-000356564757-go7tud-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chroma.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/chroma",
                    "favorited": "false"
                },
                {
                    "name": "Dance",
                    "artist": "Kotu",
                    "cover": "https://i1.sndcdn.com/artworks-000372187038-zqjn48-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dance.mp3?raw=true",
                    "url": "https://soundcloud.com/kotu/dance",
                    "favorited": "false"
                },
                {
                    "name": "Seasons",
                    "artist": "Chinsaku",
                    "cover": "https://i1.sndcdn.com/artworks-SljXuQJEDMmbY9CD-DwUPWw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/seasons.mp3?raw=true",
                    "url": "https://soundcloud.com/chinsaku/seasons",
                    "favorited": "false"
                },
                {
                    "name": "Muffled Girl",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/artworks-fG5ezsEDWkQWl6qm-GKhzXw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/muffled-girl.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/muffled-girl",
                    "favorited": "false"
                },
                {
                    "name": "Watamote Watashi Ga Motenai No",
                    "artist": "Abiikat",
                    "cover": "https://i1.sndcdn.com/artworks-000056754729-cdioeo-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/watamote-watashi-ga-motenai-no.mp3?raw=true",
                    "url": "https://soundcloud.com/abiikat/watamote-watashi-ga-motenai-no",
                    "favorited": "false"
                },
                {
                    "name": "Eighteen",
                    "artist": "Kshiraki",
                    "cover": "https://i1.sndcdn.com/avatars-XuMm9HkRL3viyzx2-7msN6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/eighteen.mp3?raw=true",
                    "url": "https://soundcloud.com/kshiraki/eighteen",
                    "favorited": "false"
                },
                {
                    "name": "Bbs Theme Death Stranding Ost",
                    "artist": "Waterlaaw",
                    "cover": "https://i1.sndcdn.com/artworks-000626928505-tmdap8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bbs-theme-death-stranding-ost.mp3?raw=true",
                    "url": "https://soundcloud.com/waterlaaw/bbs-theme-death-stranding-ost",
                    "favorited": "false"
                },
                {
                    "name": "Blushu",
                    "artist": "I Am Aika",
                    "cover": "https://i1.sndcdn.com/artworks-znZPCowEafTbhvxd-kyVr1Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/blushu.mp3?raw=true",
                    "url": "https://soundcloud.com/i-am-aika/blushu",
                    "favorited": "false"
                },
                {
                    "name": "2Hours Dtm 7",
                    "artist": "Hiyamavln",
                    "cover": "https://i1.sndcdn.com/avatars-000180295435-lrgmoc-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/2hours-dtm-7.mp3?raw=true",
                    "url": "https://soundcloud.com/hiyamavln/2hours-dtm-7",
                    "favorited": "false"
                },
                {
                    "name": "Bunny Bossa",
                    "artist": "Mayolazr",
                    "cover": "https://i1.sndcdn.com/artworks-TshDM5gQrME6QiUk-99aoBQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bunny-bossa.mp3?raw=true",
                    "url": "https://soundcloud.com/mayolazr/bunny-bossa",
                    "favorited": "false"
                },
                {
                    "name": "Aho Girl Ed Ending Full",
                    "artist": "Karen_Kujou",
                    "cover": "https://i1.sndcdn.com/artworks-000425064474-u7dny1-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/aho-girl-ed-ending-full.mp3?raw=true",
                    "url": "https://soundcloud.com/karen_kujou/aho-girl-ed-ending-full",
                    "favorited": "false"
                },
                {
                    "name": "Kuby Dazers Unkhala Esky Flip",
                    "artist": "Eskysmind",
                    "cover": "https://i1.sndcdn.com/artworks-000189944392-dvzwlp-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kuby-dazers-unkhala-esky-flip.mp3?raw=true",
                    "url": "https://soundcloud.com/eskysmind/kuby-dazers-unkhala-esky-flip",
                    "favorited": "false"
                },
                {
                    "name": "Les Parfums De Lamour",
                    "artist": "Edwin Js 394757193",
                    "cover": "https://i1.sndcdn.com/avatars-000318788314-ecuyt2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/les-parfums-de-lamour.mp3?raw=true",
                    "url": "https://soundcloud.com/edwin-js-394757193/les-parfums-de-lamour",
                    "favorited": "false"
                },
                {
                    "name": "Im A Sick Cow I Like A Quick Moo",
                    "artist": "Kurosai",
                    "cover": "https://i1.sndcdn.com/artworks-000402448899-c3nrpr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/im-a-sick-cow-i-like-a-quick-moo.mp3?raw=true",
                    "url": "https://soundcloud.com/kurosai/im-a-sick-cow-i-like-a-quick-moo",
                    "favorited": "false"
                },
                {
                    "name": "Evening Coffee 1",
                    "artist": "Coldglow",
                    "cover": "https://i1.sndcdn.com/artworks-000532873845-wfz2ko-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/evening-coffee-1.mp3?raw=true",
                    "url": "https://soundcloud.com/coldglow/evening-coffee-1",
                    "favorited": "false"
                },
                {
                    "name": "The Luxury Elite Esp",
                    "artist": "User 949758300",
                    "cover": "https://i1.sndcdn.com/artworks-000650471419-krbcne-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-luxury-elite-esp.mp3?raw=true",
                    "url": "https://soundcloud.com/user-949758300/the-luxury-elite-esp",
                    "favorited": "false"
                },
                {
                    "name": "Matsuri",
                    "artist": "Kyotosketch",
                    "cover": "https://i1.sndcdn.com/artworks-000140692233-r1oia5-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/matsuri.mp3?raw=true",
                    "url": "https://soundcloud.com/kyotosketch/matsuri",
                    "favorited": "false"
                },
                {
                    "name": "Otafunk",
                    "artist": "Imyo",
                    "cover": "https://i1.sndcdn.com/artworks-eJ5CAlhKQtgWyp0Z-GB7d6Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/otafunk.mp3?raw=true",
                    "url": "https://soundcloud.com/imyo",
                    "favorited": "false"
                },
                {
                    "name": "Bye Bye Bob Og Momz",
                    "artist": "Dankcpt",
                    "cover": "https://i1.sndcdn.com/artworks-000259762067-fdxfwu-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bye-bye-bob-og-momz.mp3?raw=true",
                    "url": "https://soundcloud.com/dankcpt/bye-bye-bob-og-momz",
                    "favorited": "false"
                },
                {
                    "name": "Twos 2",
                    "artist": "Yugiboi",
                    "cover": "https://i1.sndcdn.com/artworks-000190514383-lbk5lt-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/twos-2.mp3?raw=true",
                    "url": "https://soundcloud.com/yugiboi/twos-2",
                    "favorited": "false"
                },
                {
                    "name": "Conro Circus Feat Beckii Power",
                    "artist": "Conromusic",
                    "cover": "https://i1.sndcdn.com/artworks-000237557599-b1fjyb-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/conro-circus-feat-beckii-power.mp3?raw=true",
                    "url": "https://soundcloud.com/conromusic/conro-circus-feat-beckii-power",
                    "favorited": "false"
                },
                {
                    "name": "Someone Special",
                    "artist": "Tomatoism",
                    "cover": "https://i1.sndcdn.com/artworks-000215839089-3h1890-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/someone-special.mp3?raw=true",
                    "url": "https://soundcloud.com/tomatoism/someone-special",
                    "favorited": "false"
                },
                {
                    "name": "Jack Harlow Whats Poppin Flip",
                    "artist": "Taj Pierre",
                    "cover": "https://i1.sndcdn.com/artworks-jLYp2rFuz6unjvJJ-ayaM5Q-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/jack-harlow-whats-poppin-flip.mp3?raw=true",
                    "url": "https://soundcloud.com/taj-pierre/jack-harlow-whats-poppin-flip",
                    "favorited": "false"
                },
                {
                    "name": "Soap",
                    "artist": "Eveline Eevee",
                    "cover": "https://i1.sndcdn.com/artworks-000438863637-aokhss-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/soap.mp3?raw=true",
                    "url": "https://soundcloud.com/eveline-eevee/soap",
                    "favorited": "false"
                },
                {
                    "name": "Gopnik Mcblyat Pumping Frenzy",
                    "artist": "Gopnikmcblyat",
                    "cover": "https://i1.sndcdn.com/artworks-000240878201-jz7y3i-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/gopnik-mcblyat-pumping-frenzy.mp3?raw=true",
                    "url": "https://soundcloud.com/gopnikmcblyat/gopnik-mcblyat-pumping-frenzy",
                    "favorited": "false"
                },
                {
                    "name": "Night",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000182288573-807b39-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/night.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/night",
                    "favorited": "false"
                },
                {
                    "name": "Toby Fox Undertale",
                    "artist": "Angrysausage",
                    "cover": "https://i1.sndcdn.com/artworks-000131645701-i1y1tk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/toby-fox-undertale.mp3?raw=true",
                    "url": "https://soundcloud.com/angrysausage/toby-fox-undertale",
                    "favorited": "false"
                },
                {
                    "name": "Catz N Hood Will Light Dance",
                    "artist": "Gangstahouserec",
                    "cover": "https://i1.sndcdn.com/artworks-ifDhxOpuXhrzOUgD-lrhScw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/catz-n-hood-will-light-dance.mp3?raw=true",
                    "url": "https://soundcloud.com/gangstahouserec/catz-n-hood-will-light-dance",
                    "favorited": "false"
                },
                {
                    "name": "I Tried To Recreate Moe Shops Lisztomania Remix",
                    "artist": "Meeyothings",
                    "cover": "https://i1.sndcdn.com/artworks-000349952835-3nv9gk-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/i-tried-to-recreate-moe-shops-lisztomania-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/meeyothings/i-tried-to-recreate-moe-shops-lisztomania-remix",
                    "favorited": "false"
                },
                {
                    "name": "Ano Hana Ending Secret Base",
                    "artist": "Josulok 1",
                    "cover": "https://i1.sndcdn.com/artworks-000060586988-g95cz7-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ano-hana-ending-secret-base.mp3?raw=true",
                    "url": "https://soundcloud.com/josulok-1/ano-hana-ending-secret-base",
                    "favorited": "false"
                },
                {
                    "name": "Floating Gardens",
                    "artist": "Kaivaan",
                    "cover": "https://i1.sndcdn.com/artworks-000252095096-cph6pm-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/floating-gardens.mp3?raw=true",
                    "url": "https://soundcloud.com/kaivaan/floating-gardens",
                    "favorited": "false"
                },
                {
                    "name": "Chillin With Some Koi Fish",
                    "artist": "Groovy Godzilla",
                    "cover": "https://i1.sndcdn.com/artworks-kI6I1HtUVtMnEMxf-q6J35w-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chillin-with-some-koi-fish.mp3?raw=true",
                    "url": "https://soundcloud.com/groovy-godzilla/chillin-with-some-koi-fish",
                    "favorited": "false"
                },
                {
                    "name": "Hit Them Bricks",
                    "artist": "Sheltr666",
                    "cover": "https://i1.sndcdn.com/artworks-000306646497-hdgoax-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hit-them-bricks.mp3?raw=true",
                    "url": "https://soundcloud.com/sheltr666/hit-them-bricks",
                    "favorited": "false"
                },
                {
                    "name": "Naru Maru Ma Ru Moe Shop Edit Plexi Remake",
                    "artist": "User 449281100",
                    "cover": "https://i1.sndcdn.com/artworks-dQCRTEwB5YBoRa5h-5W3rGQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/naru-maru-ma-ru-moe-shop-edit-plexi-remake.mp3?raw=true",
                    "url": "https://soundcloud.com/user-449281100/naru-maru-ma-ru-moe-shop-edit-plexi-remake",
                    "favorited": "false"
                },
                {
                    "name": "Rocket 22",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000192938187-4avyxw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/rocket-22.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/rocket-22",
                    "favorited": "false"
                },
                {
                    "name": "Discogod_Agremix",
                    "artist": "K_Saky",
                    "cover": "https://i1.sndcdn.com/artworks-E5XNPzEg9ngJHXXe-lXpSiw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/discogod_agremix.mp3?raw=true",
                    "url": "https://soundcloud.com/k_saky/discogod_agremix",
                    "favorited": "false"
                },
                {
                    "name": "Dreamn Stratocaster",
                    "artist": "Pomodorosa",
                    "cover": "https://i1.sndcdn.com/artworks-yqyI1DUesCqLnJ2b-y663Vw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/dreamn-stratocaster.mp3?raw=true",
                    "url": "https://soundcloud.com/pomodorosa/dreamn-stratocaster",
                    "favorited": "false"
                },
                {
                    "name": "Alexvin Sales Hurt Me",
                    "artist": "Gmafiarecords",
                    "cover": "https://i1.sndcdn.com/artworks-000629997388-e7xpr3-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/alexvin-sales-hurt-me.mp3?raw=true",
                    "url": "https://soundcloud.com/gmafiarecords/alexvin-sales-hurt-me",
                    "favorited": "false"
                },
                {
                    "name": "Sasuke Took My Bitch",
                    "artist": "Bootymunch",
                    "cover": "https://i1.sndcdn.com/artworks-000222498667-juw3o2-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sasuke-took-my-bitch.mp3?raw=true",
                    "url": "https://soundcloud.com/bootymunch/sasuke-took-my-bitch",
                    "favorited": "false"
                },
                {
                    "name": "Kk House Remix",
                    "artist": "Neonvectors",
                    "cover": "https://i1.sndcdn.com/artworks-hxaazA4UKz7KKUo0-wryieA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/kk-house-remix.mp3?raw=true",
                    "url": "https://soundcloud.com/neonvectors/kk-house-remix",
                    "favorited": "false"
                },
                {
                    "name": "Too Much Ft 24Hrs",
                    "artist": "Flosstradamus",
                    "cover": "https://i1.sndcdn.com/artworks-000299395071-g26k40-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/too-much-ft-24hrs.mp3?raw=true",
                    "url": "https://soundcloud.com/flosstradamus/too-much-ft-24hrs",
                    "favorited": "false"
                },
                {
                    "name": "Luka Burr Mary Jane For The Brain",
                    "artist": "Luka245",
                    "cover": "https://i1.sndcdn.com/artworks-Q5HrmRcAVf97Hkgw-9cB3RA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/luka-burr-mary-jane-for-the-brain.mp3?raw=true",
                    "url": "https://soundcloud.com/luka245/luka-burr-mary-jane-for-the-brain",
                    "favorited": "false"
                },
                {
                    "name": "Bleu Clair Drinks On Me Hit List",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-tvcC7ytDJGJu4TNX-BclUbw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/bleu-clair-drinks-on-me-hit-list.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/bleu-clair-drinks-on-me-hit-list",
                    "favorited": "false"
                },
                {
                    "name": "Chika Vibes Kaguya Sama Love Is War",
                    "artist": "Tim Cochard",
                    "cover": "https://i1.sndcdn.com/artworks-000517617870-zgezb8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/chika-vibes-kaguya-sama-love-is-war.mp3?raw=true",
                    "url": "https://soundcloud.com/tim-cochard/chika-vibes-kaguya-sama-love-is-war",
                    "favorited": "false"
                },
                {
                    "name": "Ice Cream",
                    "artist": "Verzache",
                    "cover": "https://i1.sndcdn.com/artworks-000206680537-pulah9-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ice-cream.mp3?raw=true",
                    "url": "https://soundcloud.com/verzache/ice-cream",
                    "favorited": "false"
                },
                {
                    "name": "Android52 Dancing All Night",
                    "artist": "Divergence2016",
                    "cover": "https://i1.sndcdn.com/artworks-000232789599-jospow-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/android52-dancing-all-night.mp3?raw=true",
                    "url": "https://soundcloud.com/divergence2016/android52-dancing-all-night",
                    "favorited": "false"
                },
                {
                    "name": "Water Ball Fix 20200622",
                    "artist": "Pandaboy",
                    "cover": "https://i1.sndcdn.com/artworks-o5zylC9eMFRIKXIJ-WFxiAQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/water-ball-fix-20200622.mp3?raw=true",
                    "url": "https://soundcloud.com/pandaboy/water-ball-fix-20200622",
                    "favorited": "false"
                },
                {
                    "name": "Girls Last Groove",
                    "artist": "Hiero Music",
                    "cover": "https://i1.sndcdn.com/artworks-000323128584-cxj7yz-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/girls-last-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/hiero-music/girls-last-groove",
                    "favorited": "false"
                },
                {
                    "name": "Yoshiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    "artist": "Ohnowearefucked",
                    "cover": "https://i1.sndcdn.com/artworks-f65EsZdOcNla1Aux-vlKaVA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/yoshiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.mp3?raw=true",
                    "url": "https://soundcloud.com/ohnowearefucked/yoshiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                    "favorited": "false"
                },
                {
                    "name": "Were All Crazy",
                    "artist": "Kokonoku",
                    "cover": "https://i1.sndcdn.com/artworks-000377274036-68jmo8-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/were-all-crazy.mp3?raw=true",
                    "url": "https://soundcloud.com/kokonoku/were-all-crazy",
                    "favorited": "false"
                },
                {
                    "name": "Doki Doki Jump Feat Puniden",
                    "artist": "Club2Tokyo",
                    "cover": "https://i1.sndcdn.com/artworks-ZDddU1vYEKEyhYGe-ZyzQnQ-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/doki-doki-jump-feat-puniden.mp3?raw=true",
                    "url": "https://soundcloud.com/club2tokyo/doki-doki-jump-feat-puniden",
                    "favorited": "false"
                },
                {
                    "name": "Sey Chans Waltz Season Finale 2020",
                    "artist": "Seycara Orchestral",
                    "cover": "https://i1.sndcdn.com/artworks-c7XvI4fMUQWDSHqz-rJ098A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/sey-chans-waltz-season-finale-2020.mp3?raw=true",
                    "url": "https://soundcloud.com/seycara-orchestral/sey-chans-waltz-season-finale-2020",
                    "favorited": "false"
                },
                {
                    "name": "The New Moe Groove",
                    "artist": "Moeshop",
                    "cover": "https://i1.sndcdn.com/artworks-000131118380-unrbzx-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-new-moe-groove.mp3?raw=true",
                    "url": "https://soundcloud.com/moeshop/the-new-moe-groove",
                    "favorited": "false"
                },
                {
                    "name": "Forever W Tony",
                    "artist": "Yungbubby",
                    "cover": "https://i1.sndcdn.com/artworks-000234454054-xlvome-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/forever-w-tony.mp3?raw=true",
                    "url": "https://soundcloud.com/yungbubby/forever-w-tony",
                    "favorited": "false"
                },
                {
                    "name": "Ayaya",
                    "artist": "Korewamoemoemoe",
                    "cover": "https://i1.sndcdn.com/avatars-aPXogjt1jfUkpBfY-AyyJSA-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ayaya.mp3?raw=true",
                    "url": "https://soundcloud.com/korewamoemoemoe/ayaya",
                    "favorited": "false"
                },
                {
                    "name": "Universe",
                    "artist": "Thomashayden",
                    "cover": "https://i1.sndcdn.com/artworks-MGGzypSjNcsSDzbm-eIkcYw-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/universe.mp3?raw=true",
                    "url": "https://soundcloud.com/thomashayden/universe",
                    "favorited": "false"
                },
                {
                    "name": "Tokyo Machine Rock It",
                    "artist": "Monstercat",
                    "cover": "https://i1.sndcdn.com/artworks-000226704567-lg4q9g-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/tokyo-machine-rock-it.mp3?raw=true",
                    "url": "https://soundcloud.com/monstercat/tokyo-machine-rock-it",
                    "favorited": "false"
                },
                {
                    "name": "Coffin Freestyle",
                    "artist": "Blxckie",
                    "cover": "https://i1.sndcdn.com/artworks-CZrinsn7WiSa6V53-iRSpFg-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/coffin-freestyle.mp3?raw=true",
                    "url": "https://soundcloud.com/blxckie/coffin-freestyle",
                    "favorited": "false"
                },
                {
                    "name": "Matabei Aests Rouge Five Is Plenty",
                    "artist": "Themoecafe",
                    "cover": "https://i1.sndcdn.com/artworks-000237276543-8jnx5t-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/matabei-aests-rouge-five-is-plenty.mp3?raw=true",
                    "url": "https://soundcloud.com/themoecafe/matabei-aests-rouge-five-is-plenty",
                    "favorited": "false"
                },
                {
                    "name": "The Girl Next Door On Top But Its The Full Sweatpants Childish Gambino",
                    "artist": "User 769385633",
                    "cover": "https://i1.sndcdn.com/artworks-000579310526-9uxydr-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/the-girl-next-door-on-top-but-its-the-full-sweatpants-childish-gambino.mp3?raw=true",
                    "url": "https://soundcloud.com/user-769385633/the-girl-next-door-on-top-but-its-the-full-sweatpants-childish-gambino",
                    "favorited": "false"
                },
                {
                    "name": "Garden Girl W Mimikyu Cute Girls Doing Cute Things",
                    "artist": "Quosongs",
                    "cover": "https://i1.sndcdn.com/artworks-000316114434-z4c7nh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/garden-girl-w-mimikyu-cute-girls-doing-cute-things.mp3?raw=true",
                    "url": "https://soundcloud.com/quosongs/garden-girl-w-mimikyu-cute-girls-doing-cute-things",
                    "favorited": "false"
                },
                {
                    "name": "Hideousremix",
                    "artist": "Haywyre",
                    "cover": "https://i1.sndcdn.com/artworks-000070126907-kghald-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/hideousremix.mp3?raw=true",
                    "url": "https://soundcloud.com/haywyre/hideousremix",
                    "favorited": "false"
                },
                {
                    "name": "Ghostface Playa Get Yo Ass Feat Pharmacist Blxckbusta",
                    "artist": "Zonda 906481031",
                    "cover": "https://i1.sndcdn.com/avatars-000815647717-q1xmbh-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/ghostface-playa-get-yo-ass-feat-pharmacist-blxckbusta.mp3?raw=true",
                    "url": "https://soundcloud.com/zonda-906481031/ghostface-playa-get-yo-ass-feat-pharmacist-blxckbusta",
                    "favorited": "false"
                },
                {
                    "name": "Trappin In Honolulu 5",
                    "artist": "Weaverbeats2",
                    "cover": "https://i1.sndcdn.com/artworks-000380294061-j8l15s-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/trappin-in-honolulu-5.mp3?raw=true",
                    "url": "https://soundcloud.com/weaverbeats2/trappin-in-honolulu-5",
                    "favorited": "false"
                },
                {
                    "name": "Confusion",
                    "artist": "Sh1Ruett0",
                    "cover": "https://i1.sndcdn.com/artworks-4PDnnt0CBqAYfVy7-9Ji22A-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/confusion.mp3?raw=true",
                    "url": "https://soundcloud.com/sh1ruett0/confusion",
                    "favorited": "false"
                },
                {
                    "name": "Freeze",
                    "artist": "Eugenecam",
                    "cover": "https://i1.sndcdn.com/artworks-000369514971-ldfdfp-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/freeze.mp3?raw=true",
                    "url": "https://soundcloud.com/eugenecam/freeze",
                    "favorited": "false"
                },
                {
                    "name": "Talkin Cash",
                    "artist": "Papicodeine",
                    "cover": "https://i1.sndcdn.com/artworks-000196714746-i9tbcn-original.jpg",
                    "source": "https://github.com/ADGVLOGS/ADGMusicPlayer/blob/main/music/talkin-cash.mp3?raw=true",
                    "url": "https://soundcloud.com/papicodeine/talkin-cash",
                    "favorited": "false"
                }
            ],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackName = value.name,
                    trackPicture = value.cover;

                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackName + '.</span> \
                        <span class="plLength"><img style="height:50px; position:absolute; top:-10px; left: -30px ;width:50px;" src= "' + trackPicture + '"></span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function() {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function() {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function() {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function() {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function() {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function() {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function(id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = tracks[id].source;
                updateDownload(id, audio.src);
            },
            updateDownload = function(id, source) {
                player.on('loadedmetadata', function() {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function(id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});