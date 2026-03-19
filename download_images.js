import fs from 'fs';
import path from 'path';
import https from 'https';

const urls = [
  "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/80490666_2473882392860153_8988312063042387968_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0327a3&_nc_ohc=ewsMf_G1ezcQ7kNvwGUKm2g&_nc_oc=AdrYa_TupBmJKCcRx1UW38hYipwRsZGJS-AfjiKez8diwmUrkx8fLT6L7l3omXn86OM&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=P09NWAZ87Q67kupU-E_obQ&_nc_ss=8&oh=00_Afy2x72D9EiMvyfMjKXJT5JJ-e4rSppxowsNAuCeWYYuCg&oe=69E317DF",
  "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/65716007_2333376620244065_6709991977355575296_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=qhUfdK9uE4wQ7kNvwEzH9Zl&_nc_oc=AdrH7lzYm9pxmkfgMx55VHUJ2_-RHgU_GG04Q9z1XabSprWaOR6oZztR_wGUFkFrwgA&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=NrwOUO9jXG3OM7L6Wt8OZg&_nc_ss=8&oh=00_AfzEP_rGnN6uZaO5KLT1azaNsASi4mhPmGdzIqSeLFUcpw&oe=69E31F2A",
  "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/73097444_2423904157857977_7003009060198940672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0327a3&_nc_ohc=JSUyTVUELxQQ7kNvwEHQCoP&_nc_oc=AdqZpcHnjex737Z32YDnHAFYGDptlSwWvTka1ANk-NXn26s86QYMW7PUDXMMEVfHCtw&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=ObP_oE6l7B9vtxoP4Z5Eig&_nc_ss=8&oh=00_Afw7DyWmSUo1Tnme6dZA1E_yZjhOnJYpuVar4OwMasg1sQ&oe=69E2FADD",
  "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/73458960_2413869892194737_8872609269040545792_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0327a3&_nc_ohc=FiM3b11HW-8Q7kNvwEENbTg&_nc_oc=AdpDNO2t-Vtbx79cGqFR6QGV5FT7MyhaKx_AWKk5LA5Vx40tZYv9pVNs05ye3G--HxY&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=D2d0Y510F2SpyIVNTIJJ0w&_nc_ss=8&oh=00_AfxSeSKglckp5cN_wE5UjynImJ7bFukh3Lgr4EAjA3C_3g&oe=69E31602",
  "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/72278585_2411198965795163_7648189800339472384_n.jpg?stp=c0.66.1440.1440a_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=054925&_nc_ohc=50zzcTqvBksQ7kNvwED5pD1&_nc_oc=AdpuSDuBeM6HUyjfYG19PoWqG9AGDkDsFrZrFsRB-sEg_M_oL9PEBMYtlX2ug3wTDFg&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_ss=8&oh=00_AfxmE2uTIW-LDrIWR8suJc3p1IccQoAy53nH2bju27b0Wg&oe=69E32374",
  "https://scontent-fra5-1.xx.fbcdn.net/v/t1.6435-9/71400918_2394446957470364_8068161980399091712_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=054925&_nc_ohc=HiUxgbFtix4Q7kNvwHX9bbQ&_nc_oc=AdoQl2fbn96oduV4u01PRJpcPN9HJbUVn5Q9EkgY9LE_0bzBHhMSa-xKQNa43w3Tv8s&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_ss=8&oh=00_Afy4jtnZrsUQ8ClSlbKCOA_IavxNSJHMfDv5EZnbQhkUeg&oe=69E3248F",
  "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/68471468_2355825694665824_3418441896261844992_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=054925&_nc_ohc=95effSgSzesQ7kNvwFPzcoA&_nc_oc=AdoT2SWeN6HnxnPi4LK57ZZHyJrmtu8ejOrNYygnOYGi1rXU1WNtWxn8W5uYCHYApz8&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_ss=8&oh=00_AfxCV8W8qkhzrOgzZyUcQpeOgcHXeXNDiKHt3HcbjvlsYw&oe=69E3129D",
  "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/67144868_2351051148476612_6266595024188735488_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=054925&_nc_ohc=C4wajyfrNFcQ7kNvwGksK3r&_nc_oc=Adowgh3YXrFAC6iPqwRJiPnYoefpxce_rhYUPuHV-1Z2Y_Po5xKilpLMk0lJg-7fyo8&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_ss=8&oh=00_AfyTLoQsAglR9Hhhrl9iKKMbrl-jXZqfh4oiUQKP4V1cnw&oe=69E32C61"
];

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outDir = path.join(__dirname, 'public/gallery');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

urls.forEach((url, i) => {
  const dest = path.join(outDir, `tattoo_${i + 1}.jpg`);
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close((err) => {
        if (!err) console.log(`Downloaded ${dest}`);
      });  
    });
  }).on('error', function(err) {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${dest}: ${err.message}`);
  });
});
