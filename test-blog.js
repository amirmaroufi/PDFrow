console.log('Testing blog data import...');

try {
    const data = require('./blog-data.js');
    console.log('Import successful');
    console.log('Data keys:', Object.keys(data));
    
    if (data.blogData) {
        console.log('Blog data found');
        console.log('Number of posts:', Object.keys(data.blogData).length);
        console.log('First post title:', data.blogData[1]?.title);
    } else {
        console.log('No blogData property found');
    }
} catch (error) {
    console.error('Import failed:', error.message);
}