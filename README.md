# DevRhylme Foundation Website

A modern, open-source foundation website built with Next.js 15, TypeScript, and Tailwind CSS.

![DevRhylme Foundation](https://img.shields.io/badge/DevRhylme-Foundation-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- ✨ Modern, responsive design with Tailwind CSS
- 🚀 Built with Next.js 15 App Router
- 📱 Mobile-first responsive design
- 🎨 Smooth animations with Framer Motion
- 📧 Contact form with Resend email integration
- 🔥 Firebase integration for data storage
- 🎯 TypeScript for type safety
- 🎭 Dynamic content management
- 📊 Event management system
- 👥 Team and contributor showcase
- 🤝 Partners and sponsors page
- 📚 Documentation structure

## 📋 Prerequisites

Before you begin, ensure you have installed:

- Node.js 18.x or higher
- npm or yarn or pnpm
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/devrhylme/devrhylme.org.git
cd devrhylme.org
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Resend API
RESEND_API_KEY=your_resend_api_key_here

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Email Configuration
CONTACT_EMAIL_TO=contact@devrhylme.org
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
devrhylme.org/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── community/         # Community page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── partners/          # Partners page
│   ├── projects/          # Projects page
│   ├── team/              # Team page
│   ├── docs/              # Documentation
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/         # Page sections
│   │   ├── hero.tsx
│   │   ├── featured-projects.tsx
│   │   ├── mission.tsx
│   │   ├── stats.tsx
│   │   └── community-cta.tsx
│   └── ui/               # UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── project-card.tsx
│       └── event-card.tsx
├── lib/                   # Utility functions
│   ├── data/             # Data files
│   │   ├── projects.ts
│   │   ├── events.ts
│   │   └── partners.ts
│   ├── firebase/         # Firebase config
│   │   └── config.ts
│   ├── utils.ts          # Utility functions
│   └── validation.ts     # Zod schemas
├── types/                # TypeScript types
│   └── index.ts
├── public/               # Static assets
│   └── images/
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Colors

Update the primary colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#e0f2fe',
    100: '#bae6fd',
    // ... your colors
  },
}
```

### Content

Update content in the following locations:

- **Projects**: `lib/data/projects.ts`
- **Events**: `lib/data/events.ts`
- **Partners**: `lib/data/partners.ts`
- **Team Members**: `app/team/page.tsx`

## 📧 Setting up Email (Resend)

1. Sign up for a [Resend account](https://resend.com)
2. Get your API key from the dashboard
3. Add the API key to `.env.local`
4. Verify your domain (optional but recommended)

## 🔥 Setting up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database
3. Get your configuration from Project Settings
4. Add configuration to `.env.local`
5. Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devrhylme/devrhylme.org)

### Manual Deployment

```bash
npm run build
npm run start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Resend](https://resend.com/)
- [Firebase](https://firebase.google.com/)

## 📞 Support

For support, email contact@devrhylme.org or join our Discord community.

## 🔗 Links

- Website: [https://devrhylme.org](https://devrhylme.org)
- GitHub: [https://github.com/devrhylme](https://github.com/devrhylme)
- Documentation: [https://devrhylme.org/docs](https://devrhylme.org/docs)

---

Made with ❤️ by DevRhylme Foundation