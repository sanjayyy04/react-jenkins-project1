pipeline{
    agent any
    stages{
        stage('Clonning repo'){
            steps{
                echo 'Clonning repo.....'
               git branch: 'main', url: 'https://github.com/sanjayyy04/react-jenkins-project1.git'
            }
        }
        // stage('Docker Build and Push'){
        //     steps{
        //         echo 'Building and Pushing Docker Image...'
        //         sh 'docker build -t react-jenkins-project1-image .'
        //         sh 'docker tag react-jenkins-project1-image your-dockerhub-username/react-jenkins-project1-image:latest'
        //         sh 'docker push your-dockerhub-username/react-jenkins-project1-image:latest'
        //     }
        // }
    }
}