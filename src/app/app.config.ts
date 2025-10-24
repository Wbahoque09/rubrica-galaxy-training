import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp({ projectId: "productos-17763", appId: "1:769355909481:web:e869cbe3a70563a80655f8", storageBucket: "productos-17763.firebasestorage.app", apiKey: "AIzaSyAcaZOop5h2jnCmQUUMr6bbN-xBRXf8HUk", authDomain: "productos-17763.firebaseapp.com", messagingSenderId: "769355909481", measurementId: "G-GPK340N02D" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
