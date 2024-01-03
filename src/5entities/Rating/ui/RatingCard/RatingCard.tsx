import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/6shared/ui/deprecated/Card';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { Text as TextDepreacetd } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { StarRating } from '@/6shared/ui/deprecated/StarRating';
import { Modal } from '@/6shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/6shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import { Drawer } from '@/6shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Input } from '@/6shared/ui/redesigned/Input';
import { Button } from '@/6shared/ui/redesigned/Button';
import { Card } from '@/6shared/ui/redesigned/Card';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid='RatingCard.Input'
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      }
      off={
        <>
          <TextDepreacetd title={feedbackTitle} />
          <InputDeprecated
            data-testid='RatingCard.Input'
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align='center' gap='8' max>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
          off={
            <TextDepreacetd
              title={starsCount ? t('Спасибо за оценку!') : title}
            />
          }
        />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap='32'>
            {modalContent}
            <ToggleFeatures
              feature='isAppRedesigned'
              on={
                <HStack max gap='16' justify='end'>
                  <Button data-testid='RatingCard.Close' onClick={cancelHandle}>
                    {t('Закрыть')}
                  </Button>
                  <Button data-testid='RatingCard.Send' onClick={acceptHandle}>
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
              off={
                <HStack max gap='16' justify='end'>
                  <ButtonDeprecated
                    data-testid='RatingCard.Close'
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                  >
                    {t('Закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid='RatingCard.Send'
                    onClick={acceptHandle}
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap='32'>
            {modalContent}
            <ToggleFeatures
              feature='isAppRedesigned'
              on={
                <Button fullWidth onClick={acceptHandle} size='l'>
                  {t('Отправить')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  fullWidth
                  onClick={acceptHandle}
                  size={ButtonSize.L}
                >
                  {t('Отправить')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card fullWidth border='round' padding='24'>
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid='RatingCard'>
          {content}
        </CardDeprecated>
      }
    />
  );
});
