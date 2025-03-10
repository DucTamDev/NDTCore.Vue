import { defineStore } from 'pinia';
import type { User } from '@modules/auth/types/user';

export const useAuthStore = defineStore('auth', {
  state: (): { user: User } => ({
    user: getStoredUser() // Đảm bảo luôn có giá trị hợp lệ khi khởi tạo
  }),

  actions: {
    checkUser() {
      this.user = getStoredUser();
    },
    login(userData: { name: string }) {
      this.user = { ...userData, isGuest: false };
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    logout() {
      this.user = { name: 'Guest', isGuest: true };
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }
});

// ✅ Hàm helper để đảm bảo user luôn có giá trị hợp lệ
function getStoredUser(): User {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      return JSON.parse(storedUser) as User;
    }
  } catch (error) {
    console.error('Failed to parse user from localStorage:', error);
  }
  return { name: 'Guest', isGuest: true };
}
