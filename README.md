# Text2Image Projesi

Bu proje, metin girişlerini yapay zeka kullanarak görüntülere dönüştüren bir web uygulamasıdır. Proje, modern bir web arayüzü (React) ve güçlü bir backend API'den oluşmaktadır.

## 🚀 Başlangıç

Bu bölüm, projeyi yerel geliştirme ortamınızda nasıl çalıştıracağınızı adım adım açıklar.

### Ön Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların bilgisayarınızda kurulu olması gerekmektedir:

- Node.js (v16 veya üzeri)
- Python (3.8 veya üzeri)
- Jupyter Notebook
- npm veya yarn
- Git
- Ngrok (Opsiyonel - Dış erişim için)

### Proje Yapısı

```
text2image-projesi/
├── text2image-ui/     # React frontend uygulaması
└── model_api.ipynb    # Jupyter notebook backend API
```

### Kurulum Adımları

1. **Projeyi Klonlama**
   ```bash
   git clone [proje-url]
   cd [proje-klasörü]
   ```

2. **Frontend Kurulumu**
   ```bash
   cd text2image-ui
   npm install
   ```

3. **Backend Kurulumu**
   ```bash
   jupyter notebook
   ```
   Jupyter Notebook açıldığında:
   - `model_api.ipynb` dosyasını açın
   - Tüm hücreleri sırasıyla çalıştırın (Run All)

### Uygulamayı Çalıştırma

1. **Backend API'yi Başlatma**
   - Jupyter Notebook'ta `model_api.ipynb` dosyasını açın
   - Tüm hücreleri çalıştırın
   - API varsayılan olarak `http://localhost:5000` adresinde çalışacaktır

2. **Frontend'i Başlatma**
   ```bash
   cd text2image-ui
   npm start
   ```
   Frontend uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

### Ngrok ile Dış Erişim Yapılandırması (Opsiyonel)

Eğer uygulamanızı dış dünyaya açmak istiyorsanız, Ngrok kullanabilirsiniz:

1. **Ngrok Kurulumu**
   - [Ngrok'u indirin ve kurun](https://ngrok.com/download)
   - Ngrok hesabı oluşturun ve auth token'ınızı ayarlayın

2. **Backend API'yi Ngrok ile Dışa Açma**
   ```bash
   ngrok http 5000
   ```
   Bu komut size benzersiz bir URL verecektir (örn: `https://abc123.ngrok.io`)

3. **Frontend'de Ngrok URL'ini Ayarlama**
   - `text2image-ui/.env` dosyasını açın
   - API URL'ini Ngrok'tan aldığınız URL ile güncelleyin:
   ```env
   REACT_APP_API_URL=https://abc123.ngrok.io
   ```
   - Frontend uygulamasını yeniden başlatın

⚠️ **Önemli Notlar:**
- Backend API'nin çalışır durumda olduğundan emin olun
- Frontend uygulamasını başlatmadan önce `.env` dosyasındaki API URL'inin doğru olduğundan emin olun
- Yerel geliştirme için `http://localhost:5000` adresini kullanabilirsiniz
- Jupyter Notebook'ta hücreleri sırasıyla çalıştırmaya dikkat edin
- Ngrok kullanırken:
  - Her oturum başlangıcında yeni bir URL alırsınız
  - Ücretsiz hesapta oturum süresi 2 saattir
  - URL değiştiğinde `.env` dosyasını güncellemeyi unutmayın