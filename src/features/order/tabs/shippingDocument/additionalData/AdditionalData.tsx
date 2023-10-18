import * as Tabs from '@radix-ui/react-tabs'

import css from './additionalInfo.module.scss'

import { ScrollableTableWrapper } from 'src/common/table/scrollableTableWrapper/ScrollableTableWrapper'

export const AdditionalData = () => {
  return (
    <Tabs.Root defaultValue="tab1" orientation="vertical">
      <Tabs.List aria-label="additional information" className={css.tabList}>
        <Tabs.Trigger value="tab1">Товарный раздел</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Транспортный раздел</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Данные для ТН</Tabs.Trigger>
      </Tabs.List>
      <ScrollableTableWrapper height="11.5rem">
        <Tabs.Content value="tab1">Tab one content</Tabs.Content>
        <Tabs.Content value="tab2">Tab two content</Tabs.Content>
        <Tabs.Content value="tab3">Tab three content</Tabs.Content>
      </ScrollableTableWrapper>
    </Tabs.Root>
  )
}
