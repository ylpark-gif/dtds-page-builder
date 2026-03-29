import type { ComponentDefinition } from '../types'

export const TooltipDefinition: ComponentDefinition = {
  type: 'Tooltip',
  displayName: 'Tooltip',
  category: 'Indicators and Feedback',
  description: '요소에 마우스를 올리면 추가 정보를 표시하는 툴팁',
  icon: 'chat_bubble',
  props: [
    { name: 'content', type: { kind: 'text', default: '도움말 텍스트' }, label: 'Content', category: 'Component' },
  ],
  slots: [],
  defaultNode: () => ({ type: 'Tooltip', props: { content: '도움말 텍스트' }, textContent: '마우스를 올려보세요', children: [] }),
  importPath: 'doctalk-design-system',
  importNames: ['Tooltip', 'TooltipTrigger', 'TooltipContent', 'TooltipProvider'],
}
