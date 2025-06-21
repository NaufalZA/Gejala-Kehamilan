// Definisi masalah kehamilan dan gejala terkait
const pregnancyIssues = [
    {
        name: "Pre-eklampsia",
        symptoms: ["tekananDarahTinggi", "sakit-kepala", "pembengkakan", "pandanganKabur"],
        description: "Pre-eklampsia adalah kondisi tekanan darah tinggi selama kehamilan yang ditandai dengan tekanan darah di atas 140/90, sakit kepala menetap, pembengkakan pada kaki, tangan, dan wajah, serta gangguan penglihatan.",
        action: "SEGERA KE RUMAH SAKIT jika mengalami gejala pre-eklampsia terutama jika disertai sakit kepala berat dan gangguan penglihatan. Pre-eklampsia adalah kondisi darurat yang memerlukan penanganan medis segera untuk keselamatan ibu dan janin."
    },
    {
        name: "Hiperemesis Gravidarum",
        symptoms: ["muntahBerlebihan", "lelah", "beratBadanTurun"],
        description: "Kondisi mual dan muntah berlebihan selama kehamilan yang dapat menyebabkan dehidrasi, malnutrisi, dan penurunan berat badan yang signifikan.",
        action: "Segera konsultasi dengan dokter jika mengalami muntah berlebihan yang menyebabkan dehidrasi atau penurunan berat badan. Mungkin memerlukan rawat inap untuk rehidrasi dan pemberian nutrisi melalui infus."
    },
    {
        name: "Infeksi Saluran Kemih",
        symptoms: ["keluhanSaatBuangAir", "demam", "nyeriPanggul"],
        description: "Infeksi pada saluran kemih yang ditandai dengan nyeri atau panas saat buang air kecil, demam, dan nyeri pada area panggul bawah.",
        action: "Segera konsultasi dengan dokter untuk mendapatkan antibiotik yang aman untuk kehamilan. Ke rumah sakit jika disertai demam tinggi, menggigil, atau nyeri pinggang hebat yang menunjukkan infeksi ginjal."
    },
    {
        name: "Persalinan Prematur",
        symptoms: ["kontraksiDini", "keluarCairan"],
        description: "Kelahiran bayi sebelum minggu ke-37 kehamilan, yang ditandai dengan kontraksi sebelum waktu persalinan dan keluarnya cairan ketuban dini.",
        action: "SEGERA KE RUMAH SAKIT jika mengalami kontraksi teratur sebelum minggu ke-37 atau jika ketuban pecah. Tindakan medis dapat memperlambat persalinan atau mempersiapkan kelahiran prematur."
    },
    {
        name: "Abruptio Plasenta",
        symptoms: ["pendarahanVagina", "nyeriPerutBerat", "tekananDarahTinggi", "nyeriPerut"],
        description: "Terlepasnya plasenta dari dinding rahim sebelum waktunya, dengan gejala pendarahan vagina, nyeri perut berat, dan peningkatan tekanan darah.",
        action: "SEGERA KE RUMAH SAKIT/PANGGIL AMBULANS jika mengalami nyeri perut mendadak dan pendarahan. Ini adalah kondisi darurat yang mengancam jiwa bagi ibu dan bayi, membutuhkan persalinan darurat."
    },
    {
        name: "Plasenta Previa",
        symptoms: ["pendarahanVagina", "pendarahanHitam"],
        description: "Kondisi di mana plasenta menutupi sebagian atau seluruh mulut rahim, ditandai dengan pendarahan vagina tidak normal, terutama pendarahan berwarna hitam atau cokelat.",
        action: "SEGERA KE RUMAH SAKIT jika terjadi pendarahan vagina tanpa rasa sakit. Jangan melakukan hubungan seksual dan hindari pemeriksaan vagina. Mungkin memerlukan istirahat total atau persalinan caesar."
    },
    {
        name: "Kandidiasis Vagina",
        symptoms: ["keluhanKeputihan", "gatalKemaluan"],
        description: "Infeksi jamur pada vagina yang umum terjadi selama kehamilan, dengan gejala keputihan berlebih dan rasa gatal di area kemaluan.",
        action: "Konsultasi dengan dokter untuk mendapatkan pengobatan yang aman selama kehamilan. Jaga kebersihan area genital dan hindari pakaian ketat atau berbahan non-menyerap."
    },
    {
        name: "Kehamilan Postterm",
        symptoms: ["keluarCairan"],
        description: "Kehamilan yang berlangsung lebih dari 42 minggu, ditandai dengan keluarnya cairan ketuban dan risiko komplikasi meningkat.",
        action: "Lakukan pemeriksaan rutin dengan dokter. Dokter mungkin merekomendasikan induksi persalinan jika kehamilan melebihi 41-42 minggu untuk menghindari risiko komplikasi."
    },
    {
        name: "Solusio Plasenta",
        symptoms: ["pendarahanVagina", "nyeriPerutBerat", "tekananDarahTinggi"],
        description: "Terlepasnya sebagian atau seluruh plasenta dari dinding rahim sebelum kelahiran, dengan gejala pendarahan vagina, nyeri perut berat, dan peningkatan tekanan darah.",
        action: "SEGERA KE RUMAH SAKIT/PANGGIL AMBULANS jika mengalami nyeri perut mendadak dan pendarahan. Kondisi ini memerlukan penanganan darurat dan mungkin membutuhkan persalinan segera."
    },
    {
        name: "Ketuban Pecah Dini",
        symptoms: ["keluarCairan"],
        description: "Pecahnya selaput ketuban sebelum proses persalinan dimulai, ditandai dengan keluarnya cairan dari vagina sebelum waktunya.",
        action: "SEGERA KE RUMAH SAKIT jika air ketuban keluar sebelum waktunya, tidak peduli berapa banyak. Hindari memasukkan apapun ke vagina untuk mencegah infeksi."
    },
    {
        name: "Diabetes Gestasional",
        symptoms: ["lelah", "seringBuangAirKecil", "rasa-haus", "makanBerlebih"],
        description: "Diabetes yang terjadi selama kehamilan, ditandai dengan kelelahan, sering buang air kecil, rasa haus berlebihan, dan nafsu makan tidak terkendali.",
        action: "Segera konsultasi dengan dokter untuk pemeriksaan gula darah. Ikuti diet khusus diabetes gestasional, pantau kadar gula darah secara teratur, dan lakukan aktivitas fisik ringan sesuai anjuran dokter."
    },
    {
        name: "Anemia",
        symptoms: ["lelah", "pucat"],
        description: "Kekurangan sel darah merah yang dapat mempengaruhi kesehatan ibu dan janin, dengan gejala kelelahan dan pucat berlebihan.",
        action: "Konsultasi dengan dokter untuk mendapatkan suplemen zat besi. Konsumsi makanan kaya zat besi seperti daging merah, sayuran hijau, dan kacang-kacangan. Segera ke dokter jika merasa sangat lemah atau pusing."
    },
    {
        name: "Hipertensi",
        symptoms: ["tekananDarahTinggi", "sakit-kepala", "pembengkakan"],
        description: "Tekanan darah tinggi selama kehamilan yang memerlukan pengawasan medis, dengan gejala tekanan darah di atas 140/90, sakit kepala, dan pembengkakan.",
        action: "Lakukan pemeriksaan rutin ke dokter dan pantau tekanan darah. Segera ke rumah sakit jika sakit kepala berat, penglihatan kabur, atau nyeri ulu hati. Mungkin memerlukan obat penurun tekanan darah yang aman untuk kehamilan."
    },
    {
        name: "Hamil Ektopik",
        symptoms: ["nyeriPerutBerat", "pendarahanVagina"],
        description: "Kehamilan di luar rahim, kondisi yang berbahaya dan memerlukan penanganan segera, ditandai dengan nyeri perut berat dan pendarahan vagina.",
        action: "SEGERA KE RUMAH SAKIT/PANGGIL AMBULANS jika mengalami nyeri perut mendadak disertai pendarahan. Kehamilan ektopik adalah kondisi darurat yang mengancam jiwa dan memerlukan penanganan medis segera."
    },
    {
        name: "Inkompetensi Servik",
        symptoms: ["keluarCairan", "kontraksiDini"],
        description: "Kondisi serviks yang lemah yang dapat menyebabkan persalinan prematur, dengan gejala keluarnya cairan dan kontraksi sebelum waktunya.",
        action: "Konsultasi dengan dokter spesialis kandungan untuk pemantauan rutin. Mungkin memerlukan prosedur cerclage (penjahitan serviks) untuk mencegah persalinan prematur. Bed rest mungkin dianjurkan."
    },
    {
        name: "Keguguran",
        symptoms: ["pendarahanVagina", "nyeriPerut", "pendarahanHitam"],
        description: "Kehilangan kehamilan sebelum minggu ke-20, dengan gejala pendarahan vagina, nyeri perut, dan pendarahan berwarna hitam atau cokelat.",
        action: "SEGERA KE RUMAH SAKIT jika mengalami pendarahan vagina dan kram perut. Meski beberapa keguguran tidak dapat dicegah, penanganan medis tepat waktu penting untuk menghindari komplikasi."
    }
];

// ======= NLP PROCESSOR =======
class IndonesianNLPProcessor {
    constructor() {
        // Indonesian stopwords
        this.stopwords = new Set([
            'yang', 'untuk', 'pada', 'ke', 'para', 'namun', 'menurut', 'antara', 'secara',
            'atas', 'terhadap', 'karena', 'hingga', 'kembali', 'dan', 'ini', 'itu', 'dari',
            'di', 'dalam', 'dengan', 'oleh', 'juga', 'akan', 'pada', 'atau', 'adalah',
            'sebagai', 'dapat', 'telah', 'sudah', 'ada', 'tidak', 'saya', 'aku', 'kamu',
            'dia', 'mereka', 'kami', 'kita', 'ia', 'nya', 'mu', 'ku', 'se', 'ber', 'ter',
            'me', 'mem', 'men', 'meng', 'pe', 'per', 'pen', 'pem', 'peng', 'ke', 'an'
        ]);

        // Synonym dictionary for Indonesian medical terms
        this.synonyms = {
            'sakit': ['nyeri', 'pegal', 'perih', 'cenat-cenut', 'ngilu'],
            'nyeri': ['sakit', 'pegal', 'perih', 'cenat-cenut', 'ngilu'],
            'pegal': ['sakit', 'nyeri', 'perih', 'cenat-cenut'],
            'lelah': ['capek', 'letih', 'lemas', 'lesu', 'kelelahan'],
            'capek': ['lelah', 'letih', 'lemas', 'lesu', 'kelelahan'],
            'letih': ['lelah', 'capek', 'lemas', 'lesu'],
            'demam': ['panas', 'meriang', 'fever'],
            'mual': ['enek', 'ingin muntah'],
            'muntah': ['mutah', 'memuntahkan'],
            'pusing': ['sakit kepala', 'pening', 'kepala berdenyut'],
            'kencing': ['buang air kecil', 'pipis', 'urin'],
            'darah': ['pendarahan', 'perdarahan', 'berdarah']
        };

        // Simple stemmer rules for Indonesian
        this.stemmerRules = [
            { pattern: /^(ber|ter|me|mem|men|meng|pe|per|pen|pem|peng|ke|an)(.*)/, replace: '$2' },
            { pattern: /^(di|ke|se)(.*)/, replace: '$2' },
            { pattern: /(kan|an|i|lah|kah|pun|nya)$/, replace: '' }
        ];
    }

    // ======= TEXT PREPROCESSING =======
    
    // a. Parsing - Extract meaningful parts from text
    parse(text) {
        return text.toLowerCase().replace(/[^\w\s]/g, '');
    }

    // b. Tokenization - Split text into tokens
    tokenize(text) {
        return text.split(/\s+/);
    }

    // c. Stemming - Reduce words to their root form
    stem(word) {
        for (const rule of this.stemmerRules) {
            if (rule.pattern.test(word)) {
                return word.replace(rule.pattern, rule.replace);
            }
        }
        return word;
    }

    // d. Indexing - Create searchable terms
    index(tokens) {
        const processedTokens = [];
        
        for (const token of tokens) {
            // Skip stopwords
            if (this.stopwords.has(token)) continue;
            
            // Add original token
            processedTokens.push(token);
            
            // Add stemmed version
            const stemmed = this.stem(token);
            if (stemmed !== token) {
                processedTokens.push(stemmed);
            }
            
            // Add synonyms
            if (this.synonyms[token]) {
                processedTokens.push(...this.synonyms[token]);
            }
        }
        
        return [...new Set(processedTokens)]; // Return unique tokens
    }

    // Full text preprocessing pipeline
    process(text) {
        const parsed = this.parse(text);
        const tokens = this.tokenize(parsed);
        const indexed = this.index(tokens);
        return indexed;
    }
}

// ======= SEARCH ENGINE =======
class SymptomSearchEngine {
    constructor() {
        this.nlpProcessor = new IndonesianNLPProcessor();
        this.symptoms = [];
        this.index = {};
    }

    // Initialize with symptom data
    init(symptoms) {
        this.symptoms = symptoms;
        
        // Build search index
        this.buildIndex();
    }

    // Build inverted index for symptoms
    buildIndex() {
        this.index = {};
        
        this.symptoms.forEach(symptom => {
            // Get all keywords from label text and data-keywords attribute
            const keywords = symptom.text.toLowerCase() + ' ' + (symptom.keywords || '');
            const tokens = this.nlpProcessor.process(keywords);
            
            // Add to index
            tokens.forEach(token => {
                if (!this.index[token]) {
                    this.index[token] = new Set();
                }
                this.index[token].add(symptom.id);
            });
        });
    }

    // Search symptoms based on natural language input
    search(query) {
        const processedQuery = this.nlpProcessor.process(query);
        
        // Find matching symptoms using the index
        const matchedIds = new Set();
        
        processedQuery.forEach(token => {
            if (this.index[token]) {
                this.index[token].forEach(id => matchedIds.add(id));
            }
        });
        
        // Get full symptom data for matches
        const matches = this.symptoms.filter(symptom => matchedIds.has(symptom.id));
        
        // Sort by relevance (number of matched terms)
        matches.sort((a, b) => {
            const aTerms = this.nlpProcessor.process(a.text + ' ' + a.keywords).length;
            const bTerms = this.nlpProcessor.process(b.text + ' ' + b.keywords).length;
            return bTerms - aTerms;
        });
        
        return matches;
    }

    // Get suggestions as user types
    getSuggestions(query) {
        if (query.length < 2) return [];
        
        const processedQuery = this.nlpProcessor.process(query);
        
        // Find partial matches
        const suggestions = this.symptoms.map(symptom => {
            const symptomTerms = this.nlpProcessor.process(symptom.text + ' ' + symptom.keywords);
            const matchCount = processedQuery.reduce((count, token) => {
                return count + (symptomTerms.some(st => st.includes(token)) ? 1 : 0);
            }, 0);
            
            return { ...symptom, score: matchCount };
        })
        .filter(symptom => symptom.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5); // Return top 5 suggestions
        
        return suggestions;
    }
}

// ======= MAIN APPLICATION =======
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search engine with symptom data
    const searchEngine = new SymptomSearchEngine();
    const symptomCheckboxes = Array.from(document.querySelectorAll('.checkbox-group label'));
    
    // Prepare symptom data with keywords from data-keywords attribute
    const symptomsData = symptomCheckboxes.map(label => {
        const input = label.querySelector('input');
        return {
            id: input.value,
            text: label.textContent.trim(),
            keywords: label.dataset.keywords || ''
        };
    });
    
    searchEngine.init(symptomsData);
    
    // DOM elements
    const searchInput = document.getElementById('symptomSearch');
    const searchBtn = document.getElementById('searchBtn');
    const searchSuggestions = document.getElementById('searchSuggestions');
    const searchResults = document.getElementById('searchResults');
    
    // Highlight and check the symptom checkbox
    function highlightSymptom(symptomId) {
        const label = document.querySelector(`label input[value="${symptomId}"]`).parentElement;
        
        // Check the checkbox
        const checkbox = label.querySelector('input');
        checkbox.checked = true;
        
        // Highlight the label
        label.classList.add('matched');
        setTimeout(() => label.classList.remove('matched'), 2000);
        
        // Update count
        updateSelectedCount();
        
        // Scroll to the symptom
        label.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Handle search input
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        searchSuggestions.innerHTML = '';
        
        if (query.length > 1) {
            const suggestions = searchEngine.getSuggestions(query);
            
            if (suggestions.length > 0) {
                suggestions.forEach(suggestion => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.textContent = suggestion.text;
                    div.addEventListener('click', function() {
                        searchInput.value = suggestion.text;
                        searchSuggestions.innerHTML = '';
                        highlightSymptom(suggestion.id);
                    });
                    searchSuggestions.appendChild(div);
                });
            }
        }
    });
    
    // Handle search button click
    searchBtn.addEventListener('click', function() {
        performSearch();
    });
    
    // Handle enter key in search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Perform the search
    function performSearch() {
        const query = searchInput.value.trim();
        searchResults.innerHTML = '';
        
        if (query) {
            const results = searchEngine.search(query);
            
            if (results.length > 0) {
                results.forEach(result => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.innerHTML = `
                        <div>${result.text}</div>
                        <button class="select-symptom" data-id="${result.id}">Pilih</button>
                    `;
                    searchResults.appendChild(div);
                });
                
                // Add event listeners to select buttons
                document.querySelectorAll('.select-symptom').forEach(button => {
                    button.addEventListener('click', function() {
                        highlightSymptom(this.dataset.id);
                    });
                });
            } else {
                searchResults.innerHTML = '<div class="no-results">Tidak ditemukan gejala yang cocok</div>';
            }
        }
    }
    
    // ... (rest of your existing code remains the same)
    
    // Update the symptom labels to include data-keywords attribute
    // ... (existing code remains the same until the DOMContentLoaded event)

// Update the symptom labels to include data-keywords attribute
document.querySelectorAll('.checkbox-group label').forEach(label => {
    const input = label.querySelector('input');
    const symptomId = input.value;
    
    // Add keywords based on symptom ID
    let keywords = '';
    
    switch(symptomId) {
        case 'demam':
            keywords = 'panas meriang suhu tinggi badan';
            break;
        case 'nyeriPerut':
            keywords = 'sakit perut bawah rahim kram mulas';
            break;
        case 'muntahBerlebihan':
            keywords = 'mual muntah mutah berlebihan terus';
            break;
        case 'lelah':
            keywords = 'capek letih lemas lesu kelelahan';
            break;
        case 'beratBadanTurun':
            keywords = 'berkurang menyusut kurus berat badan turun';
            break;
        case 'tekananDarahTinggi':
            keywords = 'hipertensi tensi darah tinggi';
            break;
        case 'sakit-kepala':
            keywords = 'pusing kepala pening migren';
            break;
        case 'pembengkakan':
            keywords = 'bengkak edema kaki tangan wajah';
            break;
        case 'pandanganKabur':
            keywords = 'penglihatan buram tidak jelas mata';
            break;
        case 'keluhanSaatBuangAir':
            keywords = 'sakit nyeri panas pipis kencing';
            break;
        case 'nyeriPanggul':
            keywords = 'sakit panggul bawah pinggang';
            break;
        case 'keluhanKeputihan':
            keywords = 'keputihan cairan vagina berbau gatal';
            break;
        case 'gatalKemaluan':
            keywords = 'gatal vagina area intim kelamin';
            break;
        case 'kontraksiDini':
            keywords = 'mulas kontraksi perut kencang sebelum waktu';
            break;
        case 'pendarahanVagina':
            keywords = 'darah keluar berdarah merah';
            break;
        case 'keluarCairan':
            keywords = 'ketuban pecah air keluar rembes';
            break;
        case 'nyeriPerutBerat':
            keywords = 'sakit perut hebat sangat kram';
            break;
        case 'pendarahanHitam':
            keywords = 'darah hitam cokelat gelap';
            break;
        case 'seringBuangAirKecil':
            keywords = 'pipis kencing terus anyang-anyangan';
            break;
        case 'rasa-haus':
            keywords = 'haus minum banyak dehidrasi';
            break;
        case 'makanBerlebih':
            keywords = 'nafsu makan banyak lapar terus';
            break;
        case 'pucat':
            keywords = 'pucat wajah kulit kurang darah';
            break;
        default:
            keywords = label.textContent.toLowerCase();
    }
    
    label.dataset.keywords = keywords;
});

// ... (rest of your existing code)
});

// Fungsi untuk mendiagnosa masalah kehamilan
function diagnosePregnancyIssues(selectedSymptoms) {
    // Cek apakah ada gejala yang dipilih
    if (selectedSymptoms.length === 0) {
        return [];
    }

    // Filter penyakit berdasarkan gejala yang dipilih
    const possibleIssues = pregnancyIssues.filter(issue => 
        // Gunakan beberapa gejala yang cocok, tidak harus semua
        issue.symptoms.some(symptom => selectedSymptoms.includes(symptom))
    );

    // Urutkan berdasarkan jumlah gejala yang cocok (dari yang terbanyak)
    possibleIssues.sort((a, b) => {
        const aMatchCount = a.symptoms.filter(symptom => selectedSymptoms.includes(symptom)).length;
        const bMatchCount = b.symptoms.filter(symptom => selectedSymptoms.includes(symptom)).length;
        return bMatchCount - aMatchCount;
    });

    return possibleIssues;
}

// Event listener untuk form submit
document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil gejala yang dipilih
    const selectedSymptoms = Array.from(
        document.querySelectorAll('input[name="symptom"]:checked')
    ).map(checkbox => checkbox.value);

    // Lakukan diagnosa
    const results = diagnosePregnancyIssues(selectedSymptoms);

    // Tampilkan hasil
    const resultContainer = document.getElementById('diagnosisResult');
    
    if (results.length === 0) {
        resultContainer.innerHTML = `
            <p>Tidak ada masalah kehamilan yang terdeteksi berdasarkan gejala yang dipilih.</p>
            <p>Namun, selalu konsultasikan dengan dokter untuk pemeriksaan lebih lanjut.</p>
        `;
    } else {
        const resultHTML = results.map(issue => `
            <div class="issue-result">
                <h3>${issue.name}</h3>
                <p>${issue.description}</p>
                <div class="action-needed">
                    <strong>Tindakan yang Diperlukan:</strong>
                    <p>${issue.action}</p>
                </div>
            </div>
        `).join('');

        resultContainer.innerHTML = `
            <h3>Kemungkinan Masalah Kehamilan:</h3>
            ${resultHTML}
            <p class="warning">Catatan: Ini hanya alat bantu. Selalu konsultasikan dengan profesional medis.</p>
        `;
    }
});