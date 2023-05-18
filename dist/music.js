const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: 'come on, sweet death',
        artist: 'arianne schreiber',
        url: 'http://music.163.com/song/media/outer/url?id=32944590.mp3',
        cover: 'http://p2.music.126.net/FZX7XAjsmEPGyVOqm4H7aQ==/109951166361039007.jpg?param=130y130',
      },
      {
        name: "我不曾忘记",
        artist: '花玲 / 张安琪 / 沐霏',
        url: 'http://music.163.com/song/media/outer/url?id=2014336709.mp3',
        cover: 'http://p2.music.126.net/dM_2lEqG7ZP7l0NjoApPFg==/109951168232666774.jpg?param=130y130',
      },
      {
        name: '忘れてやらない',
        artist: '結束バンド',
        url: 'http://music.163.com/song/media/outer/url?id=2003496467.mp3',
        cover: 'http://p1.music.126.net/XXyvKxoGL4PUeSlb9uU2eg==/109951168110215317.jpg?param=130y130',
      },
      {
        name: 'Old Memory',
        artist: '市川淳',
        url: 'http://music.163.com/song/media/outer/url?id=477982.mp3',
        cover: 'http://p1.music.126.net/OpgpNNPKznDDMxoBqVJy-Q==/2464005557906815.jpg?param=130y130',
      },
	  {
        name: 'Overfly',
        artist: '春奈るな',
        url: 'http://music.163.com/song/media/outer/url?id=29027459.mp3',
        cover: 'http://p2.music.126.net/yzLZgEIpCDEQd2ZqJ7Frhg==/109951166510247516.jpg?param=130y130',
      },
	  {
        name: '繁华唱遍（泠鸢翻唱版）（翻自 乐正绫 调教：纳兰寻风)',
        artist: '泠鸢yousa',
        url: 'http://music.163.com/song/media/outer/url?id=1344874921.mp3',
        cover: 'http://p2.music.126.net/fxI_iAsaRU9M5ZGE-Pu7iw==/109951164479032071.jpg?param=130y130',
      },
	  {
        name: '不需等天晴',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1982796624.mp3',
        cover: 'http://p1.music.126.net/VxH0q0HQmXEoHO1UyXzokg==/109951167892178816.jpg?param=130y130',
      },
	  {
        name: 'TruE',
        artist: '黄龄 / HOYO-MiX',
        url: 'http://music.163.com/song/media/outer/url?id=1971144922.mp3',
        cover: 'http://p2.music.126.net/cu9T_JCh5mt3aipWJoy03w==/109951167767293721.jpg?param=130y130',
      }
    ]
});

