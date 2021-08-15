const songs = [
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ac6b0bd63b1602bd99aff528",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ac6b0bd63b1602bd99aff528",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ac6b0bd63b1602bd99aff528",
          width: 64,
        },
      ],
      name: "I Don't Care (Acoustic)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "1m84zLz4WizjR4mCDoXReg",
    name: "I Don't Care - Acoustic",
    previewUrl:
      "https://p.scdn.co/mp3-preview/92be55693f9002286062f6fcf4e07cdd2b859c32?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273779063301154e835a91a35e0",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02779063301154e835a91a35e0",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
          width: 64,
        },
      ],
      name: "Sob Rock",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
      },
    ],
    id: "4Szq4dulKN9bOvLRW6uMdZ",
    name: "Carry Me Away",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d28398d8f5d39ee635a94ffb82692a7479286832?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314a5222ca8fdf13d5c050496",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214a5222ca8fdf13d5c050496",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114a5222ca8fdf13d5c050496",
          width: 64,
        },
      ],
      name: "Bad Habits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PQ88X9TkUIAUIZJHW2upE",
    name: "Bad Habits",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0e537207ad0fff8c9e9011735c665d99b9b58d5e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273597b9da9f4020514c51ab48f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02597b9da9f4020514c51ab48f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851597b9da9f4020514c51ab48f",
          width: 64,
        },
      ],
      name: "Harmony House",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "0CWvHfEwbeBVN0RViTybvL",
    name: "Medicine",
    previewUrl:
      "https://p.scdn.co/mp3-preview/b2fff0b21335f05f1992668c27b59b2f62b68cda?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27388e170d5ced543d191593fc8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0288e170d5ced543d191593fc8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485188e170d5ced543d191593fc8",
          width: 64,
        },
      ],
      name: "Afterglow",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "0E4Y1XIbs8GrAT1YqVy6dq",
    name: "Afterglow",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ca59ce0946d37f9a7da3ab12b29a2f8a3605d50a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc8bca9b498096c90cd1a6ee",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc8bca9b498096c90cd1a6ee",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc8bca9b498096c90cd1a6ee",
          width: 64,
        },
      ],
      name: "midnight love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3uwAm6vQy7kWPS2bciKWx9",
        name: "girl in red",
      },
    ],
    id: "1P7tiVl5hgemZuH8oNyP6C",
    name: "midnight love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/94c21b5699c8620351aba2849c074abb0f1722f4?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27389beb8943628bb99ad768968",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0289beb8943628bb99ad768968",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485189beb8943628bb99ad768968",
          width: 64,
        },
      ],
      name: "Stay",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "78vpAeb6a3bD03scfv71Z8",
    name: "Stay",
    previewUrl:
      "https://p.scdn.co/mp3-preview/48c19f4465653ced5c17c9fb5b18d50946344023?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273755995e9ff2b1b0c753f5eb8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851755995e9ff2b1b0c753f5eb8",
          width: 64,
        },
      ],
      name: "Dynamite (DayTime Version)",
    },
    artists: [{ __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" }],
    id: "0t1kP63rueHleOhQkYSXFY",
    name: "Dynamite",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a707728846c105f4d8552b8546c30b121bf517f0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273982c880c62d99907e9ab7833",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02982c880c62d99907e9ab7833",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851982c880c62d99907e9ab7833",
          width: 64,
        },
      ],
      name: "Se\u00f1orita",
    },
    artists: [
      {
        __typename: "Artist",
        id: "47hetBUhKhfBmk8nXeriqN",
        name: "Planeta No",
      },
    ],
    id: "3gbe8n26oLANWqnM4kbfJt",
    name: "Se\u00f1orita",
    previewUrl:
      "https://p.scdn.co/mp3-preview/119150392c13885c542bdbc4ae7205ea920cb5a9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2736c1281eccac823bd368f8782",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e026c1281eccac823bd368f8782",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048516c1281eccac823bd368f8782",
          width: 64,
        },
      ],
      name: "Ahora",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
      },
    ],
    id: "5KcuLISuSBnMFAPVhFnHr5",
    name: "Si Te Falta Alguien",
    previewUrl:
      "https://p.scdn.co/mp3-preview/db7107e0e8c354c32037a0663b113a4822e0912b?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d9013f9364ce8bef85e8337c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02d9013f9364ce8bef85e8337c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851d9013f9364ce8bef85e8337c",
          width: 64,
        },
      ],
      name: "Eighteen",
    },
    artists: [{ __typename: "Artist", id: "7MlotYZhHjOlXcvmwrITj8", name: "Tep No" }],
    id: "4XNx0PemrvvYgQAzw9Ihml",
    name: "Eighteen",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d7705a1173f7dba4c208fb8c0e9f76e6cd68963a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a28330e1b98a8d1c39e06389",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02a28330e1b98a8d1c39e06389",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851a28330e1b98a8d1c39e06389",
          width: 64,
        },
      ],
      name: "Close To You",
    },
    artists: [{ __typename: "Artist", id: "6eJa3zG1QZLRB3xgRuyxbm", name: "Dayglow" }],
    id: "4ReJJcpW8HtVnqzhf6DwNV",
    name: "Close To You",
    previewUrl:
      "https://p.scdn.co/mp3-preview/33ea3f3a056a28acdba806ea54a482e290c71bb3?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27339c2bb49427b90c6ab9b2a5d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0239c2bb49427b90c6ab9b2a5d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485139c2bb49427b90c6ab9b2a5d",
          width: 64,
        },
      ],
      name: "Spotify Singles",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "4XJ2SmdXNTkMkkx6PFPU8m",
    name: "Hold Me While You Wait - Recorded at Spotify Studios NYC",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beefe283f0c4b8ac836a13c2d30a122571d85993?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273dd5e5dae4671661784941506",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02dd5e5dae4671661784941506",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851dd5e5dae4671661784941506",
          width: 64,
        },
      ],
      name: "Rocky Trail",
    },
    artists: [
      {
        __typename: "Artist",
        id: "41AbNVba2ccpmcc9QtOJE7",
        name: "Kings of Convenience",
      },
    ],
    id: "5xKHD7mTnrCgy4SN1Y1jK3",
    name: "Rocky Trail",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a3d2bcbeeb3205c75944651a130b4496ee849620?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f85c427ae396ec88898572f5",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f85c427ae396ec88898572f5",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f85c427ae396ec88898572f5",
          width: 64,
        },
      ],
      name: "Right Thoughts, Right Words, Right Action (Deluxe Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0XNa1vTidXlvJ2gHSsRi4A",
        name: "Franz Ferdinand",
      },
    ],
    id: "06Qha323s06okpZ4LmMX7P",
    name: "Love Illumination",
    previewUrl:
      "https://p.scdn.co/mp3-preview/934c0aa9134d9f14faa684706497c3558fcbc2db?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022624442cf48e4962d1422da8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512624442cf48e4962d1422da8",
          width: 64,
        },
      ],
      name: "Sling",
    },
    artists: [{ __typename: "Artist", id: "3l0CmX0FuQjFxr8SK7Vqag", name: "Clairo" }],
    id: "0HAqq2GcQKyi3s87GuN7jU",
    name: "Amoeba",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2ae53aa3383b29be4676565fa7701ca2093871a2?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2734949aa73d232a59c075f8db9",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e024949aa73d232a59c075f8db9",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048514949aa73d232a59c075f8db9",
          width: 64,
        },
      ],
      name: "The Darkness That You Fear",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1GhPHrq36VKCY3ucVaZCfo",
        name: "The Chemical Brothers",
      },
    ],
    id: "5W4cALNimK9sWuu3gFcYFE",
    name: "The Darkness That You Fear - Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/584b8d83b725f65ca1165688eddc7b6b73b785aa?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27329d00196831bec20ebbff5c7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0229d00196831bec20ebbff5c7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485129d00196831bec20ebbff5c7",
          width: 64,
        },
      ],
      name: "MAP OF THE SOUL : PERSONA",
    },
    artists: [
      { __typename: "Artist", id: "3Nrfpe0tUJi4K4DXYWgMUX", name: "BTS" },
      { __typename: "Artist", id: "26VFTg2z8YR0cCuwLzESi2", name: "Halsey" },
    ],
    id: "5KawlOMHjWeUjQtnuRs22c",
    name: "Boy With Luv (feat. Halsey)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/d16797fb391fb909f3c46454d7cf89a2718f8171?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f6cda6c81dd1c2d5783fbd2d",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f6cda6c81dd1c2d5783fbd2d",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f6cda6c81dd1c2d5783fbd2d",
          width: 64,
        },
      ],
      name: "Before You Go",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
      },
    ],
    id: "7ce20yLkzuXXLUhzIDoZih",
    name: "Before You Go",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04bf5a0ff199c4e80fbdfefbd6baac8923f5154c?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ebefdcb9f6e825e8582bbac4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ebefdcb9f6e825e8582bbac4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ebefdcb9f6e825e8582bbac4",
          width: 64,
        },
      ],
      name: "Lover Boy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5mqguTgtaoCMNMZD6txCh6",
        name: "Phum Viphurit",
      },
    ],
    id: "2rd4FH1cSaWGc0ZiUaMbX9",
    name: "Lover Boy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a441359cbe1f5d3b0bd1a9643bedeae5c5f454f8?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f1074dfe291fab84f2a22d92",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f1074dfe291fab84f2a22d92",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f1074dfe291fab84f2a22d92",
          width: 64,
        },
      ],
      name: "I'm Gonna Show You Crazy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
      },
    ],
    id: "5LtNBCM2ve0SxP0dlRVvMu",
    name: "I'm Gonna Show You Crazy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8d1318098c7a0d08001eea2f6f3b69802b94df7f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730493e5cc435b7e8e3ca9c5db",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020493e5cc435b7e8e3ca9c5db",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510493e5cc435b7e8e3ca9c5db",
          width: 64,
        },
      ],
      name: "redesign",
    },
    artists: [{ __typename: "Artist", id: "1vkWdqcabQ1swciXipkLBj", name: "awfultune" }],
    id: "6L1V0LvpXBJ7QptKuLUj3v",
    name: "redesign",
    previewUrl:
      "https://p.scdn.co/mp3-preview/0c7c724a42dc47e5149823cb3c3231839a668dbc?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
          width: 64,
        },
      ],
      name: "Plastic Beach",
    },
    artists: [{ __typename: "Artist", id: "3AA28KZvwAUcZuOKwyblJQ", name: "Gorillaz" }],
    id: "0q6LuUqGLUiCPP1cbdwFs3",
    name: "On Melancholy Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/cd7991e7076d0410677032dd9093a9cd712b69fd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273f45c50e7cff5f2376c1e36ea",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02f45c50e7cff5f2376c1e36ea",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851f45c50e7cff5f2376c1e36ea",
          width: 64,
        },
      ],
      name: "One More Love",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
      },
      { __typename: "Artist", id: "0fA0VVWsXO9YnASrzqfmYu", name: "Kid Cudi" },
    ],
    id: "5xYC48nOppVemY6U5GRGTb",
    name: "Memories (feat. Kid Cudi)",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8af6e5ee17fb1769d153357927ae1470407fa4a5?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c8dd74225a1fb838fa7dca6",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c8dd74225a1fb838fa7dca6",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c8dd74225a1fb838fa7dca6",
          width: 64,
        },
      ],
      name: "Goddess (Deluxe)",
    },
    artists: [{ __typename: "Artist", id: "2xe8IXgCTpwHE3eA9hTs4n", name: "BANKS" }],
    id: "4PvD06Pmbm2rHG2JjSlElF",
    name: "Beggin For Thread",
    previewUrl:
      "https://p.scdn.co/mp3-preview/826aa78dff6c50db1e4fa3124d47c0e6d4bb7ea1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27358322a33d8f69aae6d760ba2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0258322a33d8f69aae6d760ba2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485158322a33d8f69aae6d760ba2",
          width: 64,
        },
      ],
      name: "Mike + The Mechanics",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2yTUYhIf8fxptTIy3KLuJD",
        name: "Mike & The Mechanics",
      },
    ],
    id: "5vsMTYFLTKFa35jmE3bIV6",
    name: "Taken In",
    previewUrl:
      "https://p.scdn.co/mp3-preview/447d2edfa906d5faac7a18283e29b44dcd38ba16?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27314c07768d4acc4282a66a61b",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0214c07768d4acc4282a66a61b",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485114c07768d4acc4282a66a61b",
          width: 64,
        },
      ],
      name: "Texas Sun",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2mVVjNmdjXZZDvhgQWiakk",
        name: "Khruangbin",
      },
      {
        __typename: "Artist",
        id: "3qnGvpP8Yth1AqSBMqON5x",
        name: "Leon Bridges",
      },
    ],
    id: "6Flu33CZc4xS2gkA6cRcNh",
    name: "Texas Sun",
    previewUrl:
      "https://p.scdn.co/mp3-preview/c9c4f2b85477ecdf7ab297556795155399c3f55a?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730600f5db8d72f078268b9cbf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020600f5db8d72f078268b9cbf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510600f5db8d72f078268b9cbf",
          width: 64,
        },
      ],
      name: "Lost Stars",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4bYPcJP5jwMhSivRcqie2n",
        name: "Adam Levine",
      },
    ],
    id: "7rdGrVIoqwPWOULauvglio",
    name: "Lost Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/4e855af04636ec04d2ce5fc48270b25fb7784433?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b3d53124d7cd074f32c33ea7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b3d53124d7cd074f32c33ea7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b3d53124d7cd074f32c33ea7",
          width: 64,
        },
      ],
      name: "indica",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0duLKMlcwhyZgqu8zSSjBp",
        name: "Alaina Castillo",
      },
    ],
    id: "3o0leBKDR9aCHv5yd3OBLH",
    name: "indica",
    previewUrl:
      "https://p.scdn.co/mp3-preview/47bf80efb72008eca05be362cf7894d4361c9556?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730e767887e304020cdbbe25e8",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020e767887e304020cdbbe25e8",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510e767887e304020cdbbe25e8",
          width: 64,
        },
      ],
      name: "Stars (Collector's Edition)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1fa0cOhromAZdq2xRA4vv8",
        name: "Simply Red",
      },
    ],
    id: "75CgD6l7K4qMzZrn4CbZqz",
    name: "Stars",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3b889a8a0224fdd82021e7226e51fdcaa572413e?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27373030ca43cf206b565cb344c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0273030ca43cf206b565cb344c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485173030ca43cf206b565cb344c",
          width: 64,
        },
      ],
      name: "Friends (Deluxe Version)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6ssXMmc5EOUrauZxirM910",
        name: "White Lies",
      },
    ],
    id: "74TFKg5p4NbTJvvnUKdqaW",
    name: "Is My Love Enough?",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ee84bdeb8d58d46164b921ddd2dfa35cc622b2cd?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2730d6b7b05601661ab83b50006",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e020d6b7b05601661ab83b50006",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048510d6b7b05601661ab83b50006",
          width: 64,
        },
      ],
      name: "Barchords",
    },
    artists: [{ __typename: "Artist", id: "4C50EbCS11M0VbGyH3OfLt", name: "Bahamas" }],
    id: "0Mr6X2X4lHCAA9iuzmh7Iu",
    name: "Caught Me Thinkin",
    previewUrl:
      "https://p.scdn.co/mp3-preview/f4c86fc29a33aebf1c74950bb3f8881abe838059?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aae542061ac42ee04779fb2f",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aae542061ac42ee04779fb2f",
          width: 64,
        },
      ],
      name: "Bloom",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
      },
    ],
    id: "4qAHuJq5T4Q97EQZG47H0P",
    name: "The Good Side",
    previewUrl:
      "https://p.scdn.co/mp3-preview/3a6d9cd2aa299cf3c312eab4a3ee71a3e770b0ad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273aba835754771e43115711708",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02aba835754771e43115711708",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851aba835754771e43115711708",
          width: 64,
        },
      ],
      name: "Nora Norman",
    },
    artists: [
      {
        __typename: "Artist",
        id: "2UBoDSfesaolUZsk38sUtK",
        name: "Nora Norman",
      },
    ],
    id: "3uAl5NJiVLZaKcPClv4wKB",
    name: "Odd One",
    previewUrl:
      "https://p.scdn.co/mp3-preview/13ab9fc717cb4e9fe2a54b7c8d43388b8f3ea924?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27348488c2eee5727efc30bf657",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0248488c2eee5727efc30bf657",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657",
          width: 64,
        },
      ],
      name: "Direct Hits",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
      },
    ],
    id: "2aZ2Co4NeQRsqWcU930zHT",
    name: "Shot At The Night",
    previewUrl:
      "https://p.scdn.co/mp3-preview/054347aed80cd648ec641723919efb2f483f49cb?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273b2bccd4f0dafab84faf216e7",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02b2bccd4f0dafab84faf216e7",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851b2bccd4f0dafab84faf216e7",
          width: 64,
        },
      ],
      name: "Wilder Mind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3gd8FJtBJtkRxdfbTu19U2",
        name: "Mumford & Sons",
      },
    ],
    id: "3OgZdIAHaDMOtYq8Z5iCQ5",
    name: "Believe",
    previewUrl:
      "https://p.scdn.co/mp3-preview/8fb82a463030de203b611e94c0762d94bd2b8dce?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273045a4f08f8be7ee4b6bd5fd2",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02045a4f08f8be7ee4b6bd5fd2",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851045a4f08f8be7ee4b6bd5fd2",
          width: 64,
        },
      ],
      name: "Olympus Sleeping",
    },
    artists: [
      {
        __typename: "Artist",
        id: "450iujbtN6XgiA9pv6fVZz",
        name: "Razorlight",
      },
    ],
    id: "2jIY0LCgoS9J0Oum1Eo95G",
    name: "Carry Yourself",
    previewUrl:
      "https://p.scdn.co/mp3-preview/e63bf3c8b0910b45cf41775eac70b4868a697901?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273909ebb0c355f14d0ee7f9974",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02909ebb0c355f14d0ee7f9974",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851909ebb0c355f14d0ee7f9974",
          width: 64,
        },
      ],
      name: "A funk odyssey",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6J7biCazzYhU3gM9j1wfid",
        name: "Jamiroquai",
      },
      {
        __typename: "Artist",
        id: "30AzZL0valZQ62OIQiFWvk",
        name: "Beverley Knight",
      },
    ],
    id: "0upgxxew2mVAEctrz08jnf",
    name: "Love Foolosophy (with Beverley Knight) - Radio Edit",
    previewUrl:
      "https://p.scdn.co/mp3-preview/25bc47d8c0fa807f7f593367c010359c526780b0?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739f575e591f74e4773f54b1e4",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029f575e591f74e4773f54b1e4",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519f575e591f74e4773f54b1e4",
          width: 64,
        },
      ],
      name: "Sad Happy",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6hl5k4gLl1p3sjhHcb57t2",
        name: "Circa Waves",
      },
    ],
    id: "3SymLVYLCAyO8b0hC3SV13",
    name: "Sad Happy",
    previewUrl:
      "https://p.scdn.co/mp3-preview/764eeba2c057b8bd821092933d8d60314b033be9?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ab41b12bbc0f61ebdfb2dfaf",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ab41b12bbc0f61ebdfb2dfaf",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ab41b12bbc0f61ebdfb2dfaf",
          width: 64,
        },
      ],
      name: "Ta Dah",
    },
    artists: [
      {
        __typename: "Artist",
        id: "3Y10boYzeuFCJ4Qgp53w6o",
        name: "Scissor Sisters",
      },
    ],
    id: "13pyGLYmBjYgvOMIEivX2K",
    name: "I Don't Feel Like Dancin'",
    previewUrl:
      "https://p.scdn.co/mp3-preview/1f54ad6fb813f0dbdfbdb523fdabe9964f98e60f?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273fc4fd5caca9f1dc4a3b0460a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02fc4fd5caca9f1dc4a3b0460a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851fc4fd5caca9f1dc4a3b0460a",
          width: 64,
        },
      ],
      name: "Smoke + Mirrors (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
      },
      { __typename: "Artist", id: "3836OTICMPjhTMMcpPw4EC", name: "Broiler" },
    ],
    id: "0fsEFwLSJTSHSawhe864Cp",
    name: "Shots - Broiler Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/04e7eecd24cbbe25a5b31acf659dfb127124ecad?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2732c13c88b2e95b39dc72bdef3",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e022c13c88b2e95b39dc72bdef3",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048512c13c88b2e95b39dc72bdef3",
          width: 64,
        },
      ],
      name: "Electric Light",
    },
    artists: [{ __typename: "Artist", id: "4EzkuveR9pLvDVFNx6foYD", name: "James Bay" }],
    id: "3XLZOk9aP5VxiO81xFSX2w",
    name: "Wild Love",
    previewUrl:
      "https://p.scdn.co/mp3-preview/9e84853546f4332e56e91842ec67ad7f3d6bc754?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273bec684438c0610c1caab0198",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02bec684438c0610c1caab0198",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851bec684438c0610c1caab0198",
          width: 64,
        },
      ],
      name: "KESI (Remix)",
    },
    artists: [
      { __typename: "Artist", id: "28gNT5KBp7IjEOQoevXf9N", name: "Camilo" },
      {
        __typename: "Artist",
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
      },
    ],
    id: "0IqCoZ168iRc9LqfrYgpZy",
    name: "KESI - Remix",
    previewUrl:
      "https://p.scdn.co/mp3-preview/a5e5c6e17c653ec43447b072b532321ca03d18c1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273248a53590c23064a21557146",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02248a53590c23064a21557146",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851248a53590c23064a21557146",
          width: 64,
        },
      ],
      name: "Lightyears",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1TUXttKjP2lfz1WzSqlrcM",
        name: "Mansions On The Moon",
      },
    ],
    id: "7pNXd7TAT7U0hxyQVzsMTv",
    name: "Leaves Fall",
    previewUrl:
      "https://p.scdn.co/mp3-preview/2fad23eb025412390e394c992fc90188f13b2404?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27374ffdd29cc4898e8ed01d747",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0274ffdd29cc4898e8ed01d747",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485174ffdd29cc4898e8ed01d747",
          width: 64,
        },
      ],
      name: "My Finest Work Yet",
    },
    artists: [
      {
        __typename: "Artist",
        id: "4uSftVc3FPWe6RJuMZNEe9",
        name: "Andrew Bird",
      },
    ],
    id: "7oChm7YC5PS1NvEkRCgswG",
    name: "Manifest",
    previewUrl:
      "https://p.scdn.co/mp3-preview/37911cccb6f257bb3dc44308e9f4e3ccc5e6f4b1?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273820fe4900f53b4acda712c4c",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02820fe4900f53b4acda712c4c",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851820fe4900f53b4acda712c4c",
          width: 64,
        },
      ],
      name: "The Kill",
    },
    artists: [
      {
        __typename: "Artist",
        id: "0RqtSIYZmd4fiBKVFqyIqD",
        name: "Thirty Seconds To Mars",
      },
    ],
    id: "2iFsNO2v2AOTu3OaD2sEmk",
    name: "The Kill (Bury Me) - Live",
    previewUrl:
      "https://p.scdn.co/mp3-preview/16c77b27d211ddd0ef8332c66e51a4e0ef5bbc45?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          width: 64,
        },
      ],
      name: "\u00f7 (Deluxe)",
    },
    artists: [
      {
        __typename: "Artist",
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
      },
    ],
    id: "6PCUP3dWmTjcTtXY02oFdT",
    name: "Castle on the Hill",
    previewUrl:
      "https://p.scdn.co/mp3-preview/beb4ed48cca5d2a792e877c7efe92d54046eac67?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27306cca0b803c044643ae0dabd",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0206cca0b803c044643ae0dabd",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485106cca0b803c044643ae0dabd",
          width: 64,
        },
      ],
      name: "Don't Let Me Down",
    },
    artists: [
      {
        __typename: "Artist",
        id: "1hzfo8twXdOegF3xireCYs",
        name: "Milky Chance",
      },
      {
        __typename: "Artist",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        name: "Jack Johnson",
      },
    ],
    id: "4hoNqOv7FRMefk6yC83yqP",
    name: "Don't Let Me Down",
    previewUrl:
      "https://p.scdn.co/mp3-preview/bee27b4b7e82c929a79de47d3ae523878318a360?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
  {
    __typename: "Song",
    album: {
      __typename: "Album",
      images: [
        {
          __typename: "Image",
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27346898fadeaa625d9cfff746a",
          width: 640,
        },
        {
          __typename: "Image",
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0246898fadeaa625d9cfff746a",
          width: 300,
        },
        {
          __typename: "Image",
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485146898fadeaa625d9cfff746a",
          width: 64,
        },
      ],
      name: "Unwind",
    },
    artists: [
      {
        __typename: "Artist",
        id: "5VptPtXbT0T4imW6GcobiW",
        name: "Paco Versailles",
      },
    ],
    id: "70tZNknUEYoRcLYUSvoCQH",
    name: "Unwind",
    previewUrl:
      "https://p.scdn.co/mp3-preview/ec3a6872db19e3a76398a5e1445eab40006dc619?cid=c548f2e4e6a048c19f351bc8da52f27c",
  },
];

export { songs };
