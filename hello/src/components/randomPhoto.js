const Photos = [
  {
    url:  "https://instagram.fsea1-1.fna.fbcdn.net/vp/298986caa5b14a6e42eef7eada1c983a/5BC4C847/t51.2885-15/e35/34055768_423052124828067_764364892898590720_n.jpg",
    name: 'Cori and Greg at Brew and Brew',
    ada: 'Cori and Greg at Brew and Brew'
  },
  {
    url: "https://instagram.fsea1-1.fna.fbcdn.net/vp/70e2b5c4efba5ae4f573d8e7ca4944a9/5BA089EB/t51.2885-15/e35/34458211_605945899765070_845474585779372032_n.jpg",
    name: "Dodo Coopy",
    ada: "Dodo Coopy"
  },
  {
    url: "https://instagram.fsea1-1.fna.fbcdn.net/vp/69d9f405be39140ff4e9bdf9e584fea1/5BB859D7/t51.2885-15/e35/31855638_1995508697367729_1729799495803207680_n.jpg",
    name: "MMMM Whiskey",
    ada: "MMM Whiskey"
  },
  {
    url: "https://instagram.fsea1-1.fna.fbcdn.net/vp/95b7683a8322ffd57c9a2e2ed7bcd193/5B9E53D8/t51.2885-15/e35/30906263_240470926693347_3527892514960834560_n.jpg",
    name: "Greg and Coopy melting",
    ada: "Greg and Coopy melting"
  },
  {
    url: "https://instagram.fsea1-1.fna.fbcdn.net/vp/8e35f2fd4826a0a61c022f39f5e3c955/5BBD928F/t51.2885-15/e35/32203161_203989477066095_4634933611248746496_n.jpg",
    name: 'Cori and Greg in Portland',
    ada: 'Rose Garden Photo'
  }
]

const randomPhoto = () => {
  return Photos[Math.floor(Math.random() * Photos.length)]
}

export default randomPhoto;
