// Use an environment variable for the S3 base URL, fallback to a default if not set
const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL || 'https://my-bucket.s3.amazonaws.com/'

const photoCount = 80 // Set to the number of images in your S3 bucket
const getFilename = i => `${i + 1}.jpg` // Adjust if your filenames have a different pattern

export const photos = Array.from({ length: photoCount }).map((_, i) => ({
  src: `${S3_BASE_URL}images/${getFilename(i)}`,
  width: 4, // Set a default or fetch actual dimensions if available
  height: 3
}))
