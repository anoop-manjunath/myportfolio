import React from 'react'; 
import { FaAws, FaDocker, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiAmazondynamodb,
  SiApachekafka,
  SiDjango,
  SiFastapi,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiRabbitmq,
  SiSymfony,
} from "react-icons/si";
import { TbApi, TbCloudComputing, TbTestPipe } from "react-icons/tb";

const Skills = ({skill}) => {
    const icon = {
        "PHP": <FaPhp/>,
        "Node.js": <SiNodedotjs/>,
        Laravel: <SiLaravel/>,
        Symfony: <SiSymfony/>,
        FastAPI: <SiFastapi/>,
        Django: <SiDjango/>,
        MySQL: <SiMysql/>,
        MongoDB: <SiMongodb/>,
        DynamoDB: <SiAmazondynamodb/>,
        AWS: <FaAws/>,
        Docker: <FaDocker/>,
        Kafka: <SiApachekafka/>,
        RabbitMQ: <SiRabbitmq/>,
        "Vue.js": <FaVuejs/>,
        React: <FaReact/>,
        "REST APIs": <TbApi/>,
        "System Design": <TbCloudComputing/>,
        TDD: <TbTestPipe/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      <span className='SkillIcon'>{icon[skill]}</span>
      <span className='SkillLabel'>{skill}</span>
    </div>
  )
}

export default Skills
