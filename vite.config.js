import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Disabilita qualsiasi ottimizzazione Vite relativa ai font
		rollupOptions: {
		  output: {
			assetFileNames: 'src/lib/fonts/Ubuntu-Bold.ttf' // Evita il rinominare degli asset (inclusi i font)
			
		  }
		}
	  }
});
