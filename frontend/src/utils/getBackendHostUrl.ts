function getBackendHostUrl(): string {
  let hostUrl;
  let executionContext;

  process.env.NEXT_PUBLIC_EXE_CTX ? (executionContext = process.env.NEXT_PUBLIC_EXE_CTX) : null;

  if (executionContext === 'local') {
    hostUrl = 'http://localhost:9000';
  }

  if (executionContext === 'docker') {
    hostUrl = 'http://backend:9000';
  }

  if (executionContext === 'minikube') {
    let minikubeIP;

    process.env.NEXT_PUBLIC_MINIKUBE_IP ? (minikubeIP = process.env.NEXT_PUBLIC_MINIKUBE_IP) : null;

    if (!minikubeIP) {
      throw new Error(
        'Cannot retrieve backend host URL, minikubeIP is missing: check env variable: NEXT_PUBLIC_MINIKUBE_IP',
      );
    }

    hostUrl = `http://${minikubeIP}/api`;
  }

  if (executionContext === 'production') {
    hostUrl = 'https://www.yunjaeoh.com/api';
  }

  return hostUrl;
}

export default getBackendHostUrl;
