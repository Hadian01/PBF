import Card from './card';

export default function MyProfileV2() {
  return (
    <div>
      <Card title="Foto">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="Tentang">
        <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari Ethiopia yang telah menemukan pengobatan alami untuk schistosomiasis.</p>
      </Card>
    </div>
  );
}