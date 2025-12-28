import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for your purchase. You will receive an email shortly with your access credentials and setup instructions.
        </p>
        <Link 
          href="/"
          className="inline-block w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
