import { Typography, List, Checkbox } from "antd"
import useGetCategories from "../../helpers/getCategories"

const { Title } = Typography

function FilterByCategory({ handleFilters }) {
  const categories = useGetCategories()
  const onChange = checkedValue => handleFilters(checkedValue)
  return (
    <>
      <Title level={5}>按照分类筛选</Title>
      <Checkbox.Group onChange={onChange}>
        <List
          dataSource={categories}
          renderItem={item => (
            <List.Item>
              <Checkbox value={item._id}>{item.name}</Checkbox>
            </List.Item>
          )}
        />
      </Checkbox.Group>
    </>
  )
}

export default FilterByCategory
