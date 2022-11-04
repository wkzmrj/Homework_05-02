import { Col, Row, Space, Button, Empty } from "antd"
import Layout from "./Layout"
import FilterByCategory from "./FilterByCategory"
import FilterByPrice from "./FilterByPrice"
import ProductItem from "./ProductItem"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filter_products } from "../../store/actions/filter"

function Shop() {
  const [filters, setFilters] = useState({ category: [], price: [] })
  const [skip, setSkip] = useState(0)
  const dispatch = useDispatch()
  const { data, size } = useSelector(state => state.filter)

  useEffect(() => {
    setSkip(0)
  }, [filters])

  useEffect(() => {
    dispatch(filter_products({ filters, skip }))
  }, [filters, skip, dispatch])

  const loadMore = () => {
    setSkip(skip + 4)
  }

  return (
    <Layout title="拉勾严选商城列表" subTitle="挑选你喜欢的商品吧">
      <Row>
        <Col span="4">
          <Space size="middle" direction="vertical">
            <FilterByCategory
              handleFilters={filter =>
                setFilters({ ...filters, category: filter })
              }
            />
            <FilterByPrice
              handleFilters={filter =>
                setFilters({ ...filters, price: filter })
              }
            />
          </Space>
        </Col>
        <Col span="20">
          <Space size="large" direction="vertical">
            <Row gutter={[16, 16]}>
              {data.map(product => (
                <Col span="6">
                  <ProductItem product={product} />
                </Col>
              ))}
            </Row>
            <Row>
              {size >= 4 ? (
                <Button onClick={loadMore}>加载更多</Button>
              ) : (
                <Empty />
              )}
            </Row>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop
