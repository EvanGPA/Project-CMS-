// src/app/page.js
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col p-10">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="mb-4 mt-2 text-xs text-slate-400">
              Welcome to a new Content Management System
            </p>
          </div>
          <form>
            <Label htmlFor="email">Email</Label>
            <Input className="mt-2 mb-4 bg-transparent rounded-full" type="email" id="email" placeholder="Email" />

            <Label htmlFor="password">Password</Label>
            <Input className="mt-2 mb-4 bg-transparent rounded-full" type="password" id="password" placeholder="Password" />
            <Button type="submit" className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700">
              Login
            </Button>
          </form>
        </div>
        <div className="relative hidden md:block">
          <Image className="object-cover" fill={true} src="/bg.jpeg" alt="calming background image" />
        </div>
      </div>
    </main>
  );
}