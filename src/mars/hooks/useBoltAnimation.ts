import { useEffect } from 'react';
import {
  startMarsBoltAnimation,
  stopAllMarsBoltAnimations,
  stopMarsBoltAnimation,
} from '../legacy';

const animatedPages = new Set([
  'about',
  'services',
  'gallery',
  'quality',
  'sustainability',
  'career',
  'contact',
]);

export function useBoltAnimation(pageId: string) {
  useEffect(() => {
    if (!animatedPages.has(pageId)) {
      stopAllMarsBoltAnimations(null);
      return undefined;
    }

    stopAllMarsBoltAnimations(pageId);
    const timeout = window.setTimeout(() => startMarsBoltAnimation(pageId, undefined), 120);

    return () => {
      window.clearTimeout(timeout);
      stopMarsBoltAnimation(pageId);
    };
  }, [pageId]);
}
