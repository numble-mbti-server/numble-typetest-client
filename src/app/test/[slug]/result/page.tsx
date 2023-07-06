'use client';
import { getTestResult } from '@/api/test/api';
import TestResult from '@/components/test/TestResult';
import { mbtiResultAtom } from '@/lib/recoil/atom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';

interface TestResulPagetProps {
  params: {
    slug: string;
  };
}

const TestResultPage = ({ params: { slug } }: TestResulPagetProps) => {
  const { EI, SN, JP, TF } = useRecoilValue(mbtiResultAtom);
  const mbti = (EI > 1 ? 'E' : 'I') + (SN > 1 ? 'S' : 'N') + (JP > 1 ? 'J' : 'P') + (TF > 1 ? 'T' : 'F');
  const { data } = useSWR(`/api/mbti/${slug}/features`, () => getTestResult(slug, mbti));
  return data ? <TestResult result={data.data} mbti={mbti} /> : <div>Loading...</div>;
};

export default TestResultPage;
