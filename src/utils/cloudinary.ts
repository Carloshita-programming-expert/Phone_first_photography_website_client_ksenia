/**
 * Cloudinary Dynamic URL Helper
 * Constructs optimized media delivery URLs using Cloudinary CDN transformations (f_auto, q_auto).
 * Zero raw media binaries are stored in the repository.
 */

const DEFAULT_CLOUD_NAME = 'nzhki73m';

export function getCloudinaryUrl(
  publicId: string,
  transformations: string = 'f_auto,q_auto'
): string {
  if (!publicId) return '';
  
  // If already a fully qualified URL, return directly
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }

  const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || DEFAULT_CLOUD_NAME;
  const cleanId = publicId.replace(/^\/+/, '');
  const transformPath = transformations ? `${transformations}/` : '';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformPath}${cleanId}`;
}
