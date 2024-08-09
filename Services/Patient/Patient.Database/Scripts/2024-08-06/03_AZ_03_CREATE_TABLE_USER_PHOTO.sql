USE [DhanvantariDB]
GO

/****** Object:  Table [dbo].[UserPhoto]    Script Date: 8/9/2024 2:15:35 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[UserPhoto](
	[Id] [uniqueidentifier] NOT NULL,
	[Photo] [varbinary](max) NOT NULL,
	[FileName] [nvarchar](100) NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [uniqueidentifier] NULL,
	[UpdatedDate] [datetime] NULL,
 CONSTRAINT [PK_UserPhoto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[UserPhoto] ADD  CONSTRAINT [DF_UserPhoto_Id]  DEFAULT (newid()) FOR [Id]
GO

ALTER TABLE [dbo].[UserPhoto] ADD  CONSTRAINT [DF_UserPhoto_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[UserPhoto]  WITH CHECK ADD  CONSTRAINT [FK_UserPhoto_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[UserPhoto] CHECK CONSTRAINT [FK_UserPhoto_User]
GO


