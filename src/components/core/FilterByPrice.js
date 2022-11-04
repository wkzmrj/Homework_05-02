import { Typography, List, Radio } from "antd"
import prices from "../../helpers/price"

const { Title } = Typography

function FilterByPrice({ handleFilters }) {
  const onChange = event => handleFilters(event.target.value)
  return (
    <>
      <Title level={5}>按照价格筛选</Title>
      <Radio.Group onChange={onChange}>
        <List
          dataSource={prices}
          renderItem={item => (
            <List.Item>
              <Radio value={item.array}>{item.price}</Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  )
}

export default FilterByPrice
