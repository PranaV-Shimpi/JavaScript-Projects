const quizData = [
  {
    question:
      "Question #1	Topic 1    Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
    options: {
      a: "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key in the metadata of each instance.",
      b: "Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance.",
      c: "Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the compute.osAdminLogin role to the Google group corresponding to this team.",
      d: "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #2	Topic 1    You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
    options: {
      a: "0.0.0.0/0",
      b: "10.0.0.0/8",
      c: "172.16.0.0/12",
      d: "192.168.0.0/16",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #3	Topic 1    You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
    options: {
      a: "Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.",
      b: "Select Cloud SQL (MySQL). Select the create failover replicas option.",
      c: "Select Cloud Spanner. Set up your instance with 2 nodes.",
      d: "Select Cloud Spanner. Set up your instance as multi-regional.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #4	Topic 1    You want to configure auto healing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps. You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
    options: {
      a: "Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)",
      b: "Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.",
      c: "Create a managed instance group. Set the Autohealing health check to healthy (HTTP)",
      d: "Create a managed instance group. Verify that the autoscaling setting is on.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #5	Topic 1    You are using multiple configurations for gcloud. You want to review the confgured Kubernetes Engine cluster of an inactive configuration using the fewest possible steps. What should you do?",
    options: {
      a: "Use gcloud confg configurations describe to review the output.",
      b: "Use gcloud confg configurations activate and gcloud confg list to review the output.",
      c: "Use kubectl confg get-contexts to review the output.",
      d: "Use kubectl confg use-context and kubectl confg view to review the output.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #6	Topic 1    Your company uses Cloud Storage to store application backup fles for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?",
    options: {
      a: "Multi-Regional Storage",
      b: "Regional Storage",
      c: "Nearline Storage",
      d: "Coldline Storage",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #7	Topic 1    Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
    options: {
      a: "Contact cloud-billing@google.com with your bank account details and request a corporate billing account for your company.",
      b: "Create a ticket with Google Support and wait for their call to share your credit card details over the phone.",
      c: "In the Google Platform Console, go to the Resource Manage and move all projects to the root Organizarion.",
      d: "In the Google Cloud Platform Console, create a new billing account and set up a payment method.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #8	Topic 1    You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
    options: {
      a: "Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.",
      b: "Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.",
      c: "Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.",
      d: "Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #9	Topic 1    You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?",
    options: {
      a: "Manual Scaling with 3 instances.",
      b: "Basic Scaling with min_instances set to 3.",
      c: "Basic Scaling with max_instances set to 3.",
      d: "Automatic Scaling with min_idle_instances set to 3.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #10	Topic 1    You have a development project with appropriate IAM roles Defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?",
    options: {
      a: "Use gcloud iam roles copy and specify the production project as the destination project.",
      b: "Use gcloud iam roles copy and specify your organization as the destination organization.",
      c: "In the Google Cloud Platform Console, use the 'create role from role' functionality.",
      d: "In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #11	Topic 1    You need a dynamic way of provisioning VMs on Compute Engine. The exact specifcations will be in a dedicated configuration fle. You want to follow Google's recommended practices. Which method should you use?",
    options: {
      a: "Deployment Manager",
      b: "Cloud Composer",
      c: "Managed Instance Group",
      d: "Unmanaged Instance Group",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #12	Topic 1    You have a Dockerfle that you need to deploy on Kubernetes Engine. What should you do?",
    options: {
      a: "Use kubectl app deploy <dockerflename>.",
      b: "Use gcloud app deploy <dockerflename>.",
      c: "Create a docker image from the Dockerfle and upload it to Container Registry. Create a Deployment YAML fle to point to that image. Use kubectl to create the deployment with that fle.",
      d: "Create a docker image from the Dockerfle and upload it to Cloud Storage. Create a Deployment YAML fle to point to that image. Use kubectl to create the deployment with that fle.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #13	Topic 1    Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
    options: {
      a: "Download and deploy the Jenkins Java WAR to App Engine Standard.",
      b: "Create a new Compute Engine instance and install Jenkins through the command line interface.",
      c: "Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.",
      d: "Use GCP Marketplace to launch the Jenkins solution.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #14	Topic 1    You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
    options: {
      a: "gcloud deployment-manager deployments create --confg <deployment-confg-path>",
      b: "gcloud deployment-manager deployments update --confg <deployment-confg-path>",
      c: "gcloud deployment-manager resources create --confg <deployment-confg-path>",
      d: "gcloud deployment-manager resources update --confg <deployment-confg-path>",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #15	Topic 1    You need to run an important query in BigQuery but expect it to return a lot of records. You want to fnd out how much it will cost to run the query. You are using on-demand pricing. What should you do?",
    options: {
      a: "Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.",
      b: "Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.",
      c: "Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using the Pricing Calculator.",
      d: "Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #16	Topic 1    You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on underlying infrastructure CPU usage. Your organizational policies require you to use virtual machines directly. You need to ensure that the application scaling is operationally efficient and completed as quickly as possible. What should you do?",
    options: {
      a: "Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application.",
      b: "Create an instance template, and use the template in a managed instance group with autoscaling configured.",
      c: "Create an instance template, and use the template in a managed instance group that scales up and down based on the time of day.",
      d: "Use a set of third-party tools to build automation around scaling the application up and down, based on Stack driver CPU usage monitoring.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #17	Topic 1    You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?",
    options: {
      a: "Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.",
      b: "Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.",
      c: "Export your transactions to a local fle, and perform analysis with a desktop tool.",
      d: "Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #18	Topic 1    You need to set up a policy so that videos stored in a specifc Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?",
    options: {
      a: "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days (365 90 )",
      b: "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.",
      c: "Use gsutil rewrite and set the Delete action to 275 days (365-90).",
      d: "Use gsutil rewrite and set the Delete action to 365 days.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #19	Topic 1    You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
    options: {
      a: "When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.",
      b: "Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service- account.",
      c: "Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine- service-account.",
      d: "Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service- account.json.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #20	Topic 1    You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?",
    options: {
      a: "Install a RDP client on your desktop. Verify that a frewall rule for port 3389 exists.",
      b: "Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.",
      c: "Set a Windows password in the GCP Console. Verify that a frewall rule for port 22 exists. Click the RDP button in the GCP Console and supply the credentials to log in.",
      d: "Set a Windows username and password in the GCP Console. Verify that a frewall rule for port 3389 exists. Click the RDP button in the GCP Console, and supply the credentials to log in.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #21	Topic 1    You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a new Compute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?",
    options: {
      a: "Create two configurations using gcloud confg configurations create [NAME]. Run gcloud confg configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.",
      b: "Create two configurations using gcloud confg configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances.",
      c: "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud confg list to start the Compute Engine instances.",
      d: "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #22	Topic 1    You signifcantly changed a complex Deployment Manager template and want to confrm that the dependencies of all Defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?",
    options: {
      a: "Use granular logging statements within a Deployment Manager template authored in Python.",
      b: "Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console.",
      c: "Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures.",
      d: "Execute the Deployment Manager template using the preview option in the same project, and observe the state of interdependent resources.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #23	Topic 1    You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4?",
    options: {
      a: "Cloud Pub/Sub, Cloud Datafow, Cloud Datastore, BigQuery",
      b: "Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery",
      c: "Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable",
      d: "Cloud Pub/Sub, Cloud Datafow, Cloud Bigtable, BigQuery",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #24	Topic 1    You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
    options: {
      a: "Use gcloud to create the new project, and then deploy your application to the new project.",
      b: "Use gcloud to create the new project and to copy the deployed application to the new project.",
      c: "Create a Deployment Manager configuration fle that copies the current App Engine deployment into a new project.",
      d: "Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #25	Topic 1    You need to confgure IAM access audit logging in BigQuery for external auditors. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' preDefined IAM roles.",
      b: "Add the auditors group to two new custom IAM roles.",
      c: "Add the auditor user accounts to the 'logging.viewer' and 'bigQuery.dataViewer' preDefined IAM roles.",
      d: "Add the auditor user accounts to two new custom IAM roles.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #26	Topic 1    You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You  want to follow  Google-recommended practices. What should you do?",
    options: {
      a: "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/devstorage.write_only'.",
      b: "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/cloud-platform'.",
      c: "Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket.",
      d: "Create a service account and add it to the IAM role 'storage.objectAdmin' for that bucket.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #27	Topic 1    You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. You need to verify the addition of metadata labels and which fles have been viewed from those buckets. What should you do?",
    options: {
      a: "Using the GCP Console, flter the Activity log to view the information.",
      b: "Using the GCP Console, flter the Stackdriver log to view the information.",
      c: "View the bucket in the Storage section of the GCP Console.",
      d: "Create a trace in Stackdriver to view the information.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #28	Topic 1    You are the project owner of a GCP project and want to delegate control to colleagues to manage buckets and fles in Cloud Storage. You want to follow Google- recommended practices. Which IAM roles should you grant your colleagues?",
    options: {
      a: "Project Editor",
      b: "Storage Admin",
      c: "Storage Object Admin",
      d: "Storage Object Creator",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #29	Topic 1    You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account to which you can grant specifc user-based access privileges. You want to use the most secure method that requires the fewest steps. What should you do?",
    options: {
      a: "Create a signed URL with a four-hour expiration and share the URL with the company.",
      b: "Set object access to 'public' and use object lifecycle management to remove the object after four hours.",
      c: "Confgure the storage bucket as a static website and furnish the object's URL to the company. Delete the object from the storage bucket after four hours.",
      d: "Create a new Cloud Storage bucket specifcally for the external company to access. Copy the object to that bucket. Delete the bucket after four hours have passed.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #30	Topic 1    You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
    options: {
      a: "Deploy the monitoring pod in a StatefulSet object.",
      b: "Deploy the monitoring pod in a DaemonSet object.",
      c: "Reference the monitoring pod in a Deployment object.",
      d: "Reference the monitoring pod in a cluster initializer at the GKE cluster creation time.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #31	Topic 1    You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
    options: {
      a: "Enable the Cloud Pub/Sub API in the API Library on the GCP Console.",
      b: "Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.",
      c: "Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs used by the application being deployed.",
      d: "Grant the App Engine Default service account the role of Cloud Pub/Sub Admin. Have your application enable the API on the frst connection to Cloud Pub/ Sub.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #32	Topic 1    You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same Stackdriver Monitoring dashboard. What should you do?",
    options: {
      a: "Use Shared VPC to connect all projects, and link Stackdriver to one of the projects.",
      b: "For each project, create a Stackdriver account. In each project, create a service account for that project and grant it the role of Stackdriver Account Editor in all other projects.",
      c: "Confgure a single Stackdriver account, and link all projects to the same account.",
      d: "Confgure a single Stackdriver account for one of the projects. In Stackdriver, create a Group and add the other project names as criteria for that Group.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #33	Topic 1    You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you confgure the instance group?",
    options: {
      a: "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
      b: "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
      c: "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.",
      d: "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #34	Topic 1    You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
    options: {
      a: "Run gcloud iam roles list. Review the output section.",
      b: "Run gcloud iam service-accounts list. Review the output section.",
      c: "Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.",
      d: "Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #35	Topic 1    You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
    options: {
      a: "Verify that you are Project Billing Manager for the GCP project. Update the existing project to link it to the existing billing account.",
      b: "Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.",
      c: "Verify that you are Billing Administrator for the billing account. Create a new project and link the new project to the existing billing account.",
      d: "Verify that you are Billing Administrator for the billing account. Update the existing project to link it to the existing billing account.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #36	Topic 1    You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
    options: {
      a: "Download the private key from the service account, and add it to each VMs custom metadata.",
      b: "Download the private key from the service account, and add the private key to each VM's SSH keys.",
      c: "Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.",
      d: "When creating the VMs, set the service account's API scope for Compute Engine to read/write.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #37	Topic 1    You created a Google Cloud Platform project with an App Engine application inside the project. You initially confgured the application to be served from the us- central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
    options: {
      a: "Change the default region property setting in the existing GCP project to asia-northeast1.",
      b: "Change the region property setting in the existing App Engine application from us-central to asia-northeast1.",
      c: "Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.",
      d: "Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #38	Topic 1    You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
    options: {
      a: "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role.",
      b: "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role.",
      c: "Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to the role.",
      d: "Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to a new group. Add the group to the role.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #39	Topic 1    You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
    options: {
      a: "Enable the Node Auto-Repair feature for your GKE cluster.",
      b: "Enable the Node Auto-Upgrades feature for your GKE cluster.",
      c: "Select the latest available cluster version for your GKE cluster.",
      d: "Select Container-Optimized OS (cos) as a node image for your GKE cluster.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #40	Topic 1    You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Confgure an HTTP(S) load balancer.",
      b: "Confgure an internal TCP load balancer.",
      c: "Confgure an external SSL proxy load balancer.",
      d: "Confgure an external TCP proxy load balancer.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #41	Topic 1    You have 32 GB of data in a single fle that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the fle rapidly. How should you upload the fle?",
    options: {
      a: "Use the GCP Console to transfer the fle instead of gsutil.",
      b: "Enable parallel composite uploads using gsutil on the fle transfer.",
      c: "Decrease the TCP window size on the machine initiating the transfer.",
      d: "Change the storage class of the bucket from Nearline to Multi-Regional.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #42	Topic 1    You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML fle specifed below:                               You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Store the database password inside the Docker image of the container, not in the YAML fle.",
      b: "Store the database password inside a Secret object. Modify the YAML fle to populate the DB_PASSWORD environment variable from the Secret.",
      c: "Store the database password inside a ConfgMap object. Modify the YAML fle to populate the DB_PASSWORD environment variable from the ConfgMap.",
      d: "Store the database password in a fle inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #43	Topic 1    You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The autoscaling policy is confgured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of fve VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds.  The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user trafc. You want to properly maintain instance group sizes when autoscaling. What should you do?",
    options: {
      a: "Set the maximum number of instances to 1.",
      b: "Decrease the maximum number of instances to 3.",
      c: "Use a TCP health check instead of an HTTP health check.",
      d: "Increase the initial delay of the HTTP health check to 200 seconds.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #44	Topic 1    You need to select and confgure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
    options: {
      a: "Select Google Kubernetes Engine. Use a single-node cluster with a small instance type.",
      b: "Select Google Kubernetes Engine. Use a three-node cluster with micro instance types.",
      c: "Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.",
      d: "Select Compute Engine. Use VM instance types that support micro bursting.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #45	Topic 1    You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
    options: {
      a: "Run gcloud app restore.",
      b: "On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.",
      c: "On the App Engine Versions page of the GCP Console, route 100% of the trafc to the previous version.",
      d: "Deploy the original version as a separate application. Then go to App Engine settings and split trafc between applications so that the original version serves 100% of the requests.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #46	Topic 1    You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to fnd out why this happened and where the application deployed. What should you do?",
    options: {
      a: "Check the app.yaml fle for your application and check project settings.",
      b: "Check the web-application.xml fle for your application and check project settings.",
      c: "Go to Deployment Manager and review settings for deployment of applications.",
      d: "Go to Cloud Shell and run gcloud confg list to review the Google Cloud configuration used for deployment.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #47	Topic 1    You want to confgure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?",
    options: {
      a: "Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group.",
      b: "Create an instance template for the instances. Set 'Automatic Restart' to off. Set 'On-host maintenance' to Terminate VM instances. Add the instance template to an instance group.",
      c: "Create an instance group for the instances. Set the 'Autohealing' health check to healthy (HTTP).",
      d: "Create an instance group for the instance. Verify that the 'Advanced creation options' setting for 'do not retry machine creation' is set to off.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #48	Topic 1    You host a static website on Cloud Storage. Recently, you began to include links to PDF fles on this site. Currently, when users click on the links to these PDF fles, their browsers prompt them to save the fle onto their local system. Instead, you want the clicked PDF fles to be displayed within the browser window directly, without prompting the user to save the fle locally. What should you do?",
    options: {
      a: "Enable Cloud CDN on the website frontend.",
      b: "Enable 'Share publicly' on the PDF fle objects.",
      c: "Set Content-Type metadata to application/pdf on the PDF fle objects.",
      d: "Add a label to the storage bucket with a key of Content-Type and value of application/pdf.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #49	Topic 1    You have a virtual machine that is currently confgured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?",
    options: {
      a: "Rely on live migration to move the workload to a machine with more memory.",
      b: "Use gcloud to add metadata to the VM. Set the key to required-memory-size and the value to 8 GB.",
      c: "Stop the VM, change the machine type to n1-standard-8, and start the VM.",
      d: "Stop the VM, increase the memory to 8 GB, and start the VM.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #50	Topic 1    You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All the VMs must be able to reach each other over Internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?",
    options: {
      a: "Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.",
      b: "Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range.",
      c: "Create 2 custom VPCs, each with a single subnet. Create each subnet in a different region and with a different CIDR range.",
      d: "Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region and with the same CIDR range.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #51	Topic 1    You need to create an autoscaling managed instance group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?",
    options: {
      a: "Create a health check on port 443 and use that when creating the Managed Instance Group.",
      b: "Select Multi-Zone instead of Single-Zone when creating the Managed Instance Group.",
      c: "In the Instance Template, add the label 'health-check'.",
      d: "In the Instance Template, add a startup script that sends a heartbeat to the metadata server.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #52	Topic 1    Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members. You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery jobUser role to the group.",
      b: "1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery dataViewer user role to the group.",
      c: "1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.",
      d: "1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery dataViewer user role to the group.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #53	Topic 1 Your company has a 3-tier solution running on Compute Engine. The configuration of the current infrastructure is shown below. Each tier has a service account that is associated with all instances within it. You need to enable communication on TCP port 8080 between tiers as follows: Instances in tier #1 must communicate with tier #2.  Instances in tier #2 must communicate with tier #3. What should you do?  ",
    options: {
      a: " 1. Create an ingress firewall rule with the following settings:  ¢ Targets: all instances  ¢ Source filter: IP ranges (with the range set to 10.0.2.0/24)  ¢ Protocols: allow all 2. Create an ingress firewall rule with the following settings:  ¢ Targets: all instances  ¢ Source filter: IP ranges (with the range set to 10.0.1.0/24)  ¢ Protocols: allow all",
      b: "1. Create an ingress firewall rule with the following settings:  ¢ Targets: all instances with tier #2 service account  ¢ Source filter: all instances with tier #1 service account  ¢ Protocols: allow TCP:8080 2. Create an ingress firewall rule with the following settings:  ¢ Targets: all instances with tier #3 service account  ¢ Source filter: all instances with tier #2 service account  ¢ Protocols: allow TCP: 8080",
      c: "1. Create an ingress firewall rule with the following settings:  ¢ Targets: all instances with tier #2 service account  ¢ Source filter: all instances with tier #1 service account  ¢ Protocols: allow all 2. Create an ingress firewall rule with the following settings:  ¢ Targets: all instances with tier #3 service account  ¢ Source filter: all instances with tier #2 service account  ¢ Protocols: allow all",
      d: " 1. Create an egress firewall rule with the following settings:  ¢ Targets: all instances  ¢ Source filter: IP ranges (with the range set to 10.0.2.0/24)  ¢ Protocols: allow TCP: 8080 2. Create an egress firewall rule with the following settings:  ¢ Targets: all instances  ¢ Source filter: IP ranges (with the range set to 10.0.1.0/24)  ¢ Protocols: allow TCP: 8080",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #54	Topic 1    You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the frst instance's private address as the endpoint.",
      b: "1. Create a VPC and a subnetwork in europe-west1. 2. Expose the application with an internal load balancer. 3. Create the new instance in the new subnetwork and use the load balancer's address as the endpoint.",
      c: "1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the frst instance's private address as the endpoint.",
      d: "1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the frst instance's private address as the endpoint.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #55	Topic 1    Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
    options: {
      a: "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.",
      b: "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.",
      c: "1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Logging.",
      d: "1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Monitoring.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #56	Topic 1    You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?",
    options: {
      a: "Deploy the new version in the same application and use the --migrate option.",
      b: "Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.",
      c: "Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.",
      d: "Create a new App Engine application in the same project. Deploy the new version in that application. Confgure your network load balancer to send 1% of the trafc to that new application.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #57	Topic 1    You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web trafc. You want to ensure that the available capacity does not decrease during the deployment. What should you do?     When all instances in the new managed instance group are healthy, delete the old managed instance group.",
    options: {
      a: "Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.",
      b: "Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.",
      c: "Create a new managed instance group with an updated instance template. Add the group to the backend service for the load balancer.",
      d: "Create a new instance template with the new application version. Update the existing managed instance group with the new instance template. Delete the instances in the managed instance group to allow the managed instance group to recreate the instance using the new instance template.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #58	Topic 1    You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
    options: {
      a: "Cloud SQL",
      b: "Cloud Spanner",
      c: "Cloud Firestore",
      d: "Cloud Datastore",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #59	Topic 1    You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the fnance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?",
    options: {
      a: "Assign the fnance team only the Billing Account User role on the billing account.",
      b: "Assign the engineering team only the Billing Account User role on the billing account.",
      c: "Assign the fnance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.",
      d: "Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #60	Topic 1    You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the frst VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?",
    options: {
      a: "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Set the service's externalTrafcPolicy to Cluster. 3. Confgure the Compute Engine instance to use the address of the load balancer that has been created.",
      b: "1. In GKE, create a Service of type NodePort that uses the application's Pods as backend. 2. Create a Compute Engine instance called proxy with 2 network interfaces, one in each VPC. 3. Use iptables on this instance to forward trafc from gce-network to the GKE nodes. 4. Confgure the Compute Engine instance to use the address of proxy in gce-network as endpoint.",
      c: "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Confgure the Compute Engine instance to use the address of the load balancer that has been created.",
      d: "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add a Cloud Armor Security Policy to the load balancer that whitelists the internal IPs of the MIG's instances. 3. Confgure the Compute Engine instance to use the address of the load balancer that has been created.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #61	Topic 1    Your organization is a fnancial company that needs to store audit log fles for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log fle retention. What should you do?",
    options: {
      a: "Create an export to the sink that saves logs from Cloud Audit to BigQuery.",
      b: "Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.",
      c: "Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.",
      d: "Export these logs to Cloud Pub/Sub and write a Cloud Datafow pipeline to store logs to Cloud SQL.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #62	Topic 1    You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specifc reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?",
    options: {
      a: "Create a Cloud Memorystore for Redis instance with 32-GB capacity.",
      b: "Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.",
      c: "Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.",
      d: "Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 GB.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #63	Topic 1    You are hosting an application on bare-metal servers in your own data center. The application needs access to Cloud Storage. However, security policies prevent the servers hosting the application from having public IP addresses or access to the internet. You want to follow Google-recommended practices to provide the application with access to Cloud Storage. What should you do?",
    options: {
      a: "1. Use nslookup to get the IP address for storage.googleapis.com. 2. Negotiate with the security team to be able to give a public IP address to the servers. 3. Only allow egress trafc from those servers to the IP addresses for storage.googleapis.com.",
      b: "1. Using Cloud VPN, create a VPN tunnel to a Virtual Private Cloud (VPC) in Google Cloud. 2. In this VPC, create a Compute Engine instance and install the Squid proxy server on this instance. 3. Confgure your servers to use that instance as a proxy to access Cloud Storage.",
      c: "1. Use Migrate for Compute Engine (formerly known as Velostrata) to migrate those servers to Compute Engine. 2. Create an internal load balancer (ILB) that uses storage.googleapis.com as backend. 3. Confgure your new instances to use this ILB as proxy.",
      d: "1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, confgure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #64	Topic 1    You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. You want to follow Google-recommended practices. What should you do?    Make your application pull messages from that subscription.    In the same Google Kubernetes Engine cluster as your application, deploy a container that takes the messages and sends them to your application.",
    options: {
      a: "1. Create a Cloud Function that uses a Cloud Pub/Sub trigger on that topic. 2. Call your application on Cloud Run from the Cloud Function for every message.",
      b: "1. Grant the Pub/Sub Subscriber role to the service account used by Cloud Run. 2. Create a Cloud Pub/Sub subscription for that topic. 3.",
      c: "1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.",
      d: "1. Deploy your application on Cloud Run on GKE with the connectivity set to Internal. 2. Create a Cloud Pub/Sub subscription for that topic.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #65	Topic 1    You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?",
    options: {
      a: "Deploy the container on Cloud Run.",
      b: "Deploy the container on Cloud Run on GKE.",
      c: "Deploy the container on App Engine Flexible.",
      d: "Deploy the container on GKE with cluster autoscaling and horizontal pod autoscaling enabled.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #66	Topic 1    Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?",
    options: {
      a: "Link the acquired company's projects to your company's billing account.",
      b: "Confgure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.",
      c: "Migrate the acquired company's projects into your company's GCP organization. Link the migrated projects to your company's billing account.",
      d: "Create a new GCP organization and a new billing account. Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #67	Topic 1    You built an application on Google Cloud that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data. You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Add the support team group to the roles/monitoring.viewer role",
      b: "Add the support team group to the roles/spanner.databaseUser role.",
      c: "Add the support team group to the roles/spanner.databaseReader role.",
      d: "Add the support team group to the roles/stackdriver.accounts.viewer role.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #68	Topic 1    For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Cloud Logging agent on all the instances. You want to minimize cost. What should you do?",
    options: {
      a: "1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances. 2. Update your instances' metadata to add the following value: logs-destination: bq://platform-logs.",
      b: "1. In Cloud Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink. 2. Create a Cloud Function that is triggered by messages in the logs topic. 3. Confgure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.",
      c: "1. In Cloud Logging, create a flter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.",
      d: "1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset. 2. Confgure this Cloud Function to create a BigQuery Job that executes this query: INSERT INTO dataset.platform-logs (timestamp, log) SELECT timestamp, log FROM compute.logs WHERE timestamp > DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) 3. Use Cloud Scheduler to trigger this Cloud Function once a day.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #69	Topic 1    You are using Deployment Manager to create a Google Kubernetes Engine cluster. Using the same Deployment Manager deployment, you also want to create a DaemonSet in the kube-system namespace of the cluster. You want a solution that uses the fewest possible services. What should you do?",
    options: {
      a: "Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
      b: "Use the Deployment Manager Runtime Confgurator to create a new Confg resource that contains the DaemonSet defnition.",
      c: "With Deployment Manager, create a Compute Engine instance with a startup script that uses kubectl to create the DaemonSet.",
      d: "In the cluster's defnition in Deployment Manager, add a metadata that has kube-system as key and the DaemonSet manifest as value.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #70	Topic 1    You are building an application that will run in your data center. The application will use Google Cloud Platform (GCP) services like AutoML. You created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises environment. What should you do?",
    options: {
      a: "Use service account credentials in your on-premises application.",
      b: "Use gcloud to create a key fle for the service account that has appropriate permissions.",
      c: "Set up direct interconnect between your data center and Google Cloud Platform to enable authentication for your on-premises applications.",
      d: "Go to the IAM & admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #71	Topic 1    You are using Container Registry to centrally store your company's container images in a separate project. In another project, you want to create a Google Kubernetes Engine (GKE) cluster. You want to ensure that Kubernetes can download images from Container Registry. What should you do?",
    options: {
      a: "In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.",
      b: "When you create the GKE cluster, choose the Allow full access to all Cloud APIs option under 'Access scopes'.",
      c: "Create a service account, and give it access to Cloud Storage. Create a P12 key for this service account and use it as an imagePullSecrets in Kubernetes.",
      d: "Confgure the ACLs on each image in Cloud Storage to give read-only access to the default Compute Engine service account.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #72	Topic 1    You deployed a new application inside your Google Kubernetes Engine cluster using the YAML fle specifed below.                                 You check the status of the deployed pods and notice that one of them is still in PENDING status:          You want to fnd out why the pod is stuck in pending status. What should you do?",
    options: {
      a: "Review details of the myapp-service Service object and check for error messages.",
      b: "Review details of the myapp-deployment Deployment object and check for error messages.",
      c: "Review details of myapp-deployment-58ddbbb995-lp86m Pod and check for warning messages.",
      d: "View logs of the container in myapp-deployment-58ddbbb995-lp86m pod and check for warning messages.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #73	Topic 1    You are setting up a Windows VM on Compute Engine and want to make sure you can log in to the VM via RDP. What should you do?",
    options: {
      a: "After the VM has been created, use your Google Account credentials to log in into the VM.",
      b: "After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.",
      c: "When creating the VM, add metadata to the instance using 'windows-password' as the key and a password as the value.",
      d: "After the VM has been created, download the JSON private key for the default Compute Engine service account. Use the credentials in the JSON fle to log in to the VM.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #74	Topic 1    You want to confgure an SSH connection to a single Compute Engine instance for users in the dev1 group. This instance is the only resource in this particular Google Cloud Platform project that the dev1 users should be able to connect to. What should you do?",
    options: {
      a: "Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.",
      b: "Set metadata to enable-oslogin=true for the instance. Set the service account to no service account for that instance. Direct them to use the Cloud Shell to ssh to that instance.",
      c: "Enable block project wide keys for the instance. Generate an SSH key for each user in the dev1 group. Distribute the keys to dev1 users and direct them to use their third-party tools to connect.",
      d: "Enable block project wide keys for the instance. Generate an SSH key and associate the key with that instance. Distribute the key to dev1 users and direct them to use their third-party tools to connect.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #75	Topic 1    You need to produce a list of the enabled Google Cloud Platform APIs for a GCP project using the gcloud command line in the Cloud Shell. The project name is my-project. What should you do?",
    options: {
      a: "Run gcloud projects list to get the project ID, and then run gcloud services list --project <project ID>.",
      b: "Run gcloud init to set the current project to my-project, and then run gcloud services list --available.",
      c: "Run gcloud info to view the account value, and then run gcloud services list --account <Account>.",
      d: "Run gcloud projects describe <project ID> to verify the project value, and then run gcloud services list --available.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #76	Topic 1    You are building a new version of an application hosted in an App Engine environment. You want to test the new version with 1% of users before you completely switch your application over to the new version. What should you do?",
    options: {
      a: "Deploy a new version of your application in Google Kubernetes Engine instead of App Engine and then use GCP Console to split trafc.",
      b: "Deploy a new version of your application in a Compute Engine instance instead of App Engine and then use GCP Console to split trafc.",
      c: "Deploy a new version as a separate app in App Engine. Then confgure App Engine using GCP Console to split trafc between the two apps.",
      d: "Deploy a new version of your application in App Engine. Then go to App Engine settings in GCP Console and split trafc between the current version and newly deployed versions accordingly.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #77	Topic 1    You need to provide a cost estimate for a Kubernetes cluster using the GCP pricing calculator for Kubernetes. Your workload requires high IOPs, and you will also be using disk snapshots. You start by entering the number of nodes, average hours, and average days. What should you do next?",
    options: {
      a: "Fill in local SSD. Fill in persistent disk storage and snapshot storage.",
      b: "Fill in local SSD. Add estimated cost for cluster management.",
      c: "Select Add GPUs. Fill in persistent disk storage and snapshot storage.",
      d: "Select Add GPUs. Add estimated cost for cluster management.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #78	Topic 1    You are using Google Kubernetes Engine with autoscaling enabled to host a new application. You want to expose this new application to the public, using HTTPS on a public IP address. What should you do?",
    options: {
      a: "Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer.",
      b: "Create a Kubernetes Service of type ClusterIP for your application. Confgure the public DNS name of your application using the IP of this Service.",
      c: "Create a Kubernetes Service of type NodePort to expose the application on port 443 of each node of the Kubernetes cluster. Confgure the public DNS name of your application with the IP of every node of the cluster to achieve load-balancing.",
      d: "Create a HAProxy pod in the cluster to load-balance the trafc to all the pods of the application. Forward the public trafc to HAProxy with an iptable rule. Confgure the DNS name of your application using the public IP of the node HAProxy is running on.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #79	Topic 1    You need to enable trafc between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of Compute Engine instances is running in its own VPC. What should you do?",
    options: {
      a: "Verify that both projects are in a GCP Organization. Create a new VPC and add all instances.",
      b: "Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.",
      c: "Verify that you are the Project Administrator of both projects. Create two new VPCs and add all instances.",
      d: "Verify that you are the Project Administrator of both projects. Create a new VPC and add all instances.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #80	Topic 1    You want to add a new auditor to a Google Cloud Platform project. The auditor should be allowed to read, but not modify, all project items. How should you confgure the auditor's permissions?",
    options: {
      a: "Create a custom role with view-only project permissions. Add the user's account to the custom role.",
      b: "Create a custom role with view-only service permissions. Add the user's account to the custom role.",
      c: "Select the built-in IAM project Viewer role. Add the user's account to this role.",
      d: "Select the built-in IAM service Viewer role. Add the user's account to this role.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #81	Topic 1    You are operating a Google Kubernetes Engine (GKE) cluster for your company where different teams can run non-production workloads. Your Machine Learning (ML) team needs access to Nvidia Tesla P100 GPUs to train their models. You want to minimize effort and cost. What should you do?",
    options: {
      a: "Ask your ML team to add the accelerator: gpu annotation to their pod specifcation.",
      b: "Recreate all the nodes of the GKE cluster to enable GPUs on all of them.",
      c: "Create your own Kubernetes cluster on top of Compute Engine with nodes that have GPUs. Dedicate this cluster to your ML team.",
      d: "Add a new, GPU-enabled, node pool to the GKE cluster. Ask your ML team to add the cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector to their pod specifcation.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #82	Topic 1    Your VMs are running in a subnet that has a subnet mask of 255.255.255.240. The current subnet has no more free IP addresses and you require an additional 10 IP addresses for new VMs. The existing and new VMs should all be able to reach each other without additional routes. What should you do?",
    options: {
      a: "Use gcloud to expand the IP range of the current subnet.",
      b: "Delete the subnet, and recreate it using a wider range of IP addresses.",
      c: "Create a new project. Use Shared VPC to share the current network with the new project.",
      d: "Create a new subnet with the same starting IP but a wider range to overwrite the current subnet.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #83	Topic 1    Your organization uses G Suite for communication and collaboration. All users in your organization have a G Suite account. You want to grant some G Suite users access to your Cloud Platform project. What should you do?",
    options: {
      a: "Enable Cloud Identity in the GCP Console for your domain.",
      b: "Grant them the required IAM roles using their G Suite email address.",
      c: "Create a CSV sheet with all users' email addresses. Use the gcloud command line tool to convert them into Google Cloud Platform accounts.",
      d: "In the G Suite console, add the users to a special group called cloud-console-users@yourdomain.com. Rely on the default behavior of the Cloud Platform to grant users access if they are members of this group.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #84	Topic 1    You have a Google Cloud Platform account with access to both production and development projects. You need to create an automated process to list all compute instances in development and production projects on a daily basis. What should you do?",
    options: {
      a: "Create two configurations using gcloud confg. Write a script that sets configurations as active, individually. For each configuration, use gcloud compute instances list to get a list of compute resources.",
      b: "Create two configurations using gsutil confg. Write a script that sets configurations as active, individually. For each configuration, use gsutil compute instances list to get a list of compute resources.",
      c: "Go to Cloud Shell and export this information to Cloud Storage on a daily basis.",
      d: "Go to GCP Console and export this information to Cloud SQL on a daily basis.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #85	Topic 1    You have a large 5-TB AVRO fle stored in a Cloud Storage bucket. Your analysts are profcient only in SQL and need access to the data stored in this fle. You want to fnd a cost-effective way to complete their request as soon as possible. What should you do?",
    options: {
      a: "Load data in Cloud Datastore and run a SQL query against it.",
      b: "Create a BigQuery table and load data in BigQuery. Run a SQL query on this table and drop this table after you complete your request.",
      c: "Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.",
      d: "Create a Hadoop cluster and copy the AVRO fle to NDFS by compressing it. Load the fle in a hive table and provide access to your analysts so that they can run SQL queries.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #86	Topic 1    You need to verify that a Google Cloud Platform service account was created at a particular time. What should you do?",
    options: {
      a: "Filter the Activity log to view the configuration category. Filter the Resource type to Service Account.",
      b: "Filter the Activity log to view the configuration category. Filter the Resource type to Google Project.",
      c: "Filter the Activity log to view the Data Access category. Filter the Resource type to Service Account.",
      d: "Filter the Activity log to view the Data Access category. Filter the Resource type to Google Project.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #87	Topic 1    You deployed an LDAP server on Compute Engine that is reachable via TLS through port 636 using UDP. You want to make sure it is reachable by clients over that port. What should you do?",
    options: {
      a: "Add the network tag allow-udp-636 to the VM instance running the LDAP server.",
      b: "Create a route called allow-udp-636 and set the next hop to be the VM instance running the LDAP server.",
      c: "Add a network tag of your choice to the instance. Create a frewall rule to allow ingress on UDP port 636 for that network tag.",
      d: "Add a network tag of your choice to the instance running the LDAP server. Create a frewall rule to allow egress on UDP port 636 for that network tag.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #88	Topic 1    You need to set a budget alert for use of Compute Engineer services on one of the three Google Cloud Platform projects that you manage. All three projects are linked to a single billing account. What should you do?",
    options: {
      a: "Verify that you are the project billing administrator. Select the associated billing account and create a budget and alert for the appropriate project.",
      b: "Verify that you are the project billing administrator. Select the associated billing account and create a budget and a custom alert.",
      c: "Verify that you are the project administrator. Select the associated billing account and create a budget for the appropriate project.",
      d: "Verify that you are project administrator. Select the associated billing account and create a budget and a custom alert.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #89	Topic 1    You are migrating a production-critical on-premises application that requires 96 vCPUs to perform its task. You want to make sure the application runs in a similar environment on GCP. What should you do?",
    options: {
      a: "When creating the VM, use machine type n1-standard-96.",
      b: "When creating the VM, use Intel Skylake as the CPU platform.",
      c: "Create the VM using Compute Engine default settings. Use gcloud to modify the running instance to have 96 vCPUs.",
      d: "Start the VM using Compute Engine default settings, and adjust as you go based on Rightsizing Recommendations.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #90	Topic 1    You want to confgure a solution for archiving data in a Cloud Storage bucket. The solution must be cost-effective. Data with multiple versions should be archived after 30 days. Previous versions are accessed once a month for reporting. This archive data is also occasionally updated at month-end. What should you do?",
    options: {
      a: "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Coldline Storage.",
      b: "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.",
      c: "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Coldline Storage.",
      d: "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Nearline Storage.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #91	Topic 1    Your company's infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on Google Cloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?",
    options: {
      a: "In Google Cloud, confgure the VPC as a host for Shared VPC.",
      b: "In Google Cloud, confgure the VPC for VPC Network Peering.",
      c: "Create bastion hosts both in your on-premises environment and on Google Cloud. Confgure both as proxy servers using their public IP addresses.",
      d: "Set up Cloud VPN between the infrastructure on-premises and Google Cloud.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #92	Topic 1    You want to select and confgure a solution for storing and archiving data on Google Cloud Platform. You need to support compliance objectives for data from one geographic location. This data is archived after 30 days and needs to be accessed annually. What should you do?",
    options: {
      a: "Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.",
      b: "Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
      c: "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
      d: "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #93	Topic 1    Your company uses BigQuery for data warehousing. Over time, many different business units in your company have created 1000+ datasets  across hundreds of projects. Your CIO wants you to examine all datasets to fnd tables that contain an employee_ssn column. You want to  minimize effort in performing this task.  What should you do?",
    options: {
      a: "Go to Data Catalog and search for employee_ssn in the search box.",
      b: "Write a shell script that uses the bq command line tool to loop through all the projects in your organization.",
      c: "Write a script that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to fnd the employee_ssn column.",
      d: "Write a Cloud Datafow job that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to fnd employee_ssn column.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #94	Topic 1    You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status: What is the most likely cause?",
    options: {
      a: "The pending Pod's resource requests are too large to ft on a single node of the cluster.",
      b: "Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.",
      c: "The node pool is confgured with a service account that does not have permission to pull the container image used by the pending Pod.",
      d: "The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verifcation of the Pods' status. It is currently being rescheduled on a new node.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #95	Topic 1    You want to fnd out when users were added to Cloud Spanner Identity Access Management (IAM) roles on your Google Cloud Platform (GCP) project. What should you do in the GCP Console?",
    options: {
      a: "Open the Cloud Spanner console to review configurations.",
      b: "Open the IAM & admin console to review IAM policies for Cloud Spanner roles.",
      c: "Go to the Stackdriver Monitoring console and review information for Cloud Spanner.",
      d: "Go to the Stackdriver Logging console, review admin activity logs, and flter them for Cloud Spanner IAM roles.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #96	Topic 1    Your company implemented BigQuery as an enterprise data warehouse. Users from multiple business units run queries on this data warehouse. However, you notice that query costs for BigQuery are very high, and you need to control costs. Which two methods should you use? (Choose two.)",
    options: {
      a: "Split the users from business units to multiple projects.",
      b: "Apply a user- or project-level custom query quota for BigQuery data warehouse.",
      c: "Create separate copies of your BigQuery data warehouse for each business unit.",
      d: "Split your BigQuery data warehouse into multiple data warehouses for each business unit.",
      e: "Change your BigQuery query model from on-demand to fat rate. Apply the appropriate number of slots to each Project.",
    },
    correct: ["b", "e"],
  },
  {
    question:
      "Question #97	Topic 1    You are building a product on top of Google Kubernetes Engine (GKE). You have a single GKE cluster. For each of your customers, a Pod is running in that cluster, and your customers can run arbitrary code inside their Pod. You want to maximize the isolation between your customers' Pods. What should you do?      cos_containerd to the specifcation of your customers' Pods.",
    options: {
      a: "Use Binary Authorization and whitelist only the container images used by your customers' Pods.",
      b: "Use the Container Analysis API to detect vulnerabilities in the containers used by your customers' Pods.",
      c: "Create a GKE node pool with a sandbox type confgured to gvisor. Add the parameter runtimeClassName: gvisor to the specifcation of your customers' Pods.",
      d: "Use the cos_containerd image for your GKE nodes. Add a nodeSelector with the value cloud.google.com/gke-os-distribution:",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #98	Topic 1    Your customer has implemented a solution that uses Cloud Spanner and notices some read latency-related performance issues on one table. This table is accessed only by their users using a primary key. The table schema is shown below.               You want to resolve the issue. What should you do?",
    options: {
      a: "Remove the profle_picture feld from the table.",
      b: "Add a secondary index on the person_id column.",
      c: "Change the primary key to not have monotonically increasing values.",
      d: "Create a secondary index using the following Data Defnition Language (DDL):",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #99	Topic 1    Your fnance team wants to view the billing report for your projects. You want to make sure that the fnance team does not get additional permissions to the project. What should you do?",
    options: {
      a: "Add the group for the fnance team to roles/billing user role.",
      b: "Add the group for the fnance team to roles/billing admin role.",
      c: "Add the group for the fnance team to roles/billing viewer role.",
      d: "Add the group for the fnance team to roles/billing project/Manager role.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #100	Topic 1    Your organization has strict requirements to control access to Google Cloud projects. You need to enable your Site Reliability Engineers (SREs) to approve requests from the Google Cloud support team when an SRE opens a support case. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Add your SREs to roles/iam.roleAdmin role.",
      b: "Add your SREs to roles/accessapproval.approver role.",
      c: "Add your SREs to a group and then add this group to roles/iam.roleAdmin.role.",
      d: "Add your SREs to a group and then add this group to roles/accessapproval.approver role.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #101	Topic 1    You need to host an application on a Compute Engine instance in a project shared with other teams. You want to prevent the other teams from accidentally causing downtime on that application. Which feature should you use?",
    options: {
      a: "Use a Shielded VM.",
      b: "Use a Preemptible VM.",
      c: "Use a sole-tenant node.",
      d: "Enable deletion protection on the instance.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #102	Topic 1    Your organization needs to grant users access to query datasets in BigQuery but prevent them from accidentally deleting the datasets. You want a solution that follows Google-recommended practices. What should you do?",
    options: {
      a: "Add users to roles/bigquery user role only, instead of roles/bigquery dataOwner.",
      b: "Add users to roles/bigquery dataEditor role only, instead of roles/bigquery dataOwner.",
      c: "Create a custom role by removing delete permissions, and add users to that role only.",
      d: "Create a custom role by removing delete permissions. Add users to the group, and then add the group to the custom role.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #103	Topic 1    You have a developer laptop with the Cloud SDK installed on Ubuntu. The Cloud SDK was installed from the Google Cloud Ubuntu package repository. You want to test your application locally on your laptop with Cloud Datastore. What should you do?",
    options: {
      a: "Export Cloud Datastore data using gcloud datastore export.",
      b: "Create a Cloud Datastore index using gcloud datastore indexes create.",
      c: "Install the google-cloud-sdk-datastore-emulator component using the apt get install command.",
      d: "Install the cloud-datastore-emulator component using the gcloud components install command.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #104	Topic 1    Your company set up a complex organizational structure on Google Cloud. The structure includes hundreds of folders and projects. Only a few team members should be able to view the hierarchical structure. You need to assign minimum permissions to these team members, and you want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Add the users to roles/browser role.",
      b: "Add the users to roles/iam.roleViewer role.",
      c: "Add the users to a group, and add this group to roles/browser.",
      d: "Add the users to a group, and add this group to roles/iam.roleViewer role.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #105	Topic 1    Your company has a single sign-on (SSO) identity provider that supports Security Assertion Markup Language (SAML) integration with service providers. Your company has users in Cloud Identity. You would like users to authenticate using your company's SSO provider. What should you do?",
    options: {
      a: "In Cloud Identity, set up SSO with Google as an identity provider to access custom SAML apps.",
      b: "In Cloud Identity, set up SSO with a third-party identity provider with Google as a service provider.",
      c: "Obtain OAuth 2.0 credentials, confgure the user consent screen, and set up OAuth 2.0 for Mobile & Desktop Apps.",
      d: "Obtain OAuth 2.0 credentials, confgure the user consent screen, and set up OAuth 2.0 for Web Server Applications.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #106	Topic 1    Your organization has a dedicated person who creates and manages all service accounts for Google Cloud projects. You need to assign this person the minimum role for projects. What should you do?",
    options: {
      a: "Add the user to roles/iam.roleAdmin role.",
      b: "Add the user to roles/iam.securityAdmin role.",
      c: "Add the user to roles/iam.serviceAccountUser role.",
      d: "Add the user to roles/iam.serviceAccountAdmin role.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #107	Topic 1    You are building an archival solution for your data warehouse and have selected Cloud Storage to archive your data. Your users need to be able to access this archived data once a quarter for some regulatory requirements. You want to select a cost-efcient option. Which storage option should you use?",
    options: {
      a: "Cold Storage",
      b: "Nearline Storage",
      c: "Regional Storage",
      d: "Multi-Regional Storage",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #108	Topic 1    A team of data scientists infrequently needs to use a Google Kubernetes Engine (GKE) cluster that you manage. They require GPUs for some long-running, non- restartable jobs. You want to minimize cost. What should you do?",
    options: {
      a: "Enable node auto-provisioning on the GKE cluster.",
      b: "Create a VerticalPodAutscaler for those workloads.",
      c: "Create a node pool with preemptible VMs and GPUs attached to those VMs.",
      d: "Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #109	Topic 1    Your organization has user identities in Active Directory. Your organization wants to use Active Directory as their source of truth for identities. Your organization wants to have full control over the Google accounts used by employees for all Google services, including your Google Cloud Platform (GCP) organization. What should you do?",
    options: {
      a: "Use Google Cloud Directory Sync (GCDS) to synchronize users into Cloud Identity.",
      b: "Use the cloud Identity APIs and write a script to synchronize users to Cloud Identity.",
      c: "Export users from Active Directory as a CSV and import them to Cloud Identity via the Admin Console.",
      d: "Ask each employee to create a Google account using self signup. Require that each employee use their company email address and password.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #110	Topic 1    You have successfully created a development environment in a project for an application. This application uses Compute Engine and Cloud SQL. Now you need to create a production environment for this application. The security team has forbidden the existence of network routes between these 2 environments and has asked you to follow Google-recommended practices. What should you do?",
    options: {
      a: "Create a new project, enable the Compute Engine and Cloud SQL APIs in that project, and replicate the setup you have created in the development environment.",
      b: "Create a new production subnet in the existing VPC and a new production Cloud SQL instance in your existing project, and deploy your application using those resources.",
      c: "Create a new project, modify your existing VPC to be a Shared VPC, share that VPC with your new project, and replicate the setup you have in the development environment in that new project in the Shared VPC.",
      d: "Ask the security team to grant you the Project Editor role in an existing production project used by another division of your company. Once they grant you that role, replicate the setup you have in the development environment in that project.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #111	Topic 1    Your management has asked an external auditor to review all the resources in a specifc project. The security team has enabled the Organization Policy called Domain Restricted Sharing on the organization node by specifying only your Cloud Identity domain. You want the auditor to only be able to view, but not modify, the resources in that project. What should you do?",
    options: {
      a: "Ask the auditor for their Google account, and give them the Viewer role on the project.",
      b: "Ask the auditor for their Google account, and give them the Security Reviewer role on the project.",
      c: "Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project.",
      d: "Create a temporary account for the auditor in Cloud Identity, and give that account the Security Reviewer role on the project.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #112	Topic 1    You have a workload running on Compute Engine that is critical to your business. You want to ensure that the data on the boot disk of this workload is backed up regularly. You need to be able to restore a backup as quickly as possible in case of disaster. You also want older backups to be cleaned automatically to save on cost. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Create a Cloud Function to create an instance template.",
      b: "Create a snapshot schedule for the disk using the desired interval.",
      c: "Create a cron job to create a new disk from the disk using gcloud.",
      d: "Create a Cloud Task to create an image and export it to Cloud Storage.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #113	Topic 1    You need to assign a Cloud Identity and Access Management (Cloud IAM) role to an external auditor. The auditor needs to have permissions to review your Google Cloud Platform (GCP) Audit Logs and also to review your Data Access logs. What should you do?",
    options: {
      a: "Assign the auditor the IAM role roles/logging.privateLogViewer. Perform the export of logs to Cloud Storage.",
      b: "Assign the auditor the IAM role roles/logging.privateLogViewer. Direct the auditor to also review the logs for changes to Cloud IAM policy.",
      c: "Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Perform the export of logs to Cloud Storage.",
      d: "Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Direct the auditor to also review the logs for changes to Cloud IAM policy.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #114	Topic 1    You are managing several Google Cloud Platform (GCP) projects and need access to all logs for the past 60 days. You want to be able to explore and quickly analyze the log contents. You want to follow Google-recommended practices to obtain the combined logs for all projects. What should you do?",
    options: {
      a:
        "Navigate to Stackdriver Logging and select resource.labels.project_id=" *
        "",
      b: "Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. Confgure the table expiration to 60 days.",
      c: "Create a Stackdriver Logging Export with a Sink destination to Cloud Storage. Create a lifecycle rule to delete objects after 60 days.",
      d: "Confgure a Cloud Scheduler job to read from Stackdriver and store the logs in BigQuery. Confgure the table expiration to 60 days.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #115	Topic 1    You need to reduce GCP service costs for a division of your company using the fewest possible steps. You need to turn off all confgured services in an existing GCP project. What should you do?",
    options: {
      a: "1. Verify that you are assigned the Project Owners IAM role for this project. 2. Locate the project in the GCP console, click Shut down and then enter the project ID.",
      b: "1. Verify that you are assigned the Project Owners IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them.",
      c: "1. Verify that you are assigned the Organizational Administrator IAM role for this project. 2. Locate the project in the GCP console, enter the project ID and then click Shut down.",
      d: "1. Verify that you are assigned the Organizational Administrators IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #116	Topic 1    You are confguring service accounts for an application that spans multiple projects. Virtual machines (VMs) running in the web-applications project need access to BigQuery datasets in crm-databases-proj. You want to follow Google-recommended practices to give access to the service account in the web-applications project. What should you do?",
    options: {
      a: "Give project owner for web-applications appropriate roles to crm-databases-proj.",
      b: "Give project owner role to crm-databases-proj and the web-applications project.",
      c: "Give project owner role to crm-databases-proj and bigquery.dataViewer role to web-applications.",
      d: "Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #117	Topic 1    An employee was terminated, but their access to Google Cloud was not removed until 2 weeks later. You need to fnd out if this employee accessed any sensitive customer information after their termination. What should you do?",
    options: {
      a: "View System Event Logs in Cloud Logging. Search for the user's email as the principal.",
      b: "View System Event Logs in Cloud Logging. Search for the service account associated with the user.",
      c: "View Data Access audit logs in Cloud Logging. Search for the user's email as the principal.",
      d: "View the Admin Activity log in Cloud Logging. Search for the service account associated with the user.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #118	Topic 1    You need to create a custom IAM role for use with a GCP service. All permissions in the role must be suitable for production use. You also want to clearly share with your organization the status of the custom role. This will be the frst version of the custom role. What should you do?",
    options: {
      a: "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
      b: "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to BETA while testing the role permissions.",
      c: "Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
      d: "Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to BETA while testing the role permissions.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #119	Topic 1    Your company has a large quantity of unstructured data in different fle formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Datafow job. What should you do?",
    options: {
      a: "Upload the data to BigQuery using the bq command line tool.",
      b: "Upload the data to Cloud Storage using the gsutil command line tool.",
      c: "Upload the data into Cloud SQL using the import function in the console.",
      d: "Upload the data into Cloud Spanner using the import function in the console.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #120	Topic 1    You need to manage multiple Google Cloud projects in the fewest steps possible. You want to confgure the Google Cloud SDK command line interface (CLI) so that you can easily manage multiple projects. What should you do?",
    options: {
      a: "1. Create a configuration for each project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
      b: "1. Create a configuration for each project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project",
      c: "1. Use the default configuration for one project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
      d: "1. Use the default configuration for one project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #121	Topic 1    Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to maintain the number of running instances specifed by the template to be able to process expected application trafc. What should you do?",
    options: {
      a: "Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.",
      b: "Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.",
      c: "Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.",
      d: "Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #122	Topic 1    Your company is moving from an on-premises environment to Google Cloud. You have multiple development teams that use Cassandra environments as backend databases. They all need a development environment that is isolated from other Cassandra instances. You want to move to Google Cloud quickly and with minimal support effort. What should you do?",
    options: {
      a: "1. Build an instruction guide to install Cassandra on Google Cloud. 2. Make the instruction guide accessible to your developers.",
      b: "1. Advise your developers to go to Cloud Marketplace. 2. Ask the developers to launch a Cassandra image for their development work.",
      c: "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Use the snapshot to create instances for your developers.",
      d: "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Upload the snapshot to Cloud Storage and make it accessible to your developers. 3. Build instructions to create a Compute Engine instance from the snapshot so that developers can do it themselves.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #123	Topic 1    You have a Compute Engine instance hosting a production application. You want to receive an email if the instance consumes more than 90% of its CPU resources for more than 15 minutes. You want to use Google services. What should you do?",
    options: {
      a: "1. Create a consumer Gmail account. 2. Write a script that monitors the CPU usage. 3. When the CPU usage exceeds the threshold, have that script send an email using the Gmail account and smtp.gmail.com on port 25 as SMTP server.",
      b: "1. Create a Cloud Monitoring Workspace and associate your Google Cloud Platform (GCP) project with it. 2. Create a Cloud Monitoring Alerting Policy that uses the threshold as a trigger condition. 3. Confgure your email address in the notifcation channel.",
      c: "1. Create a Cloud Monitoring Workspace and associate your GCP project with it. 2. Write a script that monitors the CPU usage and sends it as a custom metric to Cloud Monitoring. 3. Create an uptime check for the instance in Cloud Monitoring.",
      d: "1. In Cloud Logging, create a logs-based metric to extract the CPU usage by using this regular expression: CPU Usage: ([0-9] {1,3})% 2. In Cloud Monitoring, create an Alerting Policy based on this metric. 3. Confgure your email address in the notifcation channel.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #124	Topic 1    You have an application that uses Cloud Spanner as a backend database. The application has a very predictable trafc pattern. You want to automatically scale up or down the number of Spanner nodes depending on trafc. What should you do?     Google support would scale resources up or down accordingly.",
    options: {
      a: "Create a cron job that runs on a scheduled basis to review Cloud Monitoring metrics, and then resize the Spanner instance accordingly.",
      b: "Create a Cloud Monitoring alerting policy to send an alert to oncall SRE emails when Cloud Spanner CPU exceeds the threshold. SREs would scale resources up or down accordingly.",
      c: "Create a Cloud Monitoring alerting policy to send an alert to Google Cloud Support email when Cloud Spanner CPU exceeds your threshold.",
      d: "Create a Cloud Monitoring alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #125	Topic 1    Your company publishes large fles on an Apache web server that runs on a Compute Engine instance. The Apache web server is not the only  application running in the project. You want to receive an email when the egress network costs for the server exceed 100 dollars for the current  month as measured by Google Cloud.  What should you do?",
    options: {
      a: "Set up a budget alert on the project with an amount of 100 dollars, a threshold of 100%, and notifcation type of email.",
      b: "Set up a budget alert on the billing account with an amount of 100 dollars, a threshold of 100%, and notifcation type of email.",
      c: "Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and sends an email if it is over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly.",
      d: "Use the Cloud Logging Agent to export the Apache web server logs to Cloud Logging. Create a Cloud Function that uses BigQuery to parse the HTTP response log data in Cloud Logging for the current month and sends an email if the size of all HTTP responses, multiplied by current Google Cloud egress prices, totals over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #126	Topic 1    You have designed a solution on Google Cloud that uses multiple Google Cloud products. Your company has asked you to estimate the costs of the solution. You need to provide estimates for the monthly total cost. What should you do?",
    options: {
      a: "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each Google Cloud product.",
      b: "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Create a Google Sheet that summarizes the expected monthly costs for each product.",
      c: "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Navigate to the Billing Report page in the Cloud Console. Multiply the 1 week cost to determine the monthly costs.",
      d: "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Use Cloud Monitoring to determine the provisioned and used resource amounts. Multiply the 1 week cost to determine the monthly costs.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #127	Topic 1    You have an application that receives SSL-encrypted TCP trafc on port 443. Clients for this application are located all over the world. You want to minimize latency for the clients. Which load balancing option should you use?",
    options: {
      a: "HTTPS Load Balancer",
      b: "Network Load Balancer",
      c: "SSL Proxy Load Balancer",
      d: "Internal TCP/UDP Load Balancer. Add a frewall rule allowing ingress trafc from 0.0.0.0/0 on the target instances.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #128	Topic 1    You have an application on a general-purpose Compute Engine instance that is experiencing excessive disk read throttling on its Zonal SSD  Persistent Disk. The application primarily reads large fles from disk. The disk size is currently 350 GB. You want to provide the maximum amount  of throughput while minimizing costs.  What should you do?",
    options: {
      a: "Increase the size of the disk to 1 TB.",
      b: "Increase the allocated CPU to the instance.",
      c: "Migrate to use a Local SSD on the instance.",
      d: "Migrate to use a Regional SSD on the instance.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #129	Topic 1    Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnet with range 172.16.20.128/25. There are no private IP addresses available in the VPC network. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?",
    options: {
      a: "Modify the existing subnet range to 172.16.20.0/24.",
      b: "Create a new Secondary IP Range in the VPC and confgure the VMs to use that range.",
      c: "Create a new VPC network for the VMs. Enable VPC Peering between the VMs' VPC network and the Dataproc cluster VPC network.",
      d: "Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Confgure a custom Route exchange.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #130	Topic 1    You manage an App Engine Service that aggregates and visualizes data from BigQuery. The application is deployed with the default App Engine Service account. The data that needs to be visualized resides in a different project managed by another team. You do not have access to this project, but you want your application to be able to read data from the BigQuery dataset. What should you do?",
    options: {
      a: "Ask the other team to grant your default App Engine Service account the role of BigQuery Job User.",
      b: "Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer.",
      c: "In Cloud IAM of your project, ensure that the default App Engine service account has the role of BigQuery Data Viewer.",
      d: "In Cloud IAM of your project, grant a newly created service account from the other team the role of BigQuery Job User in your project.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #131	Topic 1    You need to create a copy of a custom Compute Engine virtual machine (VM) to facilitate an expected increase in application trafc due to a  business acquisition.  What should you do?",
    options: {
      a: "Create a Compute Engine snapshot of your base VM. Create your images from that snapshot.",
      b: "Create a Compute Engine snapshot of your base VM. Create your instances from that snapshot.",
      c: "Create a custom Compute Engine image from a snapshot. Create your images from that image.",
      d: "Create a custom Compute Engine image from a snapshot. Create your instances from that image.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #132	Topic 1    You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
    options: {
      a: "Navigate to Cloud Logging and view the application logs.",
      b: "Connect to the instance's serial console and read the application logs.",
      c: "Confgure a Health Check on the instance and set a Low Healthy Threshold value.",
      d: "Install and confgure the Cloud Logging Agent and view the logs from Cloud Logging.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #133	Topic 1    An application generates daily reports in a Compute Engine virtual machine (VM). The VM is in the project corp-iot-insights. Your team operates only in the project corp-aggregate-reports and needs a copy of the daily exports in the bucket corp-aggregate-reports-storage. You want to confgure access so that the daily reports from the VM are available in the bucket corp-aggregate-reports-storage and use as few steps as possible while following Google-recommended practices. What should you do?",
    options: {
      a: "Move both projects under the same folder.",
      b: "Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage.",
      c: "Create a Shared VPC network between both projects. Grant the VM Service Account the role Storage Object Creator on corp-iot-insights.",
      d: "Make corp-aggregate-reports-storage public and create a folder with a pseudo-randomized sufx name. Share the folder with the IoT team.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #134	Topic 1    You built an application on your development laptop that uses Google Cloud services. Your application uses Application Default Credentials for authentication and works fne on your development laptop. You want to migrate this application to a Compute Engine virtual machine (VM) and set up authentication using Google- recommended practices and minimal changes. What should you do?",
    options: {
      a: "Assign appropriate access for Google services to the service account used by the Compute Engine VM.",
      b: "Create a service account with appropriate access for Google services, and confgure the application to use this account.",
      c: "Store credentials for service accounts with appropriate access for Google services in a confg fle, and deploy this confg fle with your application.",
      d: "Store credentials for your user account with appropriate access for Google services in a confg fle, and deploy this confg fle with your application.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #135	Topic 1    You need to create a Compute Engine instance in a new project that doesn't exist yet. What should you do?",
    options: {
      a: "Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project.",
      b: "Enable the Compute Engine API in the Cloud Console, use the Cloud SDK to create the instance, and then use the --project fag to specify a new project.",
      c: "Using the Cloud SDK, create the new instance, and use the --project fag to specify the new project. Answer yes when prompted by Cloud SDK to enable the Compute Engine API.",
      d: "Enable the Compute Engine API in the Cloud Console. Go to the Compute Engine section of the Console to create a new instance, and look for the Create In A New Project option in the creation form.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #136	Topic 1    Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed ofine, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?",
    options: {
      a: "Migrate the workload to a Compute Engine Preemptible VM.",
      b: "Migrate the workload to a Google Kubernetes Engine cluster with Preemptible nodes.",
      c: "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
      d: "Create an Instance Template with Preemptible VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #137	Topic 1    You are developing a new application and are looking for a Jenkins installation to build and deploy your source code. You want to automate the installation as quickly and easily as possible. What should you do?",
    options: {
      a: "Deploy Jenkins through the Google Cloud Marketplace.",
      b: "Create a new Compute Engine instance. Run the Jenkins executable.",
      c: "Create a new Kubernetes Engine cluster. Create a deployment for the Jenkins image.",
      d: "Create an instance template with the Jenkins executable. Create a managed instance group with this template.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #138	Topic 1   You have downloaded and installed the gcloud command line interface (CLI) and have authenticated with your Google Account. Most of your Compute Engine instances in your project run in the europe-west1-d zone. You want to avoid having to specify this zone with each CLI command when managing these instances. What should you do?",
    options: {
      a: "Set the europe-west1-d zone as the default zone using the gcloud config subcommand.",
      b: " In the Settings page for Compute Engine under Default location, set the zone to europe west1-d.",
      c: "In the CLI installation directory, create a file called default.conf containing zone=europe west1 d.",
      d: " Create a Metadata entry on the Compute Engine page with key compute/zone and value europe west1 d.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #139	Topic 1    The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput  up to thousands of events per hour per device and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?",
    options: {
      a: "Create a fle in Cloud Storage per device and append new data to that fle.",
      b: "Create a fle in Cloud Filestore per device and append new data to that fle.",
      c: "Ingest the data into Datastore. Store data in an entity group based on the device.",
      d: "Ingest the data into Cloud Bigtable. Create a row key based on the event timestamp.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #140	Topic 1    You are asked to set up application performance monitoring on Google Cloud projects A, B, and C as a single pane of glass. You want to monitor CPU, memory, and disk. What should you do?",
    options: {
      a: "Enable API and then share charts from project A, B, and C.",
      b: "Enable API and then give the metrics.reader role to projects A, B, and C.",
      c: "Enable API and then use default dashboards to view all projects in sequence.",
      d: "Enable API, create a workspace under project A, and then add projects B and C.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #141	Topic 1    You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?",
    options: {
      a: "Confgure Billing Data Export to BigQuery and visualize the data in Data Studio.",
      b: "Visit the Cost Table page to get a CSV export and visualize it using Data Studio.",
      c: "Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.",
      d: "Use the Reports view in the Cloud Billing Console to view the desired cost information.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #142	Topic 1    Your company has workloads running on Compute Engine and on-premises. The Google Cloud Virtual Private Cloud (VPC) is connected to your WAN over a Virtual Private Network (VPN). You need to deploy a new Compute Engine instance and ensure that no public Internet trafc can be routed to it. What should you do?",
    options: {
      a: "Create the instance without a public IP address.",
      b: "Create the instance with Private Google Access enabled.",
      c: "Create a deny-all egress frewall rule on the VPC network.",
      d: "Create a route on the VPC to route all trafc to the instance over the VPN tunnel.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #143	Topic 1    Your team maintains the infrastructure for your organization. The current infrastructure requires changes. You need to share your proposed changes with the rest of the team. You want to follow Google's recommended best practices. What should you do?",
    options: {
      a: "Use Deployment Manager templates to describe the proposed changes and store them in a Cloud Storage bucket.",
      b: "Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.",
      c: "Apply the changes in a development environment, run gcloud compute instances list, and then save the output in a shared Storage bucket.",
      d: "Apply the changes in a development environment, run gcloud compute instances list, and then save the output in Cloud Source Repositories.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #144	Topic 1    You have a Compute Engine instance hosting an application used between 9 AM and 6 PM on weekdays. You want to back up this instance daily for disaster recovery purposes. You want to keep the backups for 30 days. You want the Google-recommended solution with the least management overhead and the least number of services. What should you do?   the following value: snapshot? retention: 30",
    options: {
      a: "1. Update your instances' metadata to add the following value: snapshotschedule: 0 1 * * * 2. Update your instances' metadata to add",
      b: "1. In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. 2. In the Snapshot Schedule section, select Create Schedule and confgure the following parameters: - Schedule frequency: Daily - Start time: 1:00 AM 2:00 €? AM - Autodelete snapshots after: 30 days",
      c: "1. Create a Cloud Function that creates a snapshot of your instance's disk. 2. Create a Cloud Function that deletes snapshots that are older than 30 days. 3. Use Cloud Scheduler to trigger both Cloud Functions daily at 1:00 AM.",
      d: "1. Create a bash script in the instance that copies the content of the disk to Cloud Storage. 2. Create a bash script in the instance that deletes data older than 30 days in the backup Cloud Storage bucket. 3. Confgure the instance's crontab to execute these scripts daily at 1:00 AM.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #145	Topic 1    Your existing application running in Google Kubernetes Engine (GKE) consists of multiple pods running on four GKE n1 standard 2 nodes. You need to deploy additional pods requiring n2 highmem 16 nodes without any downtime. What should you do?",
    options: {
      a: "Use gcloud container clusters upgrade. Deploy the new services.",
      b: "Create a new Node Pool and specify machine type n2 highmem16?. Deploy the new pods.",
      c: "Create a new cluster with n2 highmem16? nodes. Redeploy the pods and delete the old cluster.",
      d: "Create a new cluster with both n1 standard2? and n2 highmem16? nodes. Redeploy the pods and delete the old cluster.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #146	Topic 1    You have an application that uses Cloud Spanner as a database backend to keep current state information about users. Cloud Bigtable logs all events triggered by users. You export Cloud Spanner data to Cloud Storage during daily backups. One of your analysts asks you to join data from Cloud Spanner and Cloud  Bigtable for specifc users. You want to complete this ad hoc request as efciently as possible. What should you do?",
    options: {
      a: "Create a datafow job that copies data from Cloud Bigtable and Cloud Storage for specifc users.",
      b: "Create a datafow job that copies data from Cloud Bigtable and Cloud Spanner for specifc users.",
      c: "Create a Cloud Dataproc cluster that runs a Spark job to extract data from Cloud Bigtable and Cloud Storage for specifc users.",
      d: "Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. Use the BigQuery console to join these tables through user felds, and apply appropriate flters.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #147	Topic 1    You are hosting an application from Compute Engine virtual machines (VMs) in us central1-a. You want to adjust your design to support the failure of a single Compute Engine zone, eliminate downtime, and minimize cost. What should you do?",
    options: {
      a: "Create Compute Engine resources in us central1 b. Balance the load across both us central1 a and us central1-b",
      b: "Create a Managed Instance Group and specify us central1 a as the zone.  Configure the Health Check with a short Health Interval",
      c: " Create an HTTP(S) Load Balancer. Create one or more global forwarding rules to direct traffic to your VMs.",
      d: "Perform regular backups of your application.  Create a Cloud Monitoring Alert and be notified if your application becomes unavailable.  Restore from backups when notified",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #148	Topic 1     A colleague handed over a Google Cloud Platform project for you to maintain. As part of a security checkup, you want to review who has been granted the Project Owner role. What should you do?",
    options: {
      a: "In the console, validate which SSH keys have been stored as project-wide keys.",
      b: "Navigate to Identity-Aware Proxy and check the permissions for these resources.",
      c: "Enable Audit Logs on the IAM & admin page for all resources, and validate the results.",
      d: "Use the command gcloud projects get iam policy to view the current role assignments.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #149	Topic 1    You are running multiple VPC-native Google Kubernetes Engine clusters in the same subnet. The IPs available for the nodes are exhausted, and you want to ensure that the clusters can grow in nodes when needed. What should you do?",
    options: {
      a: "Create a new subnet in the same region as the subnet being used.",
      b: "Add an alias IP range to the subnet used by the GKE clusters.",
      c: "Create a new VPC, and set up VPC peering with the existing VPC.",
      d: "Expand the CIDR range of the relevant subnet for the cluster.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #150	Topic 1    You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
    options: {
      a: "Run a test using simulated maintenance events. If the test is successful, use preemptible N1 Standard VMs when running future jobs.",
      b: "Run a test using simulated maintenance events. If the test is successful, use N1 Standard VMs when running future jobs.",
      c: "Run a test using a managed instance group. If the test is successful, use N1 Standard VMs in the managed instance group when running future jobs.",
      d: "Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #151	Topic 1    You are working with a user to set up an application in a new VPC behind a frewall. The user is concerned about data egress. You want to confgure the fewest open egress ports. What should you do?",
    options: {
      a: "Set up a low-priority (65534) rule that blocks all egress and a high-priority rule (1000) that allows only the appropriate ports.",
      b: "Set up a high-priority (1000) rule that pairs both ingress and egress ports.",
      c: "Set up a high-priority (1000) rule that blocks all egress and a low-priority (65534) rule that allows only the appropriate ports.",
      d: "Set up a high-priority (1000) rule to allow the appropriate ports.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #152	Topic 1    Your company runs its Linux workloads on Compute Engine instances. Your company will be working with a new operations partner that does not use Google Accounts. You need to grant access to the instances to your operations partner so they can maintain the installed tooling. What should you do?",
    options: {
      a: "Enable Cloud IAP for the Compute Engine instances, and add the operations partner as a Cloud IAP Tunnel User.",
      b: "Tag all the instances with the same network tag. Create a frewall rule in the VPC to grant TCP access on port 22 for trafc from the operations partner to instances with the network tag.",
      c: "Set up Cloud VPN between your Google Cloud VPC and the internal network of the operations partner.",
      d: "Ask the operations partner to generate SSH key pairs, and add the public keys to the VM instances.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #153	Topic 1    You have created a code snippet that should be triggered whenever a new fle is uploaded to a Cloud Storage bucket. You want to deploy this code snippet. What should you do?",
    options: {
      a: "Use App Engine and confgure Cloud Scheduler to trigger the application using Pub/Sub.",
      b: "Use Cloud Functions and confgure the bucket as a trigger resource.",
      c: "Use Google Kubernetes Engine and confgure a CronJob to trigger the application using Pub/Sub.",
      d: "Use Datafow as a batch job, and confgure the bucket as a data source.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #154	Topic 1    You have been asked to set up Object Lifecycle Management for objects stored in storage buckets. The objects are written once and accessed  frequently for 30 days. After 30 days, the objects are not read again unless there is a special need. The objects should be kept for three years, and  you need to minimize cost.  What should you do?",
    options: {
      a: "Set up a policy that uses Nearline storage for 30 days and then moves to Archive storage for three years.",
      b: "Set up a policy that uses Standard storage for 30 days and then moves to Archive storage for three years.",
      c: "Set up a policy that uses Nearline storage for 30 days, then moves the Coldline for one year, and then moves to Archive storage for two years.",
      d: "Set up a policy that uses Standard storage for 30 days, then moves to Coldline for one year, and then moves to Archive storage for two years.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #155	Topic 1    You are storing sensitive information in a Cloud Storage bucket. For legal reasons, you need to be able to record all requests that read any of the stored data. You want to make sure you comply with these requirements. What should you do?",
    options: {
      a: "Enable the Identity Aware Proxy API on the project.",
      b: "Scan the bucket using the Data Loss Prevention API.",
      c: "Allow only a single Service Account access to read the data.",
      d: "Enable Data Access audit logs for the Cloud Storage API.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #156	Topic 1    You are the team lead of a group of 10 developers. You provided each developer with an individual Google Cloud Project that they can use as their personal sandbox to experiment with different Google Cloud solutions. You want to be notifed if any of the developers are spending above $500 per month on their sandbox environment. What should you do?",
    options: {
      a: "Create a single budget for all projects and confgure budget alerts on this budget.",
      b: "Create a separate billing account per sandbox project and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per billing account.",
      c: "Create a budget per project and confgure budget alerts on all of these budgets.",
      d: "Create a single billing account for all sandbox projects and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per project.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #157	Topic 1    You are deploying a production application on Compute Engine. You want to prevent anyone from accidentally destroying the instance by clicking the wrong button. What should you do?",
    options: {
      a: "Disable the fag Delete boot disk when instance is deleted.",
      b: "Enable delete protection on the instance.",
      c: "Disable Automatic restart on the instance.",
      d: "Enable Preemptibility on the instance.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #158	Topic 1    Your company uses a large number of Google Cloud services centralized in a single project. All teams have specifc projects for testing and development. The DevOps team needs access to all of the production services in order to perform their job. You want to prevent Google Cloud product changes from broadening their permissions in the future. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Grant all members of the DevOps team the role of Project Editor on the organization level.",
      b: "Grant all members of the DevOps team the role of Project Editor on the production project.",
      c: "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project.",
      d: "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the organization level.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #159	Topic 1    You are building an application that processes data fles uploaded from thousands of suppliers. Your primary goals for the application are data security and the expiration of aged data. You need to design the application to: Restrict access so that suppliers can access only their own data.  Give suppliers write access to data only for 30 minutes.  Delete data that is over 45 days old.  You have a very short development cycle, and you need to make sure that the application requires minimal maintenance. Which two strategies  should you use?  (Choose two.)",
    options: {
      a: "Build a lifecycle policy to delete Cloud Storage objects after 45 days.",
      b: "Use signed URLs to allow suppliers limited time access to store their objects.",
      c: "Set up an SFTP server for your application, and create a separate user for each supplier.",
      d: "Build a Cloud function that triggers a timer of 45 days to delete objects that have expired.",
      e: "Develop a script that loops through all Cloud Storage buckets and deletes any buckets that are older than 45 days.",
    },
    correct: ["a", "e"],
  },
  {
    question:
      "Question #160	Topic 1    Your company wants to standardize the creation and management of multiple Google Cloud resources using Infrastructure as Code. You want to minimize the amount of repetitive code needed to manage the environment. What should you do?",
    options: {
      a: "Develop templates for the environment using Cloud Deployment Manager.",
      b: "Use curl in a terminal to send a REST request to the relevant Google API for each individual resource.",
      c: "Use the Cloud Console interface to provision and manage all related resources.",
      d: "Create a bash script that contains all requirement steps as gcloud commands.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #161	Topic 1    You are performing a monthly security check of your Google Cloud environment and want to know who has access to view data stored in your Google Cloud Project. What should you do?",
    options: {
      a: "Enable Audit Logs for all APIs that are related to data storage.",
      b: "Review the IAM permissions for any role that allows for data access.",
      c: "Review the Identity-Aware Proxy settings for each resource.",
      d: "Create a Data Loss Prevention job.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #162	Topic 1    Your company has embraced a hybrid cloud strategy where some of the applications are deployed on Google Cloud. A Virtual Private Network  (VPN) tunnel connects your Virtual Private Cloud (VPC) in Google Cloud with your company's on-premises network. Multiple applications in  Google Cloud need to connect to an on-premises database server, and you want to avoid having to change the IP configuration in all of your  applications when the IP of the database changes.  What should you do?",
    options: {
      a: "Confgure Cloud NAT for all subnets of your VPC to be used when egressing from the VM instances.",
      b: "Create a private zone on Cloud DNS, and confgure the applications with the DNS name.",
      c: "Confgure the IP of the database as custom metadata for each instance, and query the metadata server.",
      d: "Query the Compute Engine internal DNS from the applications to retrieve the IP of the database.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #163	Topic 1    You have developed a containerized web application that will serve internal colleagues during business hours. You want to ensure that no costs are incurred outside of the hours the application is used. You have just created a new Google Cloud project and want to deploy the application. What should you do?",
    options: {
      a: "Deploy the container on Cloud Run for Anthos, and set the minimum number of instances to zero.",
      b: "Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.",
      c: "Deploy the container on App Engine fexible environment with autoscaling, and set the value min_instances to zero in the app.yaml.",
      d: "Deploy the container on App Engine fexible environment with manual scaling, and set the value instances to zero in the app.yaml.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #164	Topic 1    You have experimented with Google Cloud using your own credit card and expensed the costs to your company. Your company wants to streamline the billing process and charge the costs of your projects to their monthly invoice. What should you do?",
    options: {
      a: "Grant the fnancial team the IAM role of Billing Account User on the billing account linked to your credit card.",
      b: "Set up BigQuery billing export and grant your fnancial department IAM access to query the data.",
      c: "Create a ticket with Google Billing Support to ask them to send the invoice to your company.",
      d: "Change the billing account of your projects to the billing account of your company.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #165	Topic 1    You are running a data warehouse on BigQuery. A partner company is offering a recommendation engine based on the data in your data warehouse. The partner company is also running their application on Google Cloud. They manage the resources in their own project, but they need access to the BigQuery dataset in your project. You want to provide the partner company with access to the dataset. What should you do?",
    options: {
      a: "Create a Service Account in your own project, and grant this Service Account access to BigQuery in your project.",
      b: "Create a Service Account in your own project, and ask the partner to grant this Service Account access to BigQuery in their project.",
      c: "Ask the partner to create a Service Account in their project, and have them give the Service Account access to BigQuery in their project.",
      d: "Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #166	Topic 1    Your web application has been running successfully on Cloud Run for Anthos. You want to evaluate an updated version of the application with a specifc percentage of your production users (canary deployment). What should you do?",
    options: {
      a: "Create a new service with the new version of the application. Split trafc between this version and the version that is currently running.",
      b: "Create a new revision with the new version of the application. Split trafc between this version and the version that is currently running.",
      c: "Create a new service with the new version of the application. Add an HTTP Load Balancer in front of both services.",
      d: "Create a new revision with the new version of the application. Add an HTTP Load Balancer in front of both revisions.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #167	Topic 1    Your company developed a mobile game that is deployed on Google Cloud. Gamers are connecting to the game with their personal phones over the Internet. The game sends UDP packets to update the servers about the gamers' actions while they are playing in multiplayer mode. Your game backend can scale over multiple virtual machines (VMs), and you want to expose the VMs over a single IP address. What should you do?",
    options: {
      a: "Confgure an SSL Proxy load balancer in front of the application servers.",
      b: "Confgure an Internal UDP load balancer in front of the application servers.",
      c: "Confgure an External HTTP(s) load balancer in front of the application servers.",
      d: "Confgure an External Network load balancer in front of the application servers.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #168	Topic 1    You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
    options: {
      a: "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
      b: "Deploy a Datafow job from the batch template, Datastore to Cloud Storage. Schedule the batch job on the desired interval.",
      c: "Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job.",
      d: "In the Cloud Console, go to Cloud Storage. Upload the relevant images to the appropriate bucket.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #169	Topic 1    Your auditor wants to view your organization's use of data in Google Cloud. The auditor is most interested in auditing who accessed data in Cloud Storage buckets. You need to help the auditor access the data they need. What should you do?",
    options: {
      a: "Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that flters on Cloud Storage.",
      b: "Assign the appropriate permissions, and then create a Data Studio report on Admin Activity Audit Logs.",
      c: "Assign the appropriate permissions, and then use Cloud Monitoring to review metrics.",
      d: "Use the export logs API to provide the Admin Activity Audit Logs in the format they want.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #170	Topic 1    You received a JSON fle that contained a private key of a Service Account in order to get access to several resources in a Google Cloud project. You downloaded and installed the Cloud SDK and want to use this private key for authentication and authorization when performing gcloud commands. What should you do?",
    options: {
      a: "Use the command gcloud auth login and point it to the private key.",
      b: "Use the command gcloud auth activate-service-account and point it to the private key.",
      c: "Place the private key fle in the installation directory of the Cloud SDK and rename it to credentials.json.",
      d: "Place the private key fle in your home directory and rename it to GOOGLE_APPLICATION_CREDENTIALS.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #171	Topic 1    You are working with a Cloud SQL MySQL database at your company. You need to retain a month-end copy of the database for three years for  audit purposes.  What should you do?",
    options: {
      a: "Set up an export job for the frst of the month. Write the export fle to an Archive class Cloud Storage bucket.",
      b: "Save the automatic frst-of-the-month backup for three years. Store the backup fle in an Archive class Cloud Storage bucket.",
      c: "Set up an on-demand backup for the frst of the month. Write the backup to an Archive class Cloud Storage bucket.",
      d: "Convert the automatic frst-of-the-month backup to an export fle. Write the export fle to a Coldline class Cloud Storage bucket.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #173	Topic 1    You are developing a fnancial trading application that will be used globally. Data is stored and queried using a relational structure, and clients from all over the world should get the exact identical state of the data. The application will be deployed in multiple regions to provide the lowest latency to end users. You need to select a storage option for the application data while minimizing latency. What should you do?",
    options: {
      a: "Use Cloud Bigtable for data storage.",
      b: "Use Cloud SQL for data storage.",
      c: "Use Cloud Spanner for data storage.",
      d: "Use Firestore for data storage.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #174	Topic 1    You are about to deploy a new Enterprise Resource Planning (ERP) system on Google Cloud. The application holds the full database in-memory for fast data access, and you need to confgure the most appropriate resources on Google Cloud for this application. What should you do?",
    options: {
      a: "Provision preemptible Compute Engine instances.",
      b: "Provision Compute Engine instances with GPUs attached.",
      c: "Provision Compute Engine instances with local SSDs attached.",
      d: "Provision Compute Engine instances with M1 machine type.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #175	Topic 1    You have developed an application that consists of multiple microservices, with each microservice packaged in its own Docker container image. You want to deploy the entire application on Google Kubernetes Engine so that each microservice can be scaled individually. What should you do?",
    options: {
      a: "Create and deploy a Custom Resource Defnition per microservice.",
      b: "Create and deploy a Docker Compose File.",
      c: "Create and deploy a Job per microservice.",
      d: "Create and deploy a Deployment per microservice.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #176	Topic 1    You will have several applications running on different Compute Engine instances in the same project. You want to specify at a more granular level the service account each instance uses when calling Google Cloud APIs. What should you do?",
    options: {
      a: "When creating the instances, specify a Service Account for each instance.",
      b: "When creating the instances, assign the name of each Service Account as instance metadata.",
      c: "After starting the instances, use gcloud compute instances update to specify a Service Account for each instance.",
      d: "After starting the instances, use gcloud compute instances update to assign the name of the relevant Service Account as instance metadata.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #177	Topic 1    You are creating an application that will run on Google Kubernetes Engine. You have identifed MongoDB as the most suitable database system for your application and want to deploy a managed MongoDB environment that provides a support SLA. What should you do?",
    options: {
      a: "Create a Cloud Bigtable cluster, and use the HBase API.",
      b: "Deploy MongoDB Atlas from the Google Cloud Marketplace.",
      c: "Download a MongoDB installation package, and run it on Compute Engine instances.",
      d: "Download a MongoDB installation package, and run it on a Managed Instance Group.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #178	Topic 1    You are managing a project for the Business Intelligence (BI) department in your company. A data pipeline ingests data into BigQuery via streaming. You want the users in the BI department to be able to run the custom SQL queries against the latest data in BigQuery. What should you do?",
    options: {
      a: "Create a Data Studio dashboard that uses the related BigQuery tables as a source and give the BI team view access to the Data Studio dashboard.",
      b: "Create a Service Account for the BI team and distribute a new private key to each member of the BI team.",
      c: "Use Cloud Scheduler to schedule a batch Datafow job to copy the data from BigQuery to the BI team's internal data warehouse.",
      d: "Assign the IAM role of BigQuery User to a Google Group that contains the members of the BI team.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #179	Topic 1    Your company is moving its entire workload to Compute Engine. Some servers should be accessible through the Internet, and other servers should only be accessible over the internal network. All servers need to be able to talk to each other over specifc ports and protocols. The current on-premises network relies on a demilitarized zone (DMZ) for the public servers and a Local Area Network (LAN) for the private servers. You need to design the networking infrastructure on  Google Cloud to match these requirements. What should you do?",
    options: {
      a: "1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up frewall rules to open up relevant trafc between the DMZ and the LAN subnets, and another frewall rule to allow public ingress trafc for the DMZ.",
      b: "1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up frewall rules to open up relevant trafc between the DMZ and the LAN subnets, and another frewall rule to allow public egress trafc for the DMZ.",
      c: "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up frewall rules to open up relevant trafc between the DMZ and the LAN subnets, and another frewall rule to allow public ingress trafc for the DMZ.",
      d: "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up frewall rules to open up relevant trafc between the DMZ and the LAN subnets, and another frewall rule to allow public egress trafc for the DMZ.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #180	Topic 1    You have just created a new project which will be used to deploy a globally distributed application. You will use Cloud Spanner for data storage. You want to create a Cloud Spanner instance. You want to perform the frst step in preparation of creating the instance. What should you do?",
    options: {
      a: "Enable the Cloud Spanner API.",
      b: "Confgure your Cloud Spanner instance to be multi-regional.",
      c: "Create a new VPC network with subnetworks in all desired regions.",
      d: "Grant yourself the IAM role of Cloud Spanner Admin.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #181	Topic 1    You have created a new project in Google Cloud through the gcloud command line interface (CLI) and linked a billing account. You need to create a new Compute Engine instance using the CLI. You need to perform the prerequisite steps. What should you do?",
    options: {
      a: "Create a Cloud Monitoring Workspace.",
      b: "Create a VPC network in the project.",
      c: "Enable the compute googleapis.com API.",
      d: "Grant yourself the IAM role of Computer Admin.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #182	Topic 1    Your company has developed a new application that consists of multiple microservices. You want to deploy the application to Google Kubernetes Engine (GKE), and you want to ensure that the cluster can scale as more applications are deployed in the future. You want to avoid manual intervention when each new application is deployed. What should you do?",
    options: {
      a: "Deploy the application on GKE, and add a HorizontalPodAutoscaler to the deployment.",
      b: "Deploy the application on GKE, and add a VerticalPodAutoscaler to the deployment.",
      c: "Create a GKE cluster with autoscaling enabled on the node pool. Set a minimum and maximum for the size of the node pool.",
      d: "Create a separate node pool for each application, and deploy each application to its dedicated node pool.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #183	Topic 1    You need to manage a third-party application that will run on a Compute Engine instance. Other Compute Engine instances are already running with default configuration. Application installation fles are hosted on Cloud Storage. You need to access these fles from the new instance without allowing other virtual machines (VMs) to access these fles. What should you do?",
    options: {
      a: "Create the instance with the default Compute Engine service account. Grant the service account permissions on Cloud Storage.",
      b: "Create the instance with the default Compute Engine service account. Add metadata to the objects on Cloud Storage that matches the metadata on the new instance.",
      c: "Create a new service account and assign this service account to the new instance. Grant the service account permissions on Cloud Storage.",
      d: "Create a new service account and assign this service account to the new instance. Add metadata to the objects on Cloud Storage that matches the metadata on the new instance.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #184	Topic 1    You need to confgure optimal data storage for fles stored in Cloud Storage for minimal cost. The fles are used in a mission-critical analytics pipeline that is used continually. The users are in Boston, MA (United States). What should you do?",
    options: {
      a: "Confgure regional storage for the region closest to the users. Confgure a Nearline storage class.",
      b: "Confgure regional storage for the region closest to the users. Confgure a Standard storage class.",
      c: "Confgure dual-regional storage for the dual region closest to the users. Confgure a Nearline storage class.",
      d: "Confgure dual-regional storage for the dual region closest to the users. Confgure a Standard storage class.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #185	Topic 1    You are developing a new web application that will be deployed on Google Cloud Platform. As part of your release cycle, you want to test updates to your application on a small portion of real user trafc. The majority of the users should still be directed towards a stable version of your application. What should you do?",
    options: {
      a: "Deploy the application on App Engine. For each update, create a new version of the same service. Confgure trafc splitting to send a small percentage of trafc to the new version.",
      b: "Deploy the application on App Engine. For each update, create a new service. Confgure trafc splitting to send a small percentage of trafc to the new service.",
      c: "Deploy the application on Kubernetes Engine. For a new release, update the deployment to use the new version.",
      d: "Deploy the application on Kubernetes Engine. For a new release, create a new deployment for the new version. Update the service to use the new deployment.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #186	Topic 1    You need to add a group of new users to Cloud Identity. Some of the users already have existing Google accounts. You want to follow one of Google's recommended practices and avoid conficting accounts. What should you do?",
    options: {
      a: "Invite the user to transfer their existing account.",
      b: "Invite the user to use an email alias to resolve the confict.",
      c: "Tell the user that they must delete their existing account.",
      d: "Tell the user to remove all personal email from the existing account.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #187	Topic 1    You need to manage a Cloud Spanner instance for best query performance. Your instance in production runs in a single Google Cloud region. You need to improve performance in the shortest amount of time. You want to follow Google best practices for service configuration. What should you do?",
    options: {
      a: "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. If you exceed this threshold, add nodes to your instance.",
      b: "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage.",
      c: "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. If you exceed this threshold, add nodes to your instance.",
      d: "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #188	Topic 1    Your company has an internal application for managing transactional orders. The application is used exclusively by employees in a single physical location. The application requires strong consistency, fast queries, and ACID guarantees for multi-table transactional updates. The first version of the application is implemented in PostgreSQL, and you want to deploy it to the cloud with minimal code changes. Which database is most appropriate for this application?",
    options: {
      a: "BigQuery",
      b: " Cloud SQL",
      c: "Cloud Spanner",
      d: "Cloud Datastore",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #189	Topic 1    You are assigned to maintain a Google Kubernetes Engine (GKE) cluster named 'dev' that was deployed on Google Cloud. You want to manage the GKE configuration using the command line interface (CLI). You have just downloaded and installed the Cloud SDK. You want to ensure that future CLI commands by default address this specifc cluster What should you do?",
    options: {
      a: "Use the command gcloud confg set container/cluster dev.",
      b: "Use the command gcloud container clusters update dev.",
      c: "Create a fle called gke.default in the ~/.gcloud folder that contains the cluster name.",
      d: "Create a fle called defaults.json in the ~/.gcloud folder that contains the cluster name.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #190	Topic 1    The sales team has a project named Sales Data Digest that has the ID acme-data-digest. You need to set up similar Google Cloud resources for the marketing team but their resources must be organized independently of the sales team. What should you do?",
    options: {
      a: "Grant the Project Editor role to the Marketing team for acme-data-digest.",
      b: "Create a Project Lien on acme-data-digest and then grant the Project Editor role to the Marketing team.",
      c: "Create another project with the ID acme-marketing-data-digest for the Marketing team and deploy the resources there.",
      d: "Create a new project named Marketing Data Digest and use the ID acme-data-digest. Grant the Project Editor role to the Marketing team.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #191	Topic 1    You have deployed multiple Linux instances on Compute Engine. You plan on adding more instances in the coming weeks. You want to be able to access all of these instances through your SSH client over the internet without having to confgure specifc access on the existing and new instances. You do not want the  Compute Engine instances to have a public IP. What should you do?",
    options: {
      a: "Confgure Cloud Identity-Aware Proxy for HTTPS resources.",
      b: "Confgure Cloud Identity-Aware Proxy for SSH and TCP resources",
      c: "Create an SSH keypair and store the public key as a project-wide SSH Key.",
      d: "Create an SSH keypair and store the private key as a project-wide SSH Key.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #192	Topic 1    You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?",
    options: {
      a: "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.",
      b: "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.",
      c: "Upload the image to Container Registry and create a Kubernetes Service referencing the image.",
      d: "Upload the image to Container Registry and create a Kubernetes Deployment referencing the image.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #193	Topic 1    You are using Data Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day. At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Data Studio are broken, and you want to analyze the problem. What should you do?",
    options: {
      a: "Review the Error Reporting page in the Cloud Console to fnd any errors.",
      b: "Use the BigQuery interface to review the nightly job and look for any errors.",
      c: "Use Cloud Debugger to fnd out why the data was not refreshed correctly.",
      d: "In Cloud Logging, create a flter for your Data Studio report.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #194	Topic 1    You have been asked to set up the billing configuration for a new Google Cloud customer. Your customer wants to group resources that share common IAM policies. What should you do?",
    options: {
      a: "Use labels to group resources that share common IAM policies.",
      b: "Use folders to group resources that share common IAM policies.",
      c: "Set up a proper billing account structure to group IAM policies.",
      d: "Set up a proper project naming structure to group IAM policies.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #195	Topic 1    You have been asked to create robust Virtual Private Network (VPN) connectivity between a new Virtual Private Cloud (VPC) and a remote site.  Key requirements include dynamic routing, a shared address space of 10.19.0.1/22, and no overprovisioning of tunnels during a failover event.  You want to follow Google- recommended practices to set up a high availability Cloud VPN. What should you do?",
    options: {
      a: "Use a custom mode VPC network, confgure static routes, and use active/passive routing.",
      b: "Use an automatic mode VPC network, confgure static routes, and use active/active routing.",
      c: "Use a custom mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and use active/passive routing.",
      d: "Use an automatic mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and confgure policy-based routing.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #196	Topic 1    You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n1-standard machine types. You need to optimize your cluster so that all workloads are using resources as efciently as possible. What should you do?      Keep the resource requests for the other microservices at the default.",
    options: {
      a: "Assign the pods of the image rendering microservice a higher pod priority than the other microservices.",
      b: "Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.",
      c: "Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.",
      d: "Confgure the required amount of CPU and memory in the resource requests specifcation of the image rendering microservice deployment.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #197	Topic 1    Your organization has three existing Google Cloud projects. You need to bill the Marketing department for only their Google Cloud services for a new initiative within their group. What should you do?   2. Link the new project to a Marketing Billing Account.",
    options: {
      a: "1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud Project for the Marketing department.",
      b: "1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Set the default key-value project labels to department:marketing for all services in this project.",
      c: "1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Link the new project to a Marketing Billing Account.",
      d: "1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Set the default key-value project labels to department:marketing for all services in this project.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #198	Topic 1    You deployed an application on a managed instance group in Compute Engine. The application accepts Transmission Control Protocol (TCP) trafc on port 389 and requires you to preserve the IP address of the client who is making a request. You want to expose the application to the internet by using a load balancer. What should you do?",
    options: {
      a: "Expose the application by using an external TCP Network Load Balancer.",
      b: "Expose the application by using a TCP Proxy Load Balancer.",
      c: "Expose the application by using an SSL Proxy Load Balancer.",
      d: "Expose the application by using an internal TCP Network Load Balancer.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #199	Topic 1    You are building a multi-player gaming application that will store game information in a database. As the popularity of the application increases, you are concerned about delivering consistent performance. You need to ensure an optimal gaming performance for global users, without increasing the management complexity. What should you do?",
    options: {
      a: "Use Cloud SQL database with cross-region replication to store game statistics in the EU, US, and APAC regions.",
      b: "Use Cloud Spanner to store user data mapped to the game statistics.",
      c: "Use BigQuery to store game statistics with a Redis on Memorystore instance in the front to provide global consistency.",
      d: "Store game statistics in a Bigtable database partitioned by username.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #200	Topic 1     You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?   Firestore  Cloud Spanner  Bigtable",
    options: {
      a: "Cloud SQL",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #201	Topic 1    Your company has multiple projects linked to a single billing account in Google Cloud. You need to visualize the costs with specifc metrics that should be dynamically calculated based on company-specifc criteria. You want to automate the process. What should you do?",
    options: {
      a: "In the Google Cloud console, visualize the costs related to the projects in the Reports section.",
      b: "In the Google Cloud console, visualize the costs related to the projects in the Cost breakdown section.",
      c: "In the Google Cloud console, use the export functionality of the Cost table. Create a Looker Studio dashboard on top of the CSV export.",
      d: "Confgure Cloud Billing data export to BigQuery for the billing account. Create a Looker Studio dashboard on top of the BigQuery export.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #202	Topic 1    You have an application that runs on Compute Engine VM instances in a custom Virtual Private Cloud (VPC). Your company's security policies only allow the use of internal IP addresses on VM instances and do not let VM instances connect to the internet. You need to ensure that the application can access a fle hosted in a Cloud Storage bucket within your project. What should you do?",
    options: {
      a: "Enable Private Service Access on the Cloud Storage Bucket.",
      b: "Add storage.googleapis.com to the list of restricted services in a VPC Service Controls perimeter and add your project to the list of protected projects.",
      c: "Enable Private Google Access on the subnet within the custom VPC.",
      d: "Deploy a Cloud NAT instance and route the trafc to the dedicated IP address of the Cloud Storage bucket.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #203	Topic 1    Your company completed the acquisition of a startup and is now merging the IT systems of both companies. The startup had a production Google Cloud project in their organization. You need to move this project into your organization and ensure that the project is billed to your organization. You want to accomplish this task with minimal effort. What should you do?    Navigate to the Resource Manager in the startup's Google Cloud organization, and drag the project to your company's organization.   Share the Catalog with your organization, and deploy the resources in your company's project.",
    options: {
      a: "Use the projects.move method to move the project to your organization. Update the billing account of the project to that of your organization.",
      b: "Ensure that you have an Organization Administrator Identity and Access Management (IAM) role assigned to you in both organizations.",
      c: "Create a Private Catalog for the Google Cloud Marketplace, and upload the resources of the startup's production project to the Catalog.",
      d: "Create an infrastructure-as-code template for all resources in the project by using Terraform, and deploy that template to a new project in your organization. Delete the project from the startup's Google Cloud organization.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #204	Topic 1    All development (dev) teams in your organization are located in the United States. Each dev team has its own Google Cloud project. You want to restrict access so that each dev team can only create cloud resources in the United States (US). What should you do?",
    options: {
      a: "Create a folder to contain all the dev projects. Create an organization policy to limit resources in US locations.",
      b: "Create an organization to contain all the dev projects. Create an Identity and Access Management (IAM) policy to limit the resources in US regions.",
      c: "Create an Identity and Access Management (IAM) policy to restrict the resources locations in the US. Apply the policy to all dev projects.",
      d: "Create an Identity and Access Management (IAM) policy to restrict the resources locations in all dev projects. Apply the policy to all dev roles.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #205	Topic 1    You are confguring Cloud DNS. You want to create DNS records to point home.mydomain.com, mydomain.com, and www.mydomain.com to the IP address of your Google Cloud load balancer. What should you do?",
    options: {
      a: "Create one CNAME record to point mydomain.com to the load balancer, and create two A records to point WWW and HOME to mydomain.com respectively.",
      b: "Create one CNAME record to point mydomain.com to the load balancer, and create two AAAA records to point WWW and HOME to mydomain.com respectively.",
      c: "Create one A record to point mydomain.com to the load balancer, and create two CNAME records to point WWW and HOME to mydomain.com respectively.",
      d: "Create one A record to point mydomain.com to the load balancer, and create two NS records to point WWW and HOME to mydomain.com respectively.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #206	Topic 1    You have two subnets (subnet-a and subnet-b) in the default VPC. Your database servers are running in subnet-a. Your application servers and web servers are running in subnet-b. You want to confgure a frewall rule that only allows database trafc from the application servers to the database servers. What should you do?   Associate service account sa-app with the application servers and the service account sa-db with the database servers.  Create an ingress frewall rule to allow network trafc from source service account sa-app to target service account sa-db.   Add the app-server tag to the application servers and the db-server tag to the database servers.  Create an egress frewall rule to allow network trafc from source network tag app-server to target network tag db-server.   Associate the service account sa-app with the application servers and the network tag db-server with the database servers.  Create an ingress frewall rule to allow network trafc from source VPC IP addresses and target the subnet-a IP addresses.   Add the tag to the application servers and associate the service account with the database servers.  Create an egress frewall rule to allow network trafc from source network tag app-server to target service account sa-db.",
    options: {
      a: "• Create service accounts sa-app and sa-db.",
      b: "• Create network tags app-server and db-server.",
      c: "• Create a service account sa-app and a network tag db-server.",
      d: "• Create a network tag app-server and service account sa-db.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #207	Topic 1    Your team wants to deploy a specifc content management system (CMS) solution to Google Cloud. You need a quick and easy way to deploy and install the solution. What should you do?",
    options: {
      a: "Search for the CMS solution in Google Cloud Marketplace. Use gcloud CLI to deploy the solution.",
      b: "Search for the CMS solution in Google Cloud Marketplace. Deploy the solution directly from Cloud Marketplace.",
      c: "Search for the CMS solution in Google Cloud Marketplace. Use Terraform and the Cloud Marketplace ID to deploy the solution with the appropriate parameters.",
      d: "Use the installation guide of the CMS provider. Perform the installation through your configuration management system.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #208	Topic 1    You are working for a startup that was ofcially registered as a business 6 months ago. As your customer base grows, your use of Google Cloud increases. You want to allow all engineers to create new projects without asking them for their credit card information. What should you do?",
    options: {
      a: "Create a Billing account, associate a payment method with it, and provide all project creators with permission to associate that billing account with their projects.",
      b: "Grant all engineers permission to create their own billing accounts for each new project.",
      c: "Apply for monthly invoiced billing, and have a single invoice for the project paid by the fnance team.",
      d: "Create a billing account, associate it with a monthly purchase order (PO), and send the PO to Google Cloud.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #209	Topic 1    Your continuous integration and delivery (CI/CD) server can't execute Google Cloud actions in a specifc project because of permission issues.  You need to validate whether the used service account has the appropriate roles in the specifc project.   What should you do?",
    options: {
      a: "Open the Google Cloud console, and check the Identity and Access Management (IAM) roles assigned to the service account at the project or inherited from the folder or organization levels.",
      b: "Open the Google Cloud console, and check the organization policies.",
      c: "Open the Google Cloud console, and run a query to determine which resources this service account can access.",
      d: "Open the Google Cloud console, and run a query of the audit logs to fnd permission denied errors for this service account.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #210	Topic 1    Your team is using Linux instances on Google Cloud. You need to ensure that your team logs in to these instances in the most secure and cost efcient way. What should you do?",
    options: {
      a: "Attach a public IP to the instances and allow incoming connections from the internet on port 22 for SSH.",
      b: "Use the gcloud compute ssh command with the --tunnel-through-iap fag. Allow ingress trafc from the IP range 35.235.240.0/20 on port 22.",
      c: "Use a third party tool to provide remote access to the instances.",
      d: "Create a bastion host with public internet access. Create the SSH tunnel to the instance through the bastion host.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #211	Topic 1    An external member of your team needs list access to compute images and disks in one of your projects. You want to follow Google-recommended practices when you grant the required permissions to this user. What should you do?",
    options: {
      a: "Create a custom role, and add all the required compute.disks.list and compute.images.list permissions as includedPermissions. Grant the custom role to the user at the project level.",
      b: "Create a custom role based on the Compute Image User role. Add the compute.disks.list to the includedPermissions feld. Grant the custom role to the user at the project level.",
      c: "Create a custom role based on the Compute Storage Admin role. Exclude unnecessary permissions from the custom role. Grant the custom role to the user at the project level.",
      d: "Grant the Compute Storage Admin role at the project level.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #212	Topic 1    You are running a web application on Cloud Run for a few hundred users. Some of your users complain that the initial web page of the application takes much longer to load than the following pages. You want to follow Google's recommendations to mitigate the issue. What should you do?",
    options: {
      a: "Set the minimum number of instances for your Cloud Run service to 3.",
      b: "Set the concurrency number to 1 for your Cloud Run service.",
      c: "Set the maximum number of instances for your Cloud Run service to 100.",
      d: "Update your web application to use the protocol HTTP/2 instead of HTTP/1.1.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #213	Topic 1    You are building a data lake on Google Cloud for your Internet of Things (IoT) application. The IoT application has millions of sensors that are constantly streaming structured and unstructured data to your backend in the cloud. You want to build a highly available and resilient architecture based on Google-recommended practices. What should you do?",
    options: {
      a: "Stream data to Pub/Sub, and use Datafow to send data to Cloud Storage.",
      b: "Stream data to Pub/Sub, and use Storage Transfer Service to send data to BigQuery.",
      c: "Stream data to Datafow, and use Dataprep by Trifacta to send data to Bigtable.",
      d: "Stream data to Datafow, and use Storage Transfer Service to send data to BigQuery.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #214	Topic 1    You are running out of primary internal IP addresses in a subnet for a custom mode VPC. The subnet has the IP range 10.0.0.0/20, and the IP addresses are primarily used by virtual machines in the project. You need to provide more IP addresses for the virtual machines. What should you do?",
    options: {
      a: "Add a secondary IP range 10.1.0.0/20 to the subnet.",
      b: "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/18.",
      c: "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/22.",
      d: "Convert the subnet IP range from IPv4 to IPv6.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #215	Topic 1    Your company requires all developers to have the same permissions, regardless of the Google Cloud project they are working on. Your company's security policy also restricts developer permissions to Compute Engine, Cloud Functions, and Cloud SQL. You want to implement the security policy with minimal effort. What should you do?  Copy the role across all projects created within the organization with the gcloud iam roles copy command.  Assign the role to developers in those projects.   • Assign the preDefined role of Compute Admin to the Google group at the Google Cloud organization level.   Assign preDefined roles for Compute Engine, Cloud Functions, and Cloud SQL permissions to the Google group for each project in the Google Cloud organization.   Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions at the Google Cloud organization level.  Assign the custom role to the Google group.",
    options: {
      a: "• Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions in one project within the Google Cloud organization.",
      b: "• Add all developers to a Google group in Google Groups for Workspace.",
      c: "• Add all developers to a Google group in Cloud Identity.",
      d: "• Add all developers to a Google group in Cloud Identity.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #216	Topic 1    You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
    options: {
      a: "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
      b: "Create a script that uses the gcloud storage command to synchronize the on-premises storage with Cloud Storage, Schedule the script as a cron job.",
      c: "Create a Pub/Sub topic, and create a Cloud Function connected to the topic that writes data to Cloud Storage. Create an application that sends all medical images to the Pub/Sub topic.",
      d: "In the Google Cloud console, go to Cloud Storage. Upload the relevant images to the appropriate bucket.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #217	Topic 1    Your company has an internal application for managing transactional orders. The application is used exclusively by employees in a single physical location. The application requires strong consistency, fast queries, and ACID guarantees for multi-table transactional updates. The frst version of the application is implemented in PostgreSQL, and you want to deploy it to the cloud with minimal code changes. Which database is most appropriate for this application?  ",
    options: {
      a: "Bigtable",
      b: "BigQuery  ",
      c: "Cloud SQL  ",
      d: "Firestore",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #218	Topic 1    Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed ofine, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?   Migrate the workload.",
    options: {
      a: "Create an Instance Template with Spot VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization.",
      b: "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
      c: "Migrate the workload to a Google Kubernetes Engine cluster with Spot nodes.",
      d: "Migrate the workload to a Compute Engine Spot VM.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #219	Topic 1    You are planning to migrate the following on-premises data management solutions to Google Cloud:   One MySQL cluster for your main database  Apache Kafka for your event streaming platform  One Cloud SQL for PostgreSQL database for your analytical and reporting needs   You want to implement Google-recommended solutions for the migration. You need to ensure that the new solutions provide global scalability and require minimal operational and infrastructure management. What should you do?",
    options: {
      a: "Migrate from MySQL to Cloud SQL, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.",
      b: "Migrate from MySQL to Cloud Spanner, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.",
      c: "Migrate from MySQL to Cloud Spanner, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.",
      d: "Migrate from MySQL to Cloud SQL, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #220	Topic 1    During a recent audit of your existing Google Cloud resources, you discovered several users with email addresses outside of your Google Workspace domain. You want to ensure that your resources are only shared with users whose email addresses match your domain. You need to remove any mismatched users, and you want to avoid having to audit your resources to identify mismatched users. What should you do?",
    options: {
      a: "Create a Cloud Scheduler task to regularly scan your projects and delete mismatched users.",
      b: "Create a Cloud Scheduler task to regularly scan your resources and delete mismatched users.",
      c: "Set an organizational policy constraint to limit identities by domain to automatically remove mismatched users.",
      d: "Set an organizational policy constraint to limit identities by domain, and then retroactively remove the existing mismatched users",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #221	Topic 1     Your application is running on Google Cloud in a managed instance group (MIG). You see errors in Cloud Logging for one VM that one of the processes is not responsive. You want to replace this VM in the MIG quickly. What should you do?",
    options: {
      a: "Use the gcloud compute instances update command with a REFRESH action for the VM.",
      b: "Use the gcloud compute instance-groups managed recreate-instances command to recreate the VM.",
      c: "Select the MIG from the Compute Engine console and, in the menu, select Replace VMs.",
      d: "Update and apply the instance template of the MIG.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #222	Topic 1    You want to permanently delete a Pub/Sub topic managed by Confg Connector in your Google Cloud project. What should you do?",
    options: {
      a: "Use kubectl to create the label deleted-by-cnrm and to change its value to true for the topic resource.",
      b: "Use kubectl to delete the topic resource.",
      c: "Use gcloud CLI to delete the topic.",
      d: "Use gcloud CLI to update the topic label managed-by-cnrm to false.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #223	Topic 1    Your company is using Google Workspace to manage employee accounts. Anticipated growth will increase the number of personnel from 100 employees to 1,000 employees within 2 years. Most employees will need access to your company's Google Cloud account. The systems and processes will need to support 10x growth without performance degradation, unnecessary complexity, or security issues. What should you do?",
    options: {
      a: "Migrate the users to Active Directory. Connect the Human Resources system to Active Directory. Turn on Google Cloud Directory Sync (GCDS) for Cloud Identity. Turn on Identity Federation from Cloud Identity to Active Directory.",
      b: "Organize the users in Cloud Identity into groups. Enforce multi-factor authentication in Cloud Identity.",
      c: "Turn on identity federation between Cloud Identity and Google Workspace. Enforce multi-factor authentication for domain wide delegation.",
      d: "Use a third-party identity provider service through federation. Synchronize the users from Google Workplace to the third-party provider in real time.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #224	Topic 1    You want to host your video encoding software on Compute Engine. Your user base is growing rapidly, and users need to be able to encode their videos at any time without interruption or CPU limitations. You must ensure that your encoding solution is highly available, and you want to follow Google-recommended practices to automate operations. What should you do?",
    options: {
      a: "Deploy your solution on multiple standalone Compute Engine instances, and increase the number of existing instances when CPU utilization on Cloud Monitoring reaches a certain threshold.",
      b: "Deploy your solution on multiple standalone Compute Engine instances, and replace existing instances with high-CPU instances when CPU utilization on Cloud Monitoring reaches a certain threshold.",
      c: "Deploy your solution to an instance group, and increase the number of available instances whenever you see high CPU utilization in Cloud Monitoring.",
      d: "Deploy your solution to an instance group, and set the autoscaling based on CPU utilization.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #225	Topic 1     Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to solve the instance creation problem. What should you do?",
    options: {
      a: "Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.",
      b: "Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.",
      c: "Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.",
      d: "Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #226	Topic 1    You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?",
    options: {
      a: "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.",
      b: "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.",
      c: "Upload the image to Artifact Registry and create a Kubernetes Service referencing the image.",
      d: "Upload the image to Artifact Registry and create a Kubernetes Deployment referencing the image.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #227	Topic 1     You are using Looker Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day. At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Looker Studio are broken, and you want to analyze the problem. What should you do?",
    options: {
      a: "In Cloud Logging, create a flter for your Looker Studio report.",
      b: "Use the open source CLI tool, Snapshot Debugger, to fnd out why the data was not refreshed correctly.",
      c: "Review the Error Reporting page in the Google Cloud console to fnd any errors.",
      d: "Use the BigQuery interface to review the nightly job and look for any errors.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #228	Topic 1    You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
    options: {
      a: "Run a test using simulated maintenance events. If the test is successful, use Spot N2 Standard VMs when running future jobs.",
      b: "Run a test using simulated maintenance events. If the test is successful, use N2 Standard VMs when running future jobs.",
      c: "Run a test using a managed instance group. If the test is successful, use N2 Standard VMs in the managed instance group when running future jobs.",
      d: "Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #229	Topic 1    You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?",
    options: {
      a: "Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.",
      b: "Use the Reports view in the Cloud Billing Console to view the desired cost information.",
      c: "Visit the Cost Table page to get a CSV export and visualize it using Looker Studio.",
      d: "Confgure Billing Data Export to BigQuery and visualize the data in Looker Studio.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #230	Topic 1    Your company has a large quantity of unstructured data in different fle formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Datafow job. What should you do?",
    options: {
      a: "Upload the data to BigQuery using the bq command line tool.",
      b: "Upload the data to Cloud Storage using the gcloud storage command.",
      c: "Upload the data into Cloud SQL using the import function in the Google Cloud console.",
      d: "Upload the data into Cloud Spanner using the import function in the Google Cloud console.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #231	Topic 1    You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
    options: {
      a: "Navigate to Cloud Logging and view the application logs.",
      b: "Confgure a health check on the instance and set a consecutive successes Healthy threshold value of 1.",
      c: "Connect to the instance's serial console and read the application logs.",
      d: "Install and confgure the Ops agent and view the logs from Cloud Logging.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #232	Topic 1    You recently received a new Google Cloud project with an attached billing account where you will work. You need to create instances, set frewalls, and store data in Cloud Storage. You want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Use the gcloud CLI services enable cloudresourcemanager.googleapis.com command to enable all resources.",
      b: "Use the gcloud services enable compute.googleapis.com command to enable Compute Engine and the gcloud services enable storage-api.googleapis.com command to enable the Cloud Storage APIs.",
      c: "Open the Google Cloud console and enable all Google Cloud APIs from the API dashboard.",
      d: "Open the Google Cloud console and run gcloud init --project in a Cloud Shell.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #233	Topic 1    Your application development team has created Docker images for an application that will be deployed on Google Cloud. Your team does not want to manage the infrastructure associated with this application. You need to ensure that the application can scale automatically as it gains popularity. What should you do?",
    options: {
      a: "Create an instance template with the container image, and deploy a Managed Instance Group with Autoscaling.",
      b: "Upload Docker images to Artifact Registry, and deploy the application on Google Kubernetes Engine using Standard mode.",
      c: "Upload Docker images to the Cloud Storage, and deploy the application on Google Kubernetes Engine using Standard mode.",
      d: "Upload Docker images to Artifact Registry, and deploy the application on Cloud Run.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #234	Topic 1    You are migrating a business critical application from your local data center into Google Cloud. As part of your high-availability strategy, you want to ensure that any data used by the application will be immediately available if a zonal failure occurs. What should you do?",
    options: {
      a: "Store the application data on a zonal persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.",
      b: "Store the application data on a zonal persistent disk. If an outage occurs, create an instance in another zone with this disk attached.",
      c: "Store the application data on a regional persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.",
      d: "Store the application data on a regional persistent disk. If an outage occurs, create an instance in another zone with this disk attached.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #235	Topic 1    The DevOps group in your organization needs full control of Compute Engine resources in your development project. However, they should not have permission to create or update any other resources in the project. You want to follow Google's recommendations for setting permissions for the DevOps group. What should you do?",
    options: {
      a: "Grant the basic role roles/viewer and the preDefined role roles/compute.admin to the DevOps group.",
      b: "Create an IAM policy and grant all compute.instanceAdmin.* permissions to the policy. Attach the policy to the DevOps group.",
      c: "Create a custom role at the folder level and grant all compute.instanceAdmin.* permissions to the role. Grant the custom role to the DevOps group.",
      d: "Grant the basic role roles/editor to the DevOps group.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #236	Topic 1    Your team is running an on-premises ecommerce application. The application contains a complex set of microservices written in Python, and each microservice is running on Docker containers. configurations are injected by using environment variables. You need to deploy your current application to a serverless Google Cloud cloud solution. What should you do?",
    options: {
      a: "Use your existing CI/CD pipeline. Use the generated Docker images and deploy them to Cloud Run. Update the configurations and the required endpoints.",
      b: "Use your existing continuous integration and delivery (CI/CD) pipeline. Use the generated Docker images and deploy them to Cloud Function. Use the same configuration as on-premises.",
      c: "Use the existing codebase and deploy each service as a separate Cloud Function. Update the configurations and the required endpoints.",
      d: "Use your existing codebase and deploy each service as a separate Cloud Run. Use the same configurations as on-premises.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #237	Topic 1    You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n2-standard machine types. You need to optimize your cluster so that all workloads are using resources as efciently as possible. What should you do?      Keep the resource requests for the other microservices at the default.",
    options: {
      a: "Assign the pods of the image rendering microservice a higher pod priority than the other microservices.",
      b: "Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.",
      c: "Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.",
      d: "Confgure the required amount of CPU and memory in the resource requests specifcation of the image rendering microservice deployment.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #238	Topic 1    You are working in a team that has developed a new application that needs to be deployed on Kubernetes. The production application is business critical and should be optimized for reliability. You need to provision a Kubernetes cluster and want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Create a GKE Autopilot cluster. Enroll the cluster in the rapid release channel.",
      b: "Create a GKE Autopilot cluster. Enroll the cluster in the stable release channel.",
      c: "Create a zonal GKE standard cluster. Enroll the cluster in the stable release channel.",
      d: "Create a regional GKE standard cluster. Enroll the cluster in the rapid release channel.",
    },
    correct: ["b"],
  },
  {
    question:
      "Question #239	Topic 1    You are responsible for a web application on Compute Engine. You want your support team to be notifed automatically if users experience high latency for at least 5 minutes. You need a Google-recommended solution with no development cost. What should you do?",
    options: {
      a: "Export Cloud Monitoring metrics to BigQuery and use a Looker Studio dashboard to monitor your web application's latency.",
      b: "Create an alert policy to send a notifcation when the HTTP response latency exceeds the specifed threshold.",
      c: "Implement an App Engine service which invokes the Cloud Monitoring API and sends a notifcation in case of anomalies.",
      d: "Use the Cloud Monitoring dashboard to observe latency and take the necessary actions when the response latency exceeds the specifed threshold.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #240	Topic 1    You have an on-premises data analytics set of binaries that processes data fles in memory for about 45 minutes every midnight. The sizes of those data fles range from 1 gigabyte to 16 gigabytes. You want to migrate this application to Google Cloud with minimal effort and cost. What should you do?",
    options: {
      a: "Create a container for the set of binaries. Use Cloud Scheduler to start a Cloud Run job for the container.",
      b: "Create a container for the set of binaries. Deploy the container to Google Kubernetes Engine (GKE) and use the Kubernetes scheduler to start the application.",
      c: "Upload the code to Cloud Functions. Use Cloud Scheduler to start the application.",
      d: "Lift and shift to a VM on Compute Engine. Use an instance schedule to start and stop the instance.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #241	Topic 1    You used the gcloud container clusters command to create two Google Cloud Kubernetes (GKE) clusters: prod-cluster and dev-cluster.   prod-cluster is a standard cluster.  dev-cluster is an auto-pilot cluster.   When you run the kubectl get nodes command, you only see the nodes from prod-cluster. Which commands should you run to check the node status for dev-cluster?   kubectl get nodes    kubectl cluster-info   kubectl cluster-info",
    options: {
      a: "gcloud container clusters get-credentials dev-cluster",
      b: "gcloud container clusters update -generate-password dev-cluster kubectl get nodes",
      c: "kubectl confg set-context dev-cluster",
      d: "kubectl confg set-credentials dev-cluster",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #242	Topic 1    You recently discovered that your developers are using many service account keys during their development process. While you work on a long term improvement, you need to quickly implement a process to enforce short-lived service account credentials in your company. You have the following requirements:  All service accounts that require a key should be created in a centralized project called pj-sa.  Service account keys should only be valid for one day.   You need a Google-recommended solution that minimizes cost. What should you do?",
    options: {
      a: "Implement a Cloud Run job to rotate all service account keys periodically in pj-sa. Enforce an org policy to deny service account key creation with an exception to pj-sa.",
      b: "Implement a Kubernetes CronJob to rotate all service account keys periodically. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.",
      c: "Enforce an org policy constraint allowing the lifetime of service account keys to be 24 hours. Enforce an org policy constraint denying service account key creation with an exception on pj-sa.",
      d: "Enforce a DENY org policy constraint over the lifetime of service account keys for 24 hours. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #243	Topic 1    Your company is running a three-tier web application on virtual machines that use a MySQL database. You need to create an estimated total cost of cloud infrastructure to run this application on Google Cloud instances and Cloud SQL. What should you do?",
    options: {
      a: "Create a Google spreadsheet with multiple Google Cloud resource combinations. On a separate sheet, import the current Google Cloud prices and use these prices for the calculations within formulas.",
      b: "Use the Google Cloud Pricing Calculator and select the Cloud Operations template to Define your web application with as much detail as possible.",
      c: "Implement a similar architecture on Google Cloud, and run a reasonable load test on a smaller scale. Check the billing information, and calculate the estimated costs based on the real load your system usually handles.",
      d: "Use the Google Cloud Pricing Calculator to determine the cost of every Google Cloud resource you expect to use. Use similar size instances for the web server, and use your current on-premises machines as a comparison for Cloud SQL.",
    },
    correct: ["d"],
  },
  {
    question:
      "Question #244	Topic 1    You have a Bigtable instance that consists of three nodes that store personally identifable information (PII) data. You need to log all read or write operations, including any metadata or configuration reads of this database table, in your company's Security Information and Event Management (SIEM) system. What should you do?  • Create an alert by using webhook endpoints, with the SIEM endpoint as a receiver.   • Create a Cloud Functions instance to export logs from Cloud Logging to your SIEM.  • Create a Pub/Sub topic as a Cloud Logging sink destination, and add your SIEM as a subscriber to the topic.   Create a service account with read permissions for the Bigtable instance.  Create a custom Datafow job with this service account to export logs to the company's SIEM system.",
    options: {
      a: "• Navigate to Cloud Monitoring in the Google Cloud console, and create a custom monitoring job for the Bigtable instance to track all changes.",
      b: "• Navigate to the Audit Logs page in the Google Cloud console, and enable Admin Write logs for the Bigtable instance.",
      c: "• Navigate to the Audit Logs page in the Google Cloud console, and enable Data Read, Data Write and Admin Read logs for the Bigtable instance.",
      d: "• Install the Ops Agent on the Bigtable instance during configuration.",
    },
    correct: ["c"],
  },
  {
    question:
      "Question #245	Topic 1    You want to set up a Google Kubernetes Engine cluster. Verifable node identity and integrity are required for the cluster, and nodes cannot be accessed from the internet. You want to reduce the operational cost of managing your cluster, and you want to follow Google-recommended practices. What should you do?",
    options: {
      a: "Deploy a private autopilot cluster.",
      b: "Deploy a public autopilot cluster.",
      c: "Deploy a standard public cluster and enable shielded nodes.",
      d: "Deploy a standard private cluster and enable shielded nodes.",
    },
    correct: ["a"],
  },
  {
    question:
      "Question #246	Topic 1    Your company wants to migrate their on-premises workloads to Google Cloud. The current on-premises workloads consist of:   A Flask web application  A backend API  A scheduled long-running background job for ETL and reporting   You need to keep operational costs low. You want to follow Google-recommended practices to migrate these workloads to serverless solutions on Google Cloud. What should you do?",
    options: {
      a: "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.",
      b: "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.",
      c: "Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.",
      d: "Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.",
    },
    correct: ["d"],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to get a random subset of questions
function getRandomQuestions(data, numQuestions) {
  shuffleArray(data); // Shuffle the whole array
  return data.slice(0, numQuestions); // Return the first numQuestions elements
}

let currentQuestionIndex = 0;
let correctAnswers = 0;
let quizDataSubset = []; // Array to store the random subset of questions

document.addEventListener("DOMContentLoaded", function () {
  const questionContainer = document.getElementById("question-container");
  const submitBtn = document.getElementById("submit-btn");

  function loadQuestion() {
    const currentQuestion = quizDataSubset[currentQuestionIndex];
    const isMultipleCorrect = currentQuestion.correct.length > 1;
    const inputType = isMultipleCorrect ? "checkbox" : "radio";
    let optionsHtml = "";

    // Create an array from options and shuffle it
    const optionsArray = Object.entries(currentQuestion.options);
    shuffleArray(optionsArray);

    // Generate HTML for shuffled options
    optionsArray.forEach(([key, value]) => {
      optionsHtml += `<div class="option"><input type="${inputType}" name="option" value="${key}"> ${value}</div>`;
    });

    questionContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      ${optionsHtml}
    `;

    document.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", function () {
        const input = this.querySelector("input");
        if (input.type === "radio") {
          document
            .querySelectorAll(".option")
            .forEach((opt) => opt.classList.remove("selected"));
          this.classList.add("selected");
          input.checked = true;
        } else if (input.type === "checkbox") {
          input.checked = !input.checked;
          this.classList.toggle("selected");
        }
      });
    });
  }

  function checkAnswer() {
    const selectedOptions = document.querySelectorAll(
      "input[name='option']:checked"
    );
    if (selectedOptions.length === 0) {
      alert("Please select at least one option!");
      return;
    }

    const selectedValues = Array.from(selectedOptions).map((opt) => opt.value);
    const currentQuestion = quizDataSubset[currentQuestionIndex];
    const correctOptions = currentQuestion.correct;

    document.querySelectorAll(".option").forEach((option) => {
      const input = option.querySelector("input");
      if (correctOptions.includes(input.value)) {
        option.classList.add("correct");
      } else if (input.checked) {
        option.classList.add("incorrect");
      }
    });

    const allCorrect =
      selectedValues.every((val) => correctOptions.includes(val)) &&
      selectedValues.length === correctOptions.length;
    if (allCorrect) {
      correctAnswers++;
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizDataSubset.length) {
        loadQuestion();
      } else {
        questionContainer.innerHTML = `Quiz complete! You got ${correctAnswers} out of ${quizDataSubset.length} correct.`;
        submitBtn.textContent = "Play Again";
        submitBtn.removeEventListener("click", checkAnswer);
        submitBtn.addEventListener("click", () => {
          currentQuestionIndex = 0;
          correctAnswers = 0;
          quizDataSubset = getRandomQuestions(quizData, 20); // Get a new random set of 20 questions
          loadQuestion();
          submitBtn.textContent = "Submit";
          submitBtn.removeEventListener("click", () => location.reload());
          submitBtn.addEventListener("click", checkAnswer);
        });
      }
    }, 2000);
  }

  // Initialize the quiz with a random set of 20 questions
  quizDataSubset = getRandomQuestions(quizData, 20);
  loadQuestion();
  submitBtn.addEventListener("click", checkAnswer);
});
