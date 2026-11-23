import fs from 'fs';
import path from 'path';

const IMAGES = [
  {
    name: 'logo.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.82787-19/517940225_17858648388449126_409962767124191512_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=108&ig_cache_key=GAEk3x5ms1yZWHI-ABjZkvH2erAFbmNDAQAB1501500j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=TF2e4S0fJ-kQ7kNvwHOw8eF&_nc_oc=Ado6XEBfgisHxbnR1w_7RkCW4Up6mdTyUrfY5oc0Hwp1Qo9dudAw-Bzavvdn7e2Rpx8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=SsXeD8XtFuGyh2KuBwlwew&_nc_ss=7b689&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQRqiTUCtYXhV43AHAhoGi50gfdxyaAt9uebUjiihGwG1g&oe=6B0A0A17'
  },
  {
    name: 'suite-master.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.71878-15/650858278_1139312014910389_6416584120113257752_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=-Dt9gpYu-6kQ7kNvwH_N55T&_nc_oc=AdpLuTcaktZIvo9mF09XyotFHXN7ryr-ZkYWxwS0Y2rBB6wQf2XU0abpd8QF6IZnHO8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=4_qk1JLgk0yLKfrZZnQd-w&_nc_ss=7b689&_nc_ct=RQosPBUKFQQAAAA&oh=00_AQSaZzsUqTPc71z7IE-DS7krLckDLr48uC2Nz0tODFogJg&oe=6B0A0866'
  },
  {
    name: 'dining-table.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.82787-15/787204857_17912910984449126_5715585066768516327_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=U2Qwc3BgLRQQ7kNvwGnocpA&_nc_oc=AdqSxU9dBjKO5MITi8E7geSjr_qUMpzkYYIs6OUwiMyHcXHAaF2QekxOXPk1v-QREOo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQQAAAA&oh=00_AQTEftQFbEaTzKeuIUfno06sSPk0QJz8G0BePq8ie_Vqfg&oe=6B09F84E'
  },
  {
    name: 'conjunto-marta.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.82787-15/783286258_17912909139449126_2102249916633480484_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=IJGwTm2SGP0Q7kNvwHFYf1a&_nc_oc=Adqeu5OKYUg6ECJGOhW54_7YlWdYhMfY6m4FvH4EeLmCFT2Dn0Afpy0f_SZvhUNl9DQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQQAAAA&oh=00_AQTbwNE4BBJjz3GiZiWTrOJ7ejuF7LwBvrCrbp7UV3SDuw&oe=6B09D1E2'
  },
  {
    name: 'living-room.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.82787-15/782638033_17912907531449126_552222940203160193_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=DaMgZIIXhrUQ7kNvwF1b1Qo&_nc_oc=Ado70aSgEP4Jf95baryqbgowbk7Vy-bVs0SqptX-7atUnaFPBh_-uSS0lIFJEE88Kfk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQIAAAA&oh=00_AQRLF2wsz45c1eHKogdOzT2HoWUOxHVNdxVDhnKJmmfpNQ&oe=6B09E8B1'
  },
  {
    name: 'sofa-chiffone.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.82787-15/787101998_17912902407449126_8817575754390202594_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=bHRYyx3XIkYQ7kNvwGhKvnJ&_nc_oc=AdonrKrqlFntA6cvgXAQk2eaCr1Cd_5u-kHS00-CTuNvnNpspLWYBD-pBPn4CYN_y4c&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQQAAAA&oh=00_AQT2ji3d8WtkwzUTTtTZJHHp-8wXCXVAPDJur6Wy0ds2AA&oe=6B09E41B'
  },
  {
    name: 'espelho-organico.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.82787-15/787135912_17912901393449126_1234723623223067817_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=o2HjosmebawQ7kNvwGgWTDv&_nc_oc=AdqjM_qE-gOa3RdouwN80vflHE99pvT-dvTnwlpO_dSxMZ__ZSGBuMJC-3iKPCQKCjU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQIAAAA&oh=00_AQR5Cpd9w1WmY3GvYlXbvOJzhzqr_rmdnCbKs50HvzypXA&oe=6B09DB18'
  },
  {
    name: 'cortinados-detalhe.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.71878-15/624835875_866700702945478_3459776139318393313_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=n1h3yWhPo-8Q7kNvwHwUQZB&_nc_oc=AdqNHSBOsiz5DP3oHyH-v1kwMKFW2fC-Uvn9kzQWixVSopaphBogRU-eZZMxjdF9trI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQgAAAA&oh=00_AQRN1miVl2yGu2CMy-Qtv-bRpe7RdWT_DL8FRTisMQtcTA&oe=6B09EA3B'
  },
  {
    name: 'vedacao-eletrica.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.71878-15/540007956_1057859599764135_3268971359195343834_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=wKFDO2dwppYQ7kNvwET5Iry&_nc_oc=AdpHDgD5LTfjRECYzE8jNjkrYQ8wlMvt4zrwTdc4sFqgHuNG9D1NlqtOegGeLv6rIsk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQgAAAA&oh=00_AQQIwCkgKu--JqeL8bK0NBHDVhsPaEbcndcOG6Ia9hnhCA&oe=6B09E52C'
  },
  {
    name: 'persianas-montagem.jpg',
    url: 'https://scontent.cdninstagram.com/v/t51.71878-15/609330831_1943296816619269_8710832945434706127_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=ZM4hNyRYTWUQ7kNvwHsXzTl&_nc_oc=Adp5FTNQRv76q9ScUgJHAWF3RZ-I6DCWy6oSjW4ygL-9lnunRNdMU2iWTxNeEGR9a6M&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lOvWWYOiv4pk12OsqcRZ_A&_nc_ss=7a689&_nc_ct=RQosPBUKFQgAAAA&oh=00_AQRk4B7iYP78cVtiD0p4eY7tSkVRpuuezTFaIgjgbsxmjA&oe=6B09D667'
  }
];

const TARGET_DIR = path.resolve('public/images');

async function downloadAll() {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  console.log(`Descarregando ${IMAGES.length} fotografias reais para: ${TARGET_DIR}`);

  for (const item of IMAGES) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const dest = path.join(TARGET_DIR, item.name);
      fs.writeFileSync(dest, buffer);
      console.log(`[OK] Guardado: ${item.name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`[ERRO] Falha em ${item.name}:`, err.message);
    }
  }
}

downloadAll();
