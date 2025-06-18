'use client';

import { useCallback, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../shadcn/select';

export function LanguageSelector({
  onChange,
}: {
  onChange?: (locale: string) => unknown;
}) {
  const { i18n } = useTranslation();
  const { language: currentLanguage, options = {} } = i18n ?? {};
  const lang = currentLanguage ?? 'en';
  const supportedLngs = (options.supportedLngs ?? []) as string[];
  const locales = supportedLngs.filter(
    (locale) => locale.toLowerCase() !== 'cimode',
  );

  const languageNames = useMemo(() => {
    if (typeof Intl.DisplayNames === 'function') {
      return new Intl.DisplayNames([lang], { type: 'language' });
    }
    return { of: (l: string) => l };
  }, [lang]);

  const [value, setValue] = useState(i18n.language);

  const languageChanged = useCallback(
    async (locale: string) => {
      setValue(locale);

      if (onChange) {
        onChange(locale);
      }

      await i18n.changeLanguage(locale);

      // refresh cached translations
      window.location.reload();
    },
    [i18n, onChange],
  );

  return (
    <Select value={value} onValueChange={languageChanged}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {locales.map((locale) => {
          const label = capitalize(languageNames.of(locale) ?? locale);

          const option = {
            value: locale,
            label,
          };

          return (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

function capitalize(lang: string) {
  return lang.slice(0, 1).toUpperCase() + lang.slice(1);
}
