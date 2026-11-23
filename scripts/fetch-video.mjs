import fs from 'fs';

const url = "https://instagram.fmpm3-1.fna.fbcdn.net/o1/v/t2/f2/m367/AQME52E4_Yq2aiylqCbtIevPwISni6vM1mbpDblaEQtoTBFKwO4SUZd1UfcuZILQAtcBfb4bmSuP9Q-TZBnTqNbKu1_KtTlbu9v3YZg.mp4?_nc_cat=102&_nc_oc=AdqwACctJ1ZbU2jZMNtune_BPNTsr0eZZlxLkxn_t3hI6WWkmQdan9ibYkmfHQWls1w&_nc_sid=9ca052&_nc_ht=instagram.fmpm3-1.fna.fbcdn.net&_nc_ohc=_ofEk9xgEMwQ7kNvwFdRmCU&efg=eyJ2ZW5jb2RlX3RhZyI6ImlnLXhwdmRzLmNsaXBzLmlnd3d3LUMzLmRhc2hfYmFzZWxpbmVfMV92MSIsInZpZGVvX2lkIjpudWxsLCJvaWxfdXJsZ2VuX2FwcF9pZCI6OTM2NjE5NzQzMzkyNDU5LCJjbGllbnRfbmFtZSI6ImlnIiwieHB2X2Fzc2V0X2lkIjoxNzg4NzAzMTQ2NjQ0OTEyNiwiYXNzZXRfYWdlX2RheXMiOjI1NiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE3LCJiaXRyYXRlIjoxOTU2MDk1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=jX-0wi6EjN58h3TXeRqJ_Q&_nc_ss=7b689&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQSiOOkVP3M2tVPsoQnQ8xcp-tK_etSpzc97GlPcjfj5DQ&oe=6B0A02B7";

console.log("Fetching video...");
try {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://www.instagram.com/'
    }
  });

  console.log("Status:", res.status);
  if (res.status === 200) {
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync('public/videos/suite-master.mp4', buffer);
    console.log("Saved public/videos/suite-master.mp4! Size:", buffer.length);
  } else {
    console.error("Failed to fetch directly, status:", res.status);
    process.exit(1);
  }
} catch (err) {
  console.error("Error fetching video:", err);
  process.exit(1);
}
