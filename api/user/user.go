// =================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// =================================================================================

package user

import (
	"context"

	"github.com/gogf/gf-demo-user/v2/api/user/v1"
)

type IUserV1 interface {
	CheckNickName(ctx context.Context, req *v1.CheckNickNameReq) (res *v1.CheckNickNameRes, err error)
	CheckPassport(ctx context.Context, req *v1.CheckPassportReq) (res *v1.CheckPassportRes, err error)
	IsSignedIn(ctx context.Context, req *v1.IsSignedInReq) (res *v1.IsSignedInRes, err error)
	Profile(ctx context.Context, req *v1.ProfileReq) (res *v1.ProfileRes, err error)
	SignIn(ctx context.Context, req *v1.SignInReq) (res *v1.SignInRes, err error)
	SignOut(ctx context.Context, req *v1.SignOutReq) (res *v1.SignOutRes, err error)
	SignUp(ctx context.Context, req *v1.SignUpReq) (res *v1.SignUpRes, err error)
	Register(ctx context.Context, req *v1.RegisterReq) (res *v1.RegisterRes, err error)
	GetKey(ctx context.Context, req *v1.GetKeyReq) (res *v1.GetKeyRes, err error)
	GetShare(cxt context.Context, req *v1.GetShareReq) (res *v1.GetShareRes, err error)
	SendKey(cxt context.Context, req *v1.SendKeyReq) (res *v1.SendKeyRes, err error)
	ResetPassword(cxt context.Context, req *v1.ResetPasswordReq) (res *v1.ResetPasswordRes, err error)
}
