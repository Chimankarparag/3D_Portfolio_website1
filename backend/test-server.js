// test-server.js
// A script to test if the backend API is working

import fetch from 'node-fetch';

async function testBackendServer() {
  try {
    console.log('Testing backend server...');
    
    // Test the simple test endpoint first
    console.log('1. Testing /api/test endpoint...');
    const testResponse = await fetch('http://localhost:5001/api/test');
    
    if (!testResponse.ok) {
      throw new Error(`Test endpoint failed with status: ${testResponse.status}`);
    }
    
    const testData = await testResponse.json();
    console.log('✅ Test endpoint response:', testData);
    
    // Now test the haiku endpoint
    console.log('\n2. Testing /api/haiku endpoint...');
    const haikuResponse = await fetch('http://localhost:5001/api/haiku', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: 'write a simple haiku' }),
    });
    
    if (!haikuResponse.ok) {
      const errorText = await haikuResponse.text();
      throw new Error(`Haiku endpoint failed with status: ${haikuResponse.status}, ${errorText}`);
    }
    
    const haikuData = await haikuResponse.json();
    console.log('✅ Haiku endpoint response:', haikuData);
    
    console.log('\n✅ All tests passed! Your backend server is working correctly.');
  } catch (error) {
    console.error('❌ Backend server test failed:', error.message);
  }
}

testBackendServer();