# 🎺 AWS-FASTAPI-TODO-APP 🎺

Advanced TODO App: A Fullstack AWS-Deployed Solution with Decoupled Architecture and Multi-User Capabilities

## Video Recording 🎥

- [YouTube Recording: Advanced APIs on AWS with FastAPI](https://youtu.be/j7REV2ZO_Ec)

## Event Pictures 💥

Here are some cool images when hosting the live event for the [AWS User Group Medellin](https://www.meetup.com/aws-medellin/):

<img src="assets/photo_01_presentation.png" width=50%><img src="assets/photo_02_presentation.png" width=50%>
<br>
<img src="assets/photo_03_application.png" width=50%><img src="assets/photo_04_application.png" width=50%>
<br>

## Overview 🔮

- Backend Source Code with [AWS Lambda Functions](https://aws.amazon.com/lambda/) built with [Python Runtime](https://www.python.org).
- Backend API Framework with [FastAPI](https://fastapi.tiangolo.com).
- [DynamoDB](https://aws.amazon.com/dynamodb/) used as the database (NoSQL) approach with [Single Table Design](https://aws.amazon.com/blogs/compute/creating-a-single-table-design-with-amazon-dynamodb/).
- Frontend Source Code with [React + Vite](https://vitejs.dev).
- Frontend deployed as a static website on an [S3 Bucket](https://aws.amazon.com/s3/).
- Authentication and Authorization with multiple options:
  - API Keys.
  - Cognito User Pool.
- Infrastructure as Code with [AWS CDK-Python](https://aws.amazon.com/cdk/) or [Terraform](https://www.terraform.io)
- Tests with [PyTest Framework](https://docs.pytest.org/)
- Dependencies and Environments managed with [Python Poetry](https://python-poetry.org)

<img src="assets/aws_fastapi_todo_app.png" width=90%> <br>

This project was created to show how to easily deploy a Fullstack production-grade application on AWS by:

- Backend: leveraging one of the fastest Python frameworks in the market, FastAPI, while still gaining the power or AWS serverless tools, such as API-Gateway, Lambda Functions, DynamoDB, Cognito and more!
- Frontend: using S3 Bucket hosting to enable an static-website user interface on top of React. (Note: for production grade UIs, a DNS+CloudFront+ACM is recommended to be added).

The information of this repository is based on different public online resources, so feel free to use it as a guide for your future projects!. <br>

## How to run this project? 🎩

All projects are well commented (even over-commented sometimes for clarity). <br>

The required commands to deploy/destroy the solution can be found at:

- CDK-Deployment: [`cdk/important_commands.sh`](cdk/important_commands.sh)
- Terraform-Deployment: [`terraform/important_commands.sh`](terraform/important_commands.sh)

> Note: please update the commands based on your needs (account, region, etc...)

## Infrastructure as Code :cloud:

This project offers 2 options for managing the infrastructure:

- [AWS Cloud Development Kit](https://aws.amazon.com/cdk/)
- [Terraform](https://www.terraform.io)

Both are excellent IaC solutions, but depending on the use-case you can choose one or the other. <br>

## Dependencies ✋

The dependencies are explained in detail for each project, but the most important ones are Node, Python and the Infrastructure as Code solution (AWS-CDK or Terraform). <br>

### Software dependencies (based on project)

- [Visual Studio Code](https://code.visualstudio.com/) <br>
  Visual Studio Code is my main code editor for high-level programming. This is not absolutely necessary, but from my experience, it gives us a great performance and outstanding extensions to level-up our software development. <br>

- [NodeJs](https://nodejs.org/en/) <br>
  NodeJs is a JavaScript runtime built on Chrome's V8 JavaScript engine programming language. The community is amazing and lets us handle async functionalities in elegant ways. In this case, we need it for the main "CDK" library, that is built on top of NodeJS.<br>

- [Python](https://www.python.org/) <br>
  Python is an amazing dynamic programming language that allow us to work fast, with easy and powerful integration with different software solutions. We will use the Python CDK libraries.<br>

### Libraries and Package dependencies (depending on the scenario)

- [AWS CLI](https://aws.amazon.com/cli/) <br>
  The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services. We will use it for connecting to our AWS account from the terminal (authentication and authorization towards AWS). <br>

- [CDK CLI (Toolkit)](https://docs.aws.amazon.com/cdk/v2/guide/cli.html) <br>
  To work with the CDK, it is important to install the main toolkit as a NodeJs global dependency. Then, feel free to install the specific language AWS-CDK library (for example: [aws-cdk.core](https://pypi.org/project/aws-cdk.core/)). <br>

- [Terraform](https://www.terraform.io) <br>
  Terraform is one of the most important Infrastructure as Code solutions on the market. It is multi-cloud and has a big community for different cloud-based providers.

## Special thanks 🎁

- Thanks to all contributors of the great OpenSource projects that I am using. <br>

## Author 🎹

### Santiago Garcia Arango

<table border="1">
    <tr>
        <td>
            <p align="center">Curious DevOps Engineer passionate about advanced cloud-based solutions and deployments in AWS. I am convinced that today's greatest challenges must be solved by people that love what they do.</p>
        </td>
        <td>
            <p align="center"><img src="assets/SantiagoGarciaArango_AWS.png" width=80%></p>
        </td>
    </tr>
</table>

## LICENSE

Copyright 2024 Santiago Garcia Arango.
