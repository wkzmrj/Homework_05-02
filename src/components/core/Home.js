import Layout from "./Layout";
import { Typography, Row, Col } from "antd";
import Search from "./Search";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_products } from "../../store/actions/products";

const { Title } = Typography;

function Home() {
  const dispatch = useDispatch();
  const { sold, createdAt } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(get_products({ sortBy: "sold", limit: 4, order: "desc" }));
    dispatch(get_products({ sortBy: "createdAt", limit: 4, order: "desc" }));
  }, [dispatch]);

  return (
    <Layout title="拉勾严选首页" subTitle="尽情享受吧">
      <Search />
      <Title level={5} style={{ marginTop: 10 }}>
        最新上架
      </Title>
      <Row gutter={[16, 16]}>
        {createdAt.map((product) => (
          <Col key={product._id} span="6">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
      <Title level={5} style={{ marginTop: 10 }}>
        最受欢迎
      </Title>
      <Row gutter={[16, 16]}>
        {sold.map((product) => (
          <Col key={product._id} span="6">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default Home;
