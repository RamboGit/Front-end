import { h } from './js/component';
import { TabView } from './js/TabView';
import { ScrollView } from './js/ScrollView';
import { Text } from './js/Text';
import { ListView } from './js/ListView';
import { EventBus } from './js/EventBus';
import { RecommendationPage } from './js/pages/Recommendation';
import { getData } from './js/data';

const eventBus = new EventBus();
let trigged = false;
function onScrollEnd() {
  if (!trigged) {
    trigged = true;
    setTimeout(() => {
      debugger;
      this.setAttribute('end-text', 'no more');
      eventBus.trigger('scroll1End', [1, 2, 3, 4, 5, 6, 7, 8]);
    }, 1000);
  }
}

const data = {};
getData('recommend')
  .then(recommend => recommend.json())
  .then(recommend => {
    data.recommend = recommend;
    render(data);
  })

function render({ recommend }) {

  (<TabView >
    <ScrollView tab-title="推荐" end-text="加载更多">
      <RecommendationPage tab-title="推荐" data={recommend} />
    </ScrollView>
    <ScrollView tab-title="推荐" end-text="加载更多" on-scrollEnd={onScrollEnd}>
      scroll1
      {eventBus.listen(<ListView data={[1, 2, 3, 4, 5]} template={item => new Text(item * 2)}></ListView>, 'scroll1End', (ob, eventName, data) => ob.updateData(data))}
      some Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Text
    </ScrollView>
    <ScrollView tab-title="有趣的店">
      scroll2
      some Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Text
    </ScrollView>
    <ScrollView tab-title="品牌新店">
      scroll3
      some Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Text
    </ScrollView>
  </TabView>).mount(document.getElementById('app'));
}

/**
 * WrapperTest
 */
// (<div><span>2342</span></div>).mount(document.getElementById('app'));