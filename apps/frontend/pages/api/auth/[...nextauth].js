import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: 'User', email: credentials.email };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error'
  }
});
