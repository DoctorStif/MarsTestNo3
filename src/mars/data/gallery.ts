export type GalleryCategory = 'all' | 'fastener' | 'zinc' | 'phosphate' | 'geomet' | 'paint' | 'nickel';

export type GalleryItem = {
  id: number;
  cat: Exclude<GalleryCategory, 'all'>;
  title_tr: string;
  title_en: string;
  title_de: string;
  sub_tr: string;
  h: number;
  src: string;
};

export const galleryItems: GalleryItem[] = [
{ id:1,  cat:'fastener',  title_tr:'Çinko Kaplı Cıvata Seti',       title_en:'Zinc-Coated Bolt Set',       title_de:'Zinkverzinkter Schraubensatz', sub_tr:'M8-M16 Elektrolitik Çinko', h:280, src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id:2,  cat:'zinc',      title_tr:'Mavi Kromat Kaplama',             title_en:'Blue Chromate Coating',      title_de:'Blaue Chromatierung', sub_tr:'Elektrolitik Çinko', h:200, src:'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80' },
  { id:3,  cat:'phosphate', title_tr:'Mangan Fosfat Yüzey',             title_en:'Manganese Phosphate Surface',title_de:'Mangan-Phosphatoberfläche', sub_tr:'Fosfat – Mat Koyu', h:240, src:'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80' },
  { id:4,  cat:'fastener',  title_tr:'Metrik Cıvata Koleksiyonu',       title_en:'Metric Bolt Collection',     title_de:'Metrische Schraubenkollektion', sub_tr:'Çeşitli Boy ve Kaplama', h:200, src:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
  { id:5,  cat:'geomet',    title_tr:'Geomet® 500 Kaplama',             title_en:'Geomet® 500 Coating',        title_de:'Geomet® 500 Beschichtung', sub_tr:'Çinko Lamel – OEM', h:260, src:'https://images.unsplash.com/photo-1565793979098-1ec73b56d6e9?w=600&q=80' },
  { id:6,  cat:'paint',     title_tr:'Toz Boya Uygulaması',             title_en:'Powder Coating Application', title_de:'Pulverbeschichtungsanwendung', sub_tr:'RAL 9005 Siyah', h:220, src:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { id:7,  cat:'fastener',  title_tr:'Flanşlı Somun Serisi',            title_en:'Flange Nut Series',          title_de:'Flanschmutternserie', sub_tr:'DIN 6923 – Çinko Kaplı', h:200, src:'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&q=80' },
  { id:8,  cat:'nickel',    title_tr:'Elektrolitik Nikel Yüzey',        title_en:'Electrolytic Nickel Surface', title_de:'Elektrolytische Nickeloberfläche', sub_tr:'Parlak Nikel', h:260, src:'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&q=80' },
  { id:9,  cat:'zinc',      title_tr:'Sarı Kromat Kaplama',             title_en:'Yellow Chromate Coating',    title_de:'Gelbe Chromatierung', sub_tr:'Elektrolitik Çinko', h:220, src:'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&q=80' },
  { id:10, cat:'phosphate', title_tr:'Fosfat Boya Altı Katmanı',        title_en:'Phosphate Sub-Paint Layer',  title_de:'Phosphat-Grundierschicht', sub_tr:'Çinko Fosfat + Epoksi', h:240, src:'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80' },
  { id:11, cat:'geomet',    title_tr:'Dacromet® Kaplama',               title_en:'Dacromet® Coating',          title_de:'Dacromet® Beschichtung', sub_tr:'Lamel – İnşaat', h:200, src:'https://images.unsplash.com/photo-1558618047-f4e90ea8e23e?w=600&q=80' },
  { id:12, cat:'paint',     title_tr:'Yaş Boya Uygulama Hattı',         title_en:'Wet Paint Application Line', title_de:'Nasslack-Anwendungslinie', sub_tr:'Elektrostatik Sistem', h:280, src:'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80' },
  { id:13, cat:'fastener',  title_tr:'Çinko-Nikel Cıvata',             title_en:'Zinc-Nickel Bolt',           title_de:'Zink-Nickel-Schraube', sub_tr:'M10 Hex – Zn-Ni', h:220, src:'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80' },
  { id:14, cat:'nickel',    title_tr:'Kimyasal Nikel Kaplama',          title_en:'Electroless Nickel Coating', title_de:'Chemische Nickelbeschichtung', sub_tr:'Tekdüze Dağılım', h:200, src:'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=600&q=80' },
  { id:15, cat:'zinc',      title_tr:'Siyah Passivation',               title_en:'Black Passivation',          title_de:'Schwarze Passivierung', sub_tr:'Çinko – Siyah Kromat', h:240, src:'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80' },
  { id:16, cat:'fastener',  title_tr:'Havşa Başlı Vida Seti',          title_en:'Countersunk Screw Set',      title_de:'Senkkopfschraubensatz', sub_tr:'DIN 7991 – ISO 10642', h:200, src:'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80' },
  { id:17, cat:'geomet',    title_tr:'Geomet® Otomotiv Parçaları',     title_en:'Geomet® Automotive Parts',  title_de:'Geomet® Automotive-Teile', sub_tr:'Egzoz Sistem Parçaları', h:260, src:'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=600&q=80' },
  { id:18, cat:'nickel',    title_tr:'Nikel-Krom Dekoratif',            title_en:'Nickel-Chrome Decorative',   title_de:'Nickel-Chrom Dekorativ', sub_tr:'Parlak Nikel + Krom', h:220, src:'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80' },
];

export const galleryFilters: Array<{ id: GalleryCategory; label: string; i18n: string }> = [
  { id: 'all', label: 'Tümü', i18n: 'filter.all' },
  { id: 'zinc', label: 'Çinko Kaplama', i18n: 'filter.zinc' },
  { id: 'phosphate', label: 'Fosfat Kaplama', i18n: 'filter.phosphate' },
  { id: 'geomet', label: 'Geomet® / Lamel', i18n: 'filter.geomet' },
  { id: 'nickel', label: 'Nikel & Özel', i18n: 'filter.nickel' },
  { id: 'paint', label: 'Boya Uygulamaları', i18n: 'filter.paint' },
  { id: 'fastener', label: 'Bağlantı Elemanları', i18n: 'filter.fastener' },
];
